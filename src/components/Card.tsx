import React, { useCallback } from 'react';

import './Card.css';
import { usersAiringSchedule_Page_mediaList_media } from '../graphql/types/usersAiringSchedule';

type Props = {
  media: usersAiringSchedule_Page_mediaList_media;
};

const Card = (props: Props) => {
  const { media } = props;

  const title = media.title?.userPreferred;
  const imgSrc = media.coverImage?.medium;
  const siteUrl = media.siteUrl;

  const handleOnClick = useCallback(() => {
    if (siteUrl) window.open(siteUrl, '_blank');
  }, [siteUrl]);

  return (
    <div className={'Card'} onClick={handleOnClick}>
      {imgSrc && (
        <div className={'imgWrapper'}>
          <img className={'cardImage'} src={imgSrc} alt={title ?? ''} />
        </div>
      )}
      {title && <div className={'cardTitle'}>{title}</div>}
    </div>
  );
};

export default Card;
