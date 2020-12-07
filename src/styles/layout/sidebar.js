import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0.75rem 0.25rem;
  background-color: #fafafa;
  width: 240px;
  align-items: center;

  ul {
    list-style-type: none;
    padding: 0;
    margin: 1rem 0;
    width: 100%;
  }

  ul li {
    width: 100%;
    padding: 0.5rem;

    &:hover {
      background-color: #eaeaea;
    }
  }

  ul li a {
    border-radius: 0.25rem;
    text-decoration: none;
    color: inherit;
  }
`;

const Logo = styled.img`
  height: 40px;
  width: auto;
`;

export { Container, Logo };
