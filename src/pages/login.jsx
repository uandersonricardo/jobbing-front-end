import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useSelector, useDispatch } from 'react-redux';

import { signIn } from '../actions/auth';
import { Container, Logo, Button, FormContainer } from '../styles/pages/login';

const Login = () => {
  const router = useRouter();
  const token = useSelector(state => state.auth.token);
  const dispatch = useDispatch();

  if (token) {
    router.push('/');
    return <span>Carregando...</span>;
  }

  return (
    <Container>
      <Head>
        <title>jobbing - Plataforma de vagas de emprego</title>
      </Head>
      <header>
        <Link href="/">
          <a>
            <Logo src="/jobbing.svg" alt="jobbing Logo" className="logo" />
          </a>
        </Link>
        <Link href="/">
          <Button>Cadastre-se</Button>
        </Link>
      </header>
      <main>
        <FormContainer>
          <h3>Entrar</h3>
          <label htmlFor="fuser">Usuário</label>
          <input
            type="text"
            placeholder="Digite o nome de usuário"
            id="fuser"
            name="fuser"
          />
          <label htmlFor="fpassword">Senha</label>
          <input
            type="password"
            placeholder="Digite a senha"
            id="fpassword"
            name="fpassword"
          />
          <button
            type="submit"
            onClick={() => dispatch(signIn('0123456789', 'Uanderson'))}
          >
            Entrar
          </button>
          <button type="button">Esqueci a senha</button>
        </FormContainer>
      </main>
    </Container>
  );
};

export default Login;
