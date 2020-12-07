import React from 'react';
import { useRouter } from 'next/router';
import { useSelector } from 'react-redux';

import JobCard from '../components/JobCard';
import { Container } from '../styles/pages/home';

const Home = () => {
  const router = useRouter();
  const token = useSelector(state => state.auth.token);

  if (!token) {
    router.push('/login');
    return <span>Carregando...</span>;
  }

  return (
    <Container>
      <h1>Vagas recomendadas</h1>
      <JobCard />
    </Container>
  );
};

export default Home;
