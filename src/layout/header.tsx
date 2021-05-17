import {
  InputLeftElement,
  Flex,
  Icon,
  Image,
  Input,
  InputGroup
} from '@chakra-ui/react';
import Link from 'next/link';
import React from 'react';
import { FiSearch } from 'react-icons/fi';

import { useAuth } from '../contexts/auth';

const Header = () => {
  const { logout } = useAuth();

  return (
    <Flex
      paddingX="1rem"
      paddingY="0.5rem"
      alignItems="center"
      backgroundColor="pink.500"
    >
      <Flex w={{ base: 'auto', md: '16rem' }} marginRight="1rem">
        <Link href="/">
          <a>
            <Image src="/jobbing-white.svg" alt="jobbing Logo" height="32px" />
          </a>
        </Link>
      </Flex>
      <Flex flex="1">
        <InputGroup>
          <InputLeftElement pointerEvents="none">
            <Icon as={FiSearch} color="pink.200" />
          </InputLeftElement>
          <Input
            placeholder="Procure vagas"
            backgroundColor="pink.400"
            color="white"
            _placeholder={{ color: 'pink.200' }}
            focusBorderColor="pink.500"
            border="0"
          />
        </InputGroup>
      </Flex>
      <Flex
        w={{ base: 'auto', md: '16rem' }}
        justifyContent="flex-end"
        marginLeft="1rem"
      >
        <Image
          src="/user.jpg"
          boxSize="32px"
          borderRadius="100%"
          cursor="pointer"
          onClick={logout}
        />
      </Flex>
    </Flex>
  );
};

export default Header;
