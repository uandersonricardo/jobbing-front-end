import React from 'react';
import Link from 'next/link';
import { FiBriefcase } from 'react-icons/fi';

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
            <a>
              <FiBriefcase />
              <span>Vagas recomendadas</span>
            </a>
          </Link>
        </li>
      </ul>
    </Container>
  );
};

export default Sidebar;
