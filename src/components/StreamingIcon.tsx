import React from 'react';
import { usersAiringSchedule_Page_mediaList_media_externalLinks } from '../graphql/types/usersAiringSchedule';

type Props = {
  link: usersAiringSchedule_Page_mediaList_media_externalLinks;
};

const StreamingIcon = (props: Props) => {
  const { link } = props;

  if (!link.icon) {
    return null;
  }

  return (
    <a
      className={'absolute bottom-0 right-0 rounded p-1 text-center opacity-40'}
      style={{
        backgroundColor: link.color ?? '#000000',
      }}
      href={link.url ?? ''}
    >
      <img className={'h-[10px] w-[10px]'} src={link.icon} alt={link.site} />
    </a>
  );
};

export default StreamingIcon;
