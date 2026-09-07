import React, { createContext, PropsWithChildren, useState } from 'react';

export interface IShowInfoContext {
  isInformationOpen: { aboutOrganizer: boolean; whatIProvide: boolean };
  toggleAboutOrganizer: () => void;
  toggleWhatIProvide: () => void;
  showAllInfo: () => void;
  closeAllInfo: () => void;
  isAllOpen: boolean;
  setRef: (ref: React.RefObject<HTMLElement> | null) => void;
}

export const ShowInfoContext = createContext<IShowInfoContext>({
  isInformationOpen: { aboutOrganizer: false, whatIProvide: false },
  toggleAboutOrganizer: () => {},
  toggleWhatIProvide: () => {},
  showAllInfo: () => {},
  closeAllInfo: () => {},
  isAllOpen: false,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  setRef: (ref: React.RefObject<HTMLElement> | null) => {},
});

export const ShowInfoProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [isInformationOpen, setIsInformationOpen] = useState({
    aboutOrganizer: false,
    whatIProvide: false,
  });

  const [ref, setRef] = useState<React.RefObject<HTMLElement> | null>(null);

  const isAllOpen = Object.values(isInformationOpen).every(element => !!element);

  const toggleAboutOrganizer = () => {
    setIsInformationOpen({
      ...isInformationOpen,
      aboutOrganizer: !isInformationOpen.aboutOrganizer,
    });
  };

  const toggleWhatIProvide = () => {
    setIsInformationOpen({
      ...isInformationOpen,
      whatIProvide: !isInformationOpen.whatIProvide,
    });
  };

  const showAllInfo = () => {
    ref?.current.scrollIntoView();
    setIsInformationOpen({ aboutOrganizer: true, whatIProvide: true });
  };

  const closeAllInfo = () => {
    setIsInformationOpen({ aboutOrganizer: false, whatIProvide: false });
  };

  return (
    <ShowInfoContext.Provider
      value={{
        isInformationOpen,
        toggleAboutOrganizer,
        toggleWhatIProvide,
        showAllInfo,
        closeAllInfo,
        isAllOpen,
        setRef,
      }}
    >
      {children}
    </ShowInfoContext.Provider>
  );
};
