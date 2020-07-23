import React, { Fragment } from 'react';
import { ThemeProvider } from 'styled-components';
import { Modal } from '@redq/reuse-modal';
import Sticky from 'react-stickynode';
import { DrawerProvider } from 'common/src/contexts/DrawerContext';
import { saasThreeTheme } from 'common/src/theme/saasThree';
import { ResetCSS } from 'common/src/assets/css/style';
import {
  GlobalStyle,
  ContentWrapper,
} from 'common/src/containers/SaasThree/saasThree.style';

import BannerSection from 'common/src/containers/SaasThree/Banner';
import Navbar from 'common/src/containers/SaasThree/Navbar';
import ServiceSection from 'common/src/containers/SaasThree/Service';
import PricingSection from 'common/src/containers/SaasThree/Pricing';
import PartnerSection from 'common/src/containers/SaasThree/Partner';
import TrialSection from 'common/src/containers/SaasThree/Trial';
import FeatureSection from 'common/src/containers/SaasThree/Feature';
import UpdateScreen from 'common/src/containers/SaasThree/UpdateScreen';
import TestimonialSection from 'common/src/containers/SaasThree/Testimonial';
import Newsletter from 'common/src/containers/SaasThree/Newsletter';
import Footer from 'common/src/containers/SaasThree/Footer';
import '@redq/reuse-modal/es/index.css';
import SEO from '../components/seo';

export default () => {
  return (
    <ThemeProvider theme={saasThreeTheme}>
      <Fragment>
        <SEO title="SaaS | A react next landing page" />
        <Modal />
        <ResetCSS />
        <GlobalStyle />

        <ContentWrapper>
          <Sticky top={0} innerZ={9999} activeClass="sticky-nav-active">
            <DrawerProvider>
              <Navbar />
            </DrawerProvider>
          </Sticky>
          <BannerSection />
          <ServiceSection />
          <UpdateScreen />
          <FeatureSection />
          <PartnerSection />
          <PricingSection />
          <TestimonialSection />
          <TrialSection />
          <Newsletter />
          <Footer />
        </ContentWrapper>
      </Fragment>
    </ThemeProvider>
  );
};
