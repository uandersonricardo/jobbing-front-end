import React from 'react';
import Link from 'next/link';

import { Container, Logo } from '../styles/layout/sidebar';

const Sidebar = () => {
  return (
    <Container>
      <Link href="/">
        <a>
          <Logo src="/jobbing.svg" alt="jobbing Logo" className="logo" />
        </a>
      </Link>
      <ul>
        <li>
          <Link href="/">
            <a>Minhas vagas</a>
          </Link>
        </li>
      </ul>
    </Container>
  );
};

export default Sidebar;
