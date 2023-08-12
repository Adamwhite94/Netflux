const size = {
    mobileMSmallerBP: '325px',
    mobileM: '376px',
    mobileLSmallerBP: '377px',
    pixel: '413px',
    mobileL: '426px',
    tabletSmallerBP: '427px',
    tablet: '769px',
    laptopSmallerBP: '968px',
    laptop: '1024px',
    laptopLSmallerBP: '1220px',
    laptopL: '1440px',
    desktopSmallerBP: '2000px',
    desktop: '2560px'
  };

  export const device = {
    mobileMSmallerBP: `(min-width: ${size.mobileMSmallerBP})`,
    mobileM: `(max-width: ${size.mobileM})`,
    mobileLSmallerBP: `(min-width: ${size.mobileLSmallerBP})`,
    pixelBP: `(max-width: ${size.pixel})`,
    mobileL: `(max-width: ${size.mobileL})`,
    tabletSmallerBP: `(min-width: ${size.tabletSmallerBP})`,
    tablet: `(max-width: ${size.tablet})`,
    laptopSmallerBP: `(min-width: ${size.laptopSmallerBP})`,
    laptop: `(max-width: ${size.laptop})`,
    laptopLSmallerBP: `(min-width: ${size.laptopLSmallerBP})`,
    laptopL: `(max-width: ${size.laptopL})`,
    desktopSmallerBP: `(min-width: ${size.desktopSmallerBP})`,
    desktop: `(max-width: ${size.desktop})`,
   
  };