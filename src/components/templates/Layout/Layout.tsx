import Footer from 'components/organisms/Footer';
import Header from 'components/organisms/Header';
import React, { ReactNode } from 'react';

export const Layout = ({ children }: { children: ReactNode }) => (
  <>
    <Header />
    {children}
    <Footer />
  </>
);

export default Layout;
