import React from 'react';
import { Flex } from '@chakra-ui/react';

import Header from './Header';

const Layout = ({ children }) => {
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
