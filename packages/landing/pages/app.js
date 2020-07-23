import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import { ThemeProvider } from 'styled-components';
import Sticky from 'react-stickynode';
import { appTheme } from 'common/src/theme/app';
import {
  GlobalStyle,
  AppWrapper,
  ConditionWrapper,
} from 'common/src/containers/App/app.style';
import { ResetCSS } from 'common/src/assets/css/style';
import Navbar from 'common/src/containers/App/Navbar';
import DomainSection from 'common/src/containers/App/Banner';
import FeatureSection from 'common/src/containers/App/FeatureSection';
import ControllSection from 'common/src/containers/App/Control';
import TestimonialSection from 'common/src/containers/App/Testimonial';
import PartnerHistory from 'common/src/containers/App/PartnerHistory';
import PaymentSection from 'common/src/containers/App/PaymentSection';
import Footer from 'common/src/containers/App/Footer';
import FeatureSlider from 'common/src/containers/App/FeatureSlider';
import FeatureSliderTwo from 'common/src/containers/App/FeatureSliderTwo';
import { DrawerProvider } from 'common/src/contexts/DrawerContext';

function getSize() {
  return {
    innerHeight: window.innerHeight,
    innerWidth: window.innerWidth,
    outerHeight: window.outerHeight,
    outerWidth: window.outerWidth,
  };
}

function useWindowSize() {
  let [windowSize, setWindowSize] = useState(getSize());

  function handleResize() {
    setWindowSize(getSize());
  }

  useEffect(() => {
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return windowSize;
}

export default () => {
  const size = process.browser && useWindowSize();
  return (
    <ThemeProvider theme={appTheme}>
      <>
        <Head>
          <title>App | A react next landing page</title>
          <meta name="Description" content="React next landing page" />
          <meta name="theme-color" content="#ec5555" />
          <link
            href="https://fonts.googleapis.com/css?family=Open+Sans:300,400,700"
            rel="stylesheet"
          />
        </Head>

        <ResetCSS />
        <GlobalStyle />

        <AppWrapper>
          <Sticky top={0} innerZ={9999} activeClass="sticky-nav-active">
            <DrawerProvider>
              <Navbar />
            </DrawerProvider>
          </Sticky>
          <DomainSection />
          <FeatureSection />
          <ControllSection />
          <ConditionWrapper id="keyfeature">
            {size.innerWidth > 1100 ? <FeatureSlider /> : <FeatureSliderTwo />}
          </ConditionWrapper>
          <PartnerHistory />
          <PaymentSection />
          <TestimonialSection />
          <Footer />
        </AppWrapper>
      </>
    </ThemeProvider>
  );
};
