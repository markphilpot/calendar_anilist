import React, { useCallback } from 'react';

import {
  usersAiringSchedule_Page_mediaList_media,
  usersAiringSchedule_Page_mediaList_media_externalLinks,
} from '../graphql/types/usersAiringSchedule';
import { ExternalLinkType } from '../graphql/types/globalTypes';
import StreamingIcon from './StreamingIcon';
import { head } from 'ramda';
import classNames from 'classnames';

const getSiteRank = (site: string) => {
  switch (site) {
    case 'HIDIVE':
      return 0;
    case 'Crunchyroll':
      return 1;
    case 'YouTube':
      return 2;
    case 'Netflix':
      return 3;
    case 'Disney Plus':
      return 4;
    case 'VRV':
      return 9;
    case 'Bilibili TV':
      return 10;
    default:
      return 7;
  }
};

type Props = {
  media: usersAiringSchedule_Page_mediaList_media;
  scaleCard: boolean;
};

const Card = (props: Props) => {
  const { media, scaleCard } = props;

  const title = media.title?.userPreferred;
  const imgSrc = scaleCard ? media.coverImage?.large : media.coverImage?.medium;
  const siteUrl = media.siteUrl;
  const streamingExternalLinks: usersAiringSchedule_Page_mediaList_media_externalLinks[] =
    media.externalLinks?.filter(
      (el): el is usersAiringSchedule_Page_mediaList_media_externalLinks => el?.type === ExternalLinkType.STREAMING
    ) ?? [];
  const streamingExternalLink = head(streamingExternalLinks.sort((a, b) => getSiteRank(a.site) - getSiteRank(b.site)));

  const handleOnClick = useCallback(() => {
    if (siteUrl) window.open(siteUrl, '_blank');
  }, [siteUrl]);

  return (
    <div
      className={
        'relative m-1 mb-2 flex flex-row items-start rounded-md bg-transparent bg-slate-100 p-1 hover:bg-fuchsia-900 hover:bg-opacity-30 dark:bg-slate-800 dark:hover:bg-fuchsia-900 dark:hover:bg-opacity-30'
      }
      onClick={handleOnClick}
    >
      {imgSrc && (
        <div
          className={classNames('h-[50px] w-[50px]', {
            'h-[100px] w-[100px]': scaleCard,
          })}
        >
          <img
            className={classNames('h-[50px] w-[50px] max-w-none rounded-md object-cover', {
              'h-[100px] w-[100px]': scaleCard,
            })}
            src={imgSrc}
            alt={title ?? ''}
          />
        </div>
      )}
      {title && (
        <div
          className={classNames('ml-1 max-h-[3rem] overflow-hidden text-ellipsis font-lato text-xs font-bold', {
            'text-base': scaleCard,
          })}
        >
          {title}
        </div>
      )}
      {streamingExternalLink && <StreamingIcon link={streamingExternalLink} />}
    </div>
  );
};

export default Card;
