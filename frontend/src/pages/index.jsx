import React from 'react';
import { useRouter } from 'next/router';
import { useSelector } from 'react-redux';

const Home = () => {
  const router = useRouter();
  const token = useSelector(state => state.auth.token);

  if (!token) {
    router.push('/login');
    return <span>Carregando...</span>;
  }

  return <h1>Logado</h1>;
};

export default Home;
