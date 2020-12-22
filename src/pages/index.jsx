import React from 'react';
import { useRouter } from 'next/router';
import { useSelector } from 'react-redux';
import { Flex, Grid, Heading, Select } from '@chakra-ui/react';

import JobCard from '../components/JobCard';

const Home = () => {
  const router = useRouter();
  const token = useSelector(state => state.auth.token);

  if (!token) {
    router.push('/login');
    return <span>Carregando...</span>;
  }

  return (
    <Grid
      width="100%"
      height="100%"
      templateRows="1fr"
      templateColumns="16rem 1fr 16rem"
      templateAreas="
        'leftbar main rightbar'
      "
      display={{ base: 'flex', md: 'grid' }}
      flexDirection="column"
    >
      <Flex
        gridArea="leftbar"
        borderRightWidth="1px"
        borderColor="gray.200"
        padding="1.5rem"
      >
        asd
      </Flex>
      <Flex
        gridArea="rightbar"
        borderLeftWidth="1px"
        borderColor="gray.200"
        padding="1.5rem"
        display={{ base: 'none', md: 'flex' }}
      >
        asd
      </Flex>
      <Flex gridArea="main" direction="column">
        <Flex
          padding="1.5rem"
          borderBottom="1px"
          borderColor="gray.200"
          alignItems="center"
          justifyContent="space-between"
        >
          <Heading as="h5" size="md">
            Vagas recomendadas
          </Heading>
          <Select
            placeholder="Ordenar"
            size="md"
            width="auto"
            focusBorderColor="pink.400"
          />
        </Flex>
        <JobCard />
        <JobCard />
      </Flex>
    </Grid>
  );
};

export default Home;
