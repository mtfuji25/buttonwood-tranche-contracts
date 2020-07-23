import React, { Fragment } from 'react';
import Head from 'next/head';
import Sticky from 'react-stickynode';
import { ThemeProvider } from 'styled-components';
import { agencyTheme } from 'common/src/theme/agency';
import { ResetCSS } from 'common/src/assets/css/style';
import {
  GlobalStyle,
  AgencyWrapper,
} from 'common/src/containers/Agency/agency.style';
import Navbar from 'common/src/containers/Agency/Navbar';
import BannerSection from 'common/src/containers/Agency/BannerSection';
import FeatureSection from 'common/src/containers/Agency/FeatureSection';
import AboutUsSection from 'common/src/containers/Agency/AboutUsSection';
import WorkHistory from 'common/src/containers/Agency/WorkHistory';
import BlogSection from 'common/src/containers/Agency/BlogSection';
import TestimonialSection from 'common/src/containers/Agency/TestimonialSection';
import TeamSection from 'common/src/containers/Agency/TeamSection';
import VideoSection from 'common/src/containers/Agency/VideoSection';
import NewsletterSection from 'common/src/containers/Agency/NewsletterSection';
import QualitySection from 'common/src/containers/Agency/QualitySection';
import Footer from 'common/src/containers/Agency/Footer';
import { DrawerProvider } from 'common/src/contexts/DrawerContext';
import FaqSection from 'common/src/containers/Agency/FaqSection';

export default () => {
  return (
    <ThemeProvider theme={agencyTheme}>
      <Fragment>
        {/* Start agency head section */}
        <Head>
          <title>Agency | A react next landing page</title>
          <meta name="Description" content="React next landing page" />
          <meta name="theme-color" content="#10ac84" />

          {/* Load google fonts */}
          <link
            href="https://fonts.googleapis.com/css?family=Roboto:100,100i,300,300i,400,400i,500,500i,700,700i,900,900i"
            rel="stylesheet"
          />
        </Head>
        <ResetCSS />
        <GlobalStyle />
        {/* End of agency head section */}
        {/* Start agency wrapper section */}
        <AgencyWrapper>
          <Sticky top={0} innerZ={9999} activeClass="sticky-nav-active">
            <DrawerProvider>
              <Navbar />
            </DrawerProvider>
          </Sticky>
          <BannerSection />
          <FeatureSection />
          <AboutUsSection />
          <WorkHistory />
          <BlogSection />
          <QualitySection />
          <VideoSection />
          <TestimonialSection />
          <TeamSection />
          <FaqSection />
          <NewsletterSection />
          <Footer />
        </AgencyWrapper>
        {/* End of agency wrapper section */}
      </Fragment>
    </ThemeProvider>
  );
};
