import React, { Fragment } from 'react';
import Head from 'next/head';
import Sticky from 'react-stickynode';
import { ThemeProvider } from 'styled-components';
import { saasTheme } from 'common/src/theme/saas';
import { ResetCSS } from 'common/src/assets/css/style';
import {
  GlobalStyle,
  ContentWrapper,
} from 'common/src/containers/Saas/saas.style';
import Navbar from 'common/src/containers/Saas/Navbar';
import BannerSection from 'common/src/containers/Saas/BannerSection';
import FeatureSection from 'common/src/containers/Saas/FeatureSection';
import VisitorSection from 'common/src/containers/Saas/VisitorSection';
import ServiceSection from 'common/src/containers/Saas/ServiceSection';
import Footer from 'common/src/containers/Saas/Footer';
import PricingSection from 'common/src/containers/Saas/PricingSection';
import TrialSection from 'common/src/containers/Saas/TrialSection';
import TimelineSection from 'common/src/containers/Saas/TimelineSection';
import TestimonialSection from 'common/src/containers/Saas/TestimonialSection';
import PartnerSection from 'common/src/containers/Saas/PartnerSection';
import { DrawerProvider } from 'common/src/contexts/DrawerContext';
import FaqSection from 'common/src/containers/Saas/FaqSection';

export default () => {
  return (
    <ThemeProvider theme={saasTheme}>
      <Fragment>
        <Head>
          <title>Saas | A react next landing page</title>
          <meta name="Description" content="React next landing page" />
          <meta name="theme-color" content="#ec5555" />
          {/* Load google fonts */}
          <link
            href="https://fonts.googleapis.com/css?family=Roboto:100,100i,300,300i,400,400i,500,500i,700,700i,900,900i"
            rel="stylesheet"
          />
        </Head>
        <ResetCSS />
        <GlobalStyle />
        <ContentWrapper>
          <Sticky top={0} innerZ={9999} activeClass="sticky-nav-active">
            <DrawerProvider>
              <Navbar />
            </DrawerProvider>
          </Sticky>
          <BannerSection />
          <FeatureSection />
          <VisitorSection />
          <ServiceSection />
          <PricingSection />
          <TestimonialSection />
          <PartnerSection />
          <TimelineSection />
          <FaqSection />
          <TrialSection />
          <Footer />
        </ContentWrapper>
      </Fragment>
    </ThemeProvider>
  );
};
