import React, { Fragment } from 'react';
import Head from 'next/head';
import Sticky from 'react-stickynode';
import { ThemeProvider } from 'styled-components';
import { cryptoTheme } from 'common/src/theme/crypto';
import { ResetCSS } from 'common/src/assets/css/style';
import {
  GlobalStyle,
  ContentWrapper,
} from 'common/src/containers/Crypto/crypto.style';
import { DrawerProvider } from 'common/src/contexts/DrawerContext';
import Navbar from 'common/src/containers/Crypto/Navbar';
import Banner from 'common/src/containers/Crypto/BannerSection';
import BannerSlider from 'common/src/containers/Crypto/BannerSlider';
import Transactions from 'common/src/containers/Crypto/Transaction';
import ControlSections from 'common/src/containers/Crypto/ControlSection';
import TrustedProofSections from 'common/src/containers/Crypto/TrustedProof';
import ScalableSections from 'common/src/containers/Crypto/ScalableSection';
import SlideSections from 'common/src/containers/Crypto/CryptoSlides';
import BetaSections from 'common/src/containers/Crypto/BetaSection';
import Footer from 'common/src/containers/Crypto/Footer';

export default () => {
  return (
    <ThemeProvider theme={cryptoTheme}>
      <Fragment>
        <Head>
          <title>Cryptocurrency | A react next landing page</title>
          <meta name="Description" content="React next landing page" />
          <meta name="theme-color" content="#ec5555" />

          {/* Load google fonts */}
          <link
            href="https://fonts.googleapis.com/css?family=Poppins:300,400,500,600,700|Heebo:300,400,500,700"
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
          <Banner />
          <BannerSlider />
          <Transactions />
          <ControlSections />
          <TrustedProofSections />
          <ScalableSections />
          <SlideSections />
          <BetaSections />
          <Footer />
        </ContentWrapper>
      </Fragment>
    </ThemeProvider>
  );
};
