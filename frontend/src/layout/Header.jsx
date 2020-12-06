import React from 'react';
import { useDispatch } from 'react-redux';

import { signIn } from '../actions/auth';
import { Container, Photo } from '../styles/layout/header';

const Header = () => {
  const dispatch = useDispatch();

  return (
    <Container>
      <Photo src="/user.jpg" onClick={() => dispatch(signIn(null, null))} />
    </Container>
  );
};

export default Header;
