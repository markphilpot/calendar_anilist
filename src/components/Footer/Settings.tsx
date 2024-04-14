import React, { useState, useRef, Fragment, useCallback, useEffect } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { IoSettingsOutline } from 'react-icons/io5';
import useSettings from '../../hooks/useSettings';

const Settings = () => {
  const [open, setOpen] = useState(false);

  const cancelButtonRef = useRef(null);

  const {
    weekStartsSunday,
    setWeekStartsSunday,
    anilistUsername,
    setAnilistUsername,
    showEmptyDays,
    setShowEmptyDays,
    showEnglishTitle,
    setShowEnglishTitle,
  } = useSettings();

  const [startsSunday, setStartsSunday] = useState(weekStartsSunday ?? true);
  const [username, setUsername] = useState(anilistUsername ?? '');
  const [emptyDays, setEmptyDays] = useState(showEmptyDays ?? true);
  const [showEngTitle, setShowEngTitle] = useState(showEnglishTitle ?? true);

  useEffect(() => {
    setStartsSunday(weekStartsSunday ?? true);
    setUsername(anilistUsername ?? '');
    setEmptyDays(showEmptyDays ?? true);
    setShowEngTitle(showEnglishTitle ?? true);
  }, [weekStartsSunday, anilistUsername, showEmptyDays, showEnglishTitle]);

  const handleSave = useCallback(() => {
    setWeekStartsSunday(startsSunday);
    setAnilistUsername(username);
    setShowEmptyDays(emptyDays);
    setShowEnglishTitle(showEngTitle);
    setOpen(false);
  }, [
    startsSunday,
    username,
    emptyDays,
    showEngTitle,
    setWeekStartsSunday,
    setAnilistUsername,
    setShowEmptyDays,
    setShowEnglishTitle,
  ]);

  return (
    <>
      <IoSettingsOutline className={'cursor-pointer'} onClick={() => setOpen(true)} />
      <Transition.Root show={open} as={Fragment}>
        <Dialog as="div" className="relative z-10" initialFocus={cancelButtonRef} onClose={setOpen}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
          </Transition.Child>

          <div className="fixed inset-0 z-10 overflow-y-auto">
            <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                enterTo="opacity-100 translate-y-0 sm:scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              >
                <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white px-4 pt-5 pb-4 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg sm:p-6">
                  <div>
                    <div className="mt-3 text-center sm:mt-5">
                      <Dialog.Title as="h3" className="text-lg font-medium leading-6 text-gray-900">
                        Weekly Anime Settings
                      </Dialog.Title>
                      <div className="mt-2 text-left">
                        <div className={'mb-4'}>
                          <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                            Anilist Username
                          </label>
                          <div className="mt-1">
                            <input
                              type="text"
                              name="username"
                              id="username"
                              className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                              placeholder=""
                              value={username}
                              onChange={(e) => setUsername(e.target.value)}
                            />
                          </div>
                        </div>

                        <div className="relative mb-4 flex items-start">
                          <div className="flex h-5 items-center">
                            <input
                              id="start-sunday"
                              aria-describedby="start-sunday-description"
                              name="start-sunday"
                              type="checkbox"
                              className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                              checked={startsSunday}
                              onChange={() => setStartsSunday(!startsSunday)}
                            />
                          </div>
                          <div className="ml-3 text-sm">
                            <label htmlFor="start-sunday" className="font-medium text-gray-700">
                              Week Starts on Sunday
                            </label>
                          </div>
                        </div>

                        <div className="relative mb-4 flex items-start">
                          <div className="flex h-5 items-center">
                            <input
                              id="show-empty-days"
                              aria-describedby="show-empty-days-description"
                              name="show-empty-days"
                              type="checkbox"
                              className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                              checked={emptyDays}
                              onChange={() => setEmptyDays(!emptyDays)}
                            />
                          </div>
                          <div className="ml-3 text-sm">
                            <label htmlFor="show-empty-days" className="font-medium text-gray-700">
                              Show Empty Days
                            </label>
                          </div>
                        </div>

                        <div className="relative flex items-start">
                          <div className="flex h-5 items-center">
                            <input
                              id="show-english-title"
                              aria-describedby="show-english-title-description"
                              name="show-english-title"
                              type="checkbox"
                              className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                              checked={showEngTitle}
                              onChange={() => setShowEngTitle(!showEngTitle)}
                            />
                          </div>
                          <div className="ml-3 text-sm">
                            <label htmlFor="show-english-title" className="font-medium text-gray-700">
                              Show English Title
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="mt-5 sm:mt-6 sm:flex sm:flex-row-reverse">
                    <button
                      type="button"
                      className="inline-flex w-full justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:ml-3 sm:w-auto sm:text-sm"
                      onClick={handleSave}
                    >
                      Done
                    </button>
                    <button
                      type="button"
                      className="mt-3 inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-base font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:mt-0 sm:w-auto sm:text-sm"
                      onClick={() => setOpen(false)}
                      ref={cancelButtonRef}
                    >
                      Cancel
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition.Root>
    </>
  );
};

export default Settings;
