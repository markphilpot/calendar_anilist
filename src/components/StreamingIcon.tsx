import React, { useCallback, MouseEventHandler } from 'react';
import { AiringScheduleMedia, ArrayElement } from '../types';

type Props = {
  link: NonNullable<ArrayElement<NonNullable<AiringScheduleMedia['externalLinks']>>>;
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
      className={'absolute bottom-1 right-1 rounded p-0.5 text-center opacity-40 hover:opacity-100'}
      style={{
        backgroundColor: link.color ?? '#000000',
      }}
      onClick={handleOnClick}
    >
      <img className={'h-[12px] w-[12px]'} src={link.icon} alt={link.site} />
    </div>
  );
};

export default StreamingIcon;
