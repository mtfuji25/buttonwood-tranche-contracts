import React, { Fragment } from 'react';
import Head from 'next/head';
import { ThemeProvider } from 'styled-components';
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

export default () => {
  return (
    <ThemeProvider theme={saasThreeTheme}>
      <Fragment>
        <Head>
          <title>SaaS | A react next landing page</title>
          <meta name="Description" content="React next landing page" />
          <meta name="theme-color" content="#ec5555" />
          {/* Load google fonts */}
          <link
            href="https://fonts.googleapis.com/css?family=Roboto:300,400,400i,500,500i,700,900|Open+Sans:400,400i,600,700"
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
