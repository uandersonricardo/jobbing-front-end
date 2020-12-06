import React from 'react';

import Sidebar from './Sidebar';
import Header from './Header';
import { Container, Content, Wrapper } from '../styles/layout/layout';

const Layout = ({ children }) => {
  return (
    <Container>
      <Sidebar />
      <Wrapper>
        <Header />
        <Content>{children}</Content>
      </Wrapper>
    </Container>
  );
};

export default Layout;
