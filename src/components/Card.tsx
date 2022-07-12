import React, { useCallback } from 'react';

// import './Card.css';
import {
  usersAiringSchedule_Page_mediaList_media,
  usersAiringSchedule_Page_mediaList_media_externalLinks,
} from '../graphql/types/usersAiringSchedule';
import { ExternalLinkType } from '../graphql/types/globalTypes';
import StreamingIcon from './StreamingIcon';

type Props = {
  media: usersAiringSchedule_Page_mediaList_media;
};

const Card = (props: Props) => {
  const { media } = props;

  const title = media.title?.userPreferred;
  const imgSrc = media.coverImage?.medium;
  const siteUrl = media.siteUrl;
  const streamingExternalLink: usersAiringSchedule_Page_mediaList_media_externalLinks | null | undefined =
    media.externalLinks?.find((el) => el?.type === ExternalLinkType.STREAMING);

  const handleOnClick = useCallback(() => {
    if (siteUrl) window.open(siteUrl, '_blank');
  }, [siteUrl]);

  return (
    <div
      className={
        'relative m-1 flex flex-row items-center rounded-md bg-transparent hover:bg-fuchsia-900 hover:bg-opacity-30'
      }
      onClick={handleOnClick}
    >
      {imgSrc && (
        <div className={'h-[50px] w-[50px]'}>
          <img className={'h-[50px] w-[50px] max-w-none rounded-md object-cover'} src={imgSrc} alt={title ?? ''} />
        </div>
      )}
      {title && <div className={'ml-1 font-lato text-sm font-bold'}>{title}</div>}
      {streamingExternalLink && <StreamingIcon link={streamingExternalLink} />}
    </div>
  );
};

export default Card;
