import React, { useState } from 'react';

export const useShowInfo = (ref: React.RefObject<HTMLElement | null>) => {
  const [isInformationOpen, setIsInformationOpen] = useState({
    aboutOrganizer: false,
    whatIProvide: false,
  });

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
    if (ref.current) {
      ref.current.scrollIntoView();
    }
    setIsInformationOpen({ aboutOrganizer: true, whatIProvide: true });
  };

  const closeAllInfo = () => {
    setIsInformationOpen({ aboutOrganizer: false, whatIProvide: false });
  };

  return {
    isInformationOpen,
    toggleAboutOrganizer,
    toggleWhatIProvide,
    showAllInfo,
    closeAllInfo,
    isAllOpen,
  };
};
