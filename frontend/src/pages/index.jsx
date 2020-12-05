import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { useSelector, useDispatch } from 'react-redux';

import { incrementCounter, decrementCounter } from '../actions/counter';
import { Container, Logo, Button } from '../styles/pages/Home';

const Home = () => {
  const globalState = useSelector(state => state.counter.counter);
  const dispatch = useDispatch();

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
          <Button>Teste</Button>
        </Link>
      </header>
      <main>
        <h1 className="title">Welcome to jobbing!</h1>
        <p className="description">
          Get started by editing <code>pages/index.js</code>
        </p>
        <h1>GLOBAL COUNTER {globalState}</h1>
        <button
          type="submit"
          onClick={() => dispatch(incrementCounter(globalState))}
        >
          Increment +
        </button>
        {'  '}
        <button
          type="submit"
          onClick={() => dispatch(decrementCounter(globalState))}
        >
          Decrement -
        </button>
        <br />
      </main>
    </Container>
  );
};

export default Home;
