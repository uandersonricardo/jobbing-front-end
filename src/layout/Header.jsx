import Link from 'next/link';
import React from 'react';
import { useDispatch } from 'react-redux';

import { signIn } from '../actions/auth';
import { Container, Photo, Logo, MenuContainer } from '../styles/layout/header';

const Header = () => {
  const dispatch = useDispatch();

  return (
    <Container>
      <Link href="/">
        <a>
          <Logo src="/jobbing.svg" alt="jobbing Logo" className="logo" />
        </a>
      </Link>
      <MenuContainer />
      <Photo src="/user.jpg" onClick={() => dispatch(signIn(null, null))} />
    </Container>
  );
};

export default Header;
