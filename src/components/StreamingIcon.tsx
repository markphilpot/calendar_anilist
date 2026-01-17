import { AiringScheduleMedia, ArrayElement } from '../types';

type Props = {
  link: NonNullable<ArrayElement<NonNullable<AiringScheduleMedia['externalLinks']>>>;
};

const StreamingIcon = (props: Props) => {
  const { link } = props;

  if (!link.icon) {
    return null;
  }

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    window.open(link.url ?? '', '_blank', 'noopener,noreferrer');
  };

  return (
    <button
      type="button"
      className={'absolute bottom-1 right-1 rounded p-0.5 text-center opacity-40 hover:opacity-100 cursor-pointer'}
      style={{
        backgroundColor: link.color ?? '#000000',
      }}
      onClick={handleClick}
      aria-label={`Watch on ${link.site}`}
    >
      <img className={'h-3 w-3'} src={link.icon} alt={link.site} />
    </button>
  );
};

export default StreamingIcon;
