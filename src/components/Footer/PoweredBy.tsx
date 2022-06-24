import React from 'react';

const PoweredBy = () => {
  return (
    <div className={'mr-2'}>
      Powered by{' '}
      <a
        className={'underline decoration-1 underline-offset-2'}
        href={'https://anilist.co'}
        target={'_blank'}
        rel={'noreferrer'}
      >
        Anilist
      </a>
    </div>
  );
};

export default PoweredBy;
