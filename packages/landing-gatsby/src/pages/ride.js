import React, { Fragment } from 'react';
import Sticky from 'react-stickynode';
import { ThemeProvider } from 'styled-components';
import { rideTheme } from 'common/src/theme/ride';
import { ResetCSS } from 'common/src/assets/css/style';
import {
  GlobalStyle,
  ContentWrapper,
} from 'common/src/containers/Ride/ride.style';
import { DrawerProvider } from 'common/src/contexts/DrawerContext';
import Navbar from 'common/src/containers/Ride/Navbar';
import Banner from 'common/src/containers/Ride/Banner';
import RideOption from 'common/src/containers/Ride/RideOption';
import LocationSection from 'common/src/containers/Ride/LocationSelection';
import FeatureSection from 'common/src/containers/Ride/Feature';
import LatestNewsSection from 'common/src/containers/Ride/LatestNews';
import HowItWorkSection from 'common/src/containers/Ride/HowItWorks';
import TestimonialSection from 'common/src/containers/Ride/TestimonialSection';
import FeatureSlider from 'common/src/containers/Ride/FeatureSlider';
import Footer from 'common/src/containers/Ride/Footer';

export default () => {
  return (
    <ThemeProvider theme={rideTheme}>
      <Fragment>
        <ResetCSS />
        <GlobalStyle />
        <ContentWrapper>
          <Sticky top={0} innerZ={9999} activeClass="sticky-nav-active">
            <DrawerProvider>
              <Navbar />
            </DrawerProvider>
          </Sticky>
          <Banner />
          <RideOption />
          <LocationSection />
          <FeatureSlider />
          <FeatureSection />
          <LatestNewsSection />
          <HowItWorkSection />
          <TestimonialSection />
          <Footer />
        </ContentWrapper>
      </Fragment>
    </ThemeProvider>
  );
};
