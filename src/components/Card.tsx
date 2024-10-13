import React from 'react';

import StreamingIcon from './StreamingIcon';
import { head } from 'ramda';
import classNames from 'classnames';
import { AiringScheduleMedia, AiringScheduleMediaExternalLink } from '../types';
import useSettings from '../hooks/useSettings';

const getSiteRank = (site?: string) => {
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
  media: AiringScheduleMedia;
  scaleCard: boolean;
};

const Card = (props: Props) => {
  const { media, scaleCard } = props;

  const { showEnglishTitle } = useSettings();

  const title = media.title?.romaji;
  const titleEnglish = media.title?.english;
  const imgSrc = scaleCard ? media.coverImage?.large : media.coverImage?.medium;
  const siteUrl = media.siteUrl;
  const streamingExternalLinks =
    media.externalLinks?.filter((el): el is AiringScheduleMediaExternalLink => el?.type === 'STREAMING') ?? [];
  const streamingExternalLink = head(streamingExternalLinks.sort((a, b) => getSiteRank(a.site) - getSiteRank(b.site)));

  return (
    <a
      className={
        'relative m-1 mb-2 flex flex-row items-start rounded-md bg-transparent bg-slate-100 hover:bg-fuchsia-900 hover:bg-opacity-30 dark:bg-slate-800 dark:hover:bg-fuchsia-900 dark:hover:bg-opacity-30'
      }
      href={siteUrl ?? ''}
      target={'_blank'}
      rel={'noreferrer noopener'}
    >
      {imgSrc && (
        <div
          className={classNames('h-[114px] w-[80px]', {
            'h-[171px] w-[120px]': scaleCard,
          })}
        >
          <img
            className={classNames('h-[114px] w-[80px] max-w-none rounded-md object-cover', {
              'h-[171px] w-[120px]': scaleCard,
            })}
            src={imgSrc}
            alt={title ?? ''}
          />
        </div>
      )}
      {title && (
        <div className="flex h-full flex-grow flex-col overflow-hidden gap-4 pt-1">
          <div
            className={classNames(
              'ml-2 max-h-[114px] overflow-hidden text-ellipsis font-lato text-xs font-bold line-clamp-3'
            )}
          >
            {title}
          </div>
          {showEnglishTitle && (
            <div
              className={classNames(
                'ml-2 max-h-[114px] overflow-hidden text-ellipsis font-lato text-xs font-bold line-clamp-2'
              )}
            >
              {titleEnglish}
            </div>
          )}
          {/* This is technically a nested <a> but I think this is a proper use case for it*/}
          {streamingExternalLink && <StreamingIcon link={streamingExternalLink} />}
        </div>
      )}
    </a>
  );
};

export default Card;
