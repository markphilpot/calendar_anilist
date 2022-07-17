import React, { useCallback, MouseEventHandler } from 'react';
import { usersAiringSchedule_Page_mediaList_media_externalLinks } from '../graphql/types/usersAiringSchedule';

type Props = {
  link: usersAiringSchedule_Page_mediaList_media_externalLinks;
};

const StreamingIcon = (props: Props) => {
  const { link } = props;

  const handleOnClick: MouseEventHandler<HTMLDivElement> = useCallback(
    (e) => {
      e.stopPropagation();
      if (link.url) window.open(link.url, '_blank');
    },
    [link?.url]
  );

  if (!link.icon) {
    return null;
  }

  return (
    <div
      className={'absolute bottom-0 right-0 rounded p-1 text-center opacity-40 hover:opacity-100'}
      style={{
        backgroundColor: link.color ?? '#000000',
      }}
      onClick={handleOnClick}
    >
      <img className={'h-[10px] w-[10px]'} src={link.icon} alt={link.site} />
    </div>
  );
};

export default StreamingIcon;
