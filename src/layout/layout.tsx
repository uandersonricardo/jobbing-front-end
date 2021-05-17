import React, { ReactNode } from 'react';
import { Flex } from '@chakra-ui/react';

import Header from './header';

interface LayoutProps {
  children: ReactNode
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <Flex direction="column" width="100vw" height="100vh">
      <Header />
      <Flex flex="1" direction="column">
        {children}
      </Flex>
    </Flex>
  );
};

export default Layout;
