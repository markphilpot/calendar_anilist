import React, { useCallback, useRef, useState } from 'react';

import { IoSettingsOutline, IoReloadOutline, IoLogoGithub } from 'react-icons/io5';
import useSettings from '../../hooks/useSettings';
import ThemeMenu from './ThemeMenu';
import PoweredBy from './PoweredBy';

type Props = {
  refresh: () => Promise<unknown>;
};

const Footer = (props: Props) => {
  const { refresh } = props;
  const checkboxRef = useRef(null);
  const usernameRef = useRef(null);

  const { weekStartsSunday, setWeekStartsSunday, anilistUsername, setAnilistUsername } = useSettings();

  const [editSettings, setEditSettings] = useState(false);

  const openSettings = useCallback(() => {
    setEditSettings(true);
  }, []);

  const saveSettings = useCallback(() => {
    // @ts-ignore
    setWeekStartsSunday(checkboxRef.current.checked);
    // @ts-ignore
    setAnilistUsername(usernameRef.current.value);
    setEditSettings(false);
  }, [setAnilistUsername, setWeekStartsSunday]);

  return (
    <div className={'mb-2 box-border flex w-full flex-row items-center justify-center text-sm'}>
      <PoweredBy />
      <div className={'mr-2 cursor-pointer'}>
        <ThemeMenu />
      </div>
      <IoReloadOutline className={'mr-2 cursor-pointer bg-transparent'} onClick={refresh} />
      <IoLogoGithub
        className={'mr-2 cursor-pointer bg-transparent'}
        onClick={() => window.open('https://github.com/markphilpot/calendar_anilist', '_blank')}
      />
      {editSettings ? (
        <div
          className={
            'p box-border flex w-[400px] flex-row items-center rounded-md border border-black dark:border-white'
          }
        >
          <div className={'flex flex-col'}>
            <div className={'m-2 flex flex-row'}>
              <label>
                Week Starts Sunday:
                <input className={'ml-2'} ref={checkboxRef} type={'checkbox'} defaultChecked={weekStartsSunday} />
              </label>
            </div>
            <div className={'m-2 flex flex-row'}>
              <label>
                Anilist Username:
                <input
                  className={'ml-2 rounded border border-black p-2'}
                  ref={usernameRef}
                  type={'text'}
                  defaultValue={anilistUsername}
                />
              </label>
            </div>
          </div>
          <div className={'flex flex-col'}>
            <button
              className={'cursor-pointer rounded border border-black bg-transparent p-2 dark:border-white'}
              onClick={saveSettings}
            >
              Save
            </button>
          </div>
        </div>
      ) : (
        <IoSettingsOutline className={'cursor-pointer'} onClick={openSettings} />
      )}
    </div>
  );
};

export default Footer;
