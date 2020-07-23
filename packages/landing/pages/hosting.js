import React from 'react';
import Head from 'next/head';
import { ThemeProvider } from 'styled-components';
import Sticky from 'react-stickynode';
import { hostingTheme } from 'common/src/theme/hosting';
import {
  GlobalStyle,
  ContentWrapper,
} from 'common/src/containers/Hosting/hosting.style';
import { ResetCSS } from 'common/src/assets/css/style';
import Navbar from 'common/src/containers/Hosting/Navbar';
import FeatureSection from 'common/src/containers/Hosting/Features';
import InfoSection from 'common/src/containers/Hosting/Info';
import DomainSection from 'common/src/containers/Hosting/Domain';
import PaymentSection from 'common/src/containers/Hosting/Payment';
import GuaranteeSection from 'common/src/containers/Hosting/Guarantee';
import ServicesSection from 'common/src/containers/Hosting/Services';
import BannerSection from 'common/src/containers/Hosting/Banner';
import PricingSection from 'common/src/containers/Hosting/Pricing';
import TestimonialSection from 'common/src/containers/Hosting/Testimonials';
import ContactSection from 'common/src/containers/Hosting/Contact';
import Footer from 'common/src/containers/Hosting/Footer';
import { DrawerProvider } from 'common/src/contexts/DrawerContext';
import { ParallaxProvider } from 'react-scroll-parallax';
import FaqSection from 'common/src/containers/Hosting/Faq';

export default () => {
  return (
    <ThemeProvider theme={hostingTheme}>
      <ParallaxProvider>
        <Head>
          <title>Hosting | A react next landing page</title>
          <meta name="Description" content="React next landing page" />
          <meta name="theme-color" content="#eb4d4b" />
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
          <FeatureSection />
          <InfoSection />
          <PricingSection />
          <DomainSection />
          <ServicesSection />
          <PaymentSection />
          <TestimonialSection />
          <GuaranteeSection />
          <FaqSection />
          <ContactSection />
          <Footer />
        </ContentWrapper>
      </ParallaxProvider>
    </ThemeProvider>
  );
};
