import axios from 'axios';
import { Image } from '@/types/spotify';

export const imageSortBySize = (images: Array<Image>) =>
  images.sort((a, b) => (a.width < b.width ? -1 : 1));

export const convertDuration = (duration: number) => {
  let sec = Math.round(duration / 1000);
  let min = Math.floor(sec / 60);
  const hour = Math.floor(min / 60);
  min %= 60;
  sec %= 60;
  return { hour, min, sec };
};

export const trackDuration = (duration: number) => {
  const time = convertDuration(duration);
  if (time.hour <= 0) delete time.hour;
  return Object.values(time)
    .map((t) => (t < 10 ? '0' + t : t))
    .join(':');
};

export const openPageInNewTab = (url: string) => {
  if (!url) return;
  const a = document.createElement('a');
  a.setAttribute('href', url);
  a.setAttribute('target', '_blank');
  a.click();
  a.remove();
};

export const getCountryByIP = () => {
  try {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(async function (position) {
        const result = await axios.get('http://ws.geonames.org/countryCode', {
          data: {
            lat: position.coords.latitude,
            lng: position.coords.longitude,
            type: 'JSON',
          },
        });
        return result.data.countryName;
      });
    } else {
      throw new Error('This browser does not support HTML Geolocation API!');
    }
  } catch (error) {
    console.warn('Get country error: ' + String(error));
  }
};
