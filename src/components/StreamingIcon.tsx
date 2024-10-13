import React from 'react';
import { AiringScheduleMedia, ArrayElement } from '../types';

type Props = {
  link: NonNullable<ArrayElement<NonNullable<AiringScheduleMedia['externalLinks']>>>;
};

const StreamingIcon = (props: Props) => {
  const { link } = props;

  if (!link.icon) {
    return null;
  }

  return (
    <a
      className={'absolute bottom-1 right-1 rounded p-0.5 text-center opacity-40 hover:opacity-100'}
      style={{
        backgroundColor: link.color ?? '#000000',
      }}
      href={link.url ?? ''}
      target={'_blank'}
      rel={'noreferrer noopener'}
    >
      <img className={'h-[12px] w-[12px]'} src={link.icon} alt={link.site} />
    </a>
  );
};

export default StreamingIcon;
