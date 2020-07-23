import React, { Fragment } from 'react';
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
import FaqSection from 'common/src/containers/Saas/FaqSection';
import Footer from 'common/src/containers/Saas/Footer';
import PricingSection from 'common/src/containers/Saas/PricingSection';
import TrialSection from 'common/src/containers/Saas/TrialSection';
import TimelineSection from 'common/src/containers/Saas/TimelineSection';
import TestimonialSection from 'common/src/containers/Saas/TestimonialSection';
import PartnerSection from 'common/src/containers/Saas/PartnerSection';
import { DrawerProvider } from 'common/src/contexts/DrawerContext';
import SEO from '../components/seo';

export default () => {
  return (
    <ThemeProvider theme={saasTheme}>
      <Fragment>
        <SEO title="Saas | A react next landing page" />
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
