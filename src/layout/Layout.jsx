import React from 'react';

import Header from './Header';
import { Container, Content, Wrapper } from '../styles/layout/layout';

const Layout = ({ children }) => {
  return (
    <Container>
      <Wrapper>
        <Header />
        <Content>{children}</Content>
      </Wrapper>
    </Container>
  );
};

export default Layout;
