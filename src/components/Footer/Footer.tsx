import React from 'react';

import { IoReloadOutline, IoLogoGithub } from 'react-icons/io5';
import { ImSpinner2 } from 'react-icons/im';
import PoweredBy from './PoweredBy';
import Settings from './Settings';

type Props = {
  refresh: () => Promise<unknown>;
  loading: boolean;
};

const Footer = (props: Props) => {
  const { refresh, loading } = props;

  return (
    <div className={'mb-2 box-border flex w-full flex-row items-center justify-center text-sm'}>
      <PoweredBy />
      <IoLogoGithub
        className={'mr-2 mr-4 cursor-pointer bg-transparent'}
        onClick={() => window.open('https://github.com/markphilpot/calendar_anilist', '_blank')}
      />
      {loading ? (
        <ImSpinner2 className={'mr-2 animate-spin cursor-pointer bg-transparent'} />
      ) : (
        <IoReloadOutline className={'mr-2 cursor-pointer bg-transparent'} onClick={refresh} />
      )}
      <Settings />
    </div>
  );
};

export default Footer;
