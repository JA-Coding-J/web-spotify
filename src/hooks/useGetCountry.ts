import { ActionType } from '@/actions/ActionType';
import { useAppDispatch } from '@/store';
import axios from 'axios';
import { useCallback } from 'react';

export const useGetCountryByIP = () => {
  const dispatch = useAppDispatch();
  const getCountry = useCallback(() => {
    try {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          async function (position) {
            const result = await axios.get(
              'http://api.geonames.org/findNearby?username=joe_zou',
              {
                params: {
                  lat: position.coords.latitude,
                  lng: position.coords.longitude,
                  type: 'JSON',
                },
              },
            );
            dispatch({
              type: ActionType.LOCATE,
              payload: result.data.geonames?.[0].countryCode || '',
            });
          },
          (error) => {
            console.log('Error callback:', error);
          },
        );
      } else {
        throw new Error('This browser does not support HTML Geolocation API!');
      }
    } catch (error) {
      console.warn('Get country error: ' + String(error));
    }
  }, [dispatch]);

  return getCountry;
};
