import React from 'react';
import '@/assets/styles/card.css';

type TitleWithUrl = { name: string; extUrl?: string };

interface AlbumCardProp {
  img: { src: string; alt?: string };
  imageType?: 'cycle';
  mainTitle?: TitleWithUrl;
  subTitle?: Array<TitleWithUrl>;
  onClickCard?: React.MouseEventHandler;
}

function Card({
  img,
  imageType,
  mainTitle,
  subTitle,
  onClickCard,
}: AlbumCardProp) {
  const stopPropagation = (e: React.MouseEvent) => e.stopPropagation();
  return (
    img && (
      <div className="card" onClick={onClickCard}>
        <div className="card-box">
          <div className="card-img">
            <img
              src={img.src}
              alt={img.alt || ''}
              style={imageType === 'cycle' ? { borderRadius: '50%' } : {}}
            />
          </div>
          {mainTitle && (
            <div className="card-desc">
              <p className="name">
                <a
                  href={mainTitle.extUrl}
                  target="_blank"
                  rel="noreferrer"
                  onClick={stopPropagation}
                >
                  {mainTitle.name}
                </a>
              </p>
              <p className="sub-desc">
                {subTitle.map((sub, i) => (
                  <a
                    href={sub.extUrl}
                    target="_blank"
                    key={i}
                    rel="noreferrer"
                    onClick={stopPropagation}
                  >
                    {sub.name}
                  </a>
                ))}
              </p>
            </div>
          )}
        </div>
      </div>
    )
  );
}

export default Card;
