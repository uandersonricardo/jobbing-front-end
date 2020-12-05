import styled from 'styled-components';

const Container = styled.div`
  width: 100vw;
  height: 100vh;

  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 2rem;
    border-bottom: 1px solid #eaeaea;
  }

  main {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    h1 {
      font-size: 54px;
      color: ${props => props.theme.colors.primary};
      margin-top: 40px;

      p {
        margin-top: 24px;
        font-size: 24px;
        line-height: 32px;
      }
    }
  }
`;

const Logo = styled.img`
  height: 40px;
  width: auto;
`;

const Button = styled.a`
  padding: 0.5rem 1rem;
  background-color: ${props => props.theme.colors.primary};
  color: white;
  text-decoration: none;
  border-radius: 0.25rem;
  cursor: pointer;
`;

export { Container, Logo, Button };
