import styled from 'styled-components';

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;

  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 2rem;
    border-bottom: 1px solid #eaeaea;
  }

  main {
    flex: 1;
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
  font-weight: bold;
`;

const FormContainer = styled.div`
  width: 320px;
  padding: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  h3 {
    font-size: 28px;
    color: ${props => props.theme.colors.text};
    margin-bottom: 2rem;
  }

  label {
    display: block;
    margin-bottom: 0.5rem;
    width: 100%;
    font-size: small;
  }

  input {
    width: 100%;
    height: 40px;
    border: 1px solid #eaeaea;
    background-color: white;
    transition: box-shadow 0.3s ease 0s;
    padding-top: 0px;
    padding-bottom: 0px;
    padding-left: 0.5rem;
    padding-right: 0.5rem;
    border-radius: 0.25rem;
    margin-bottom: 1rem;
  }

  button[type='submit'] {
    padding: 1rem 1.5rem;
    background-color: ${props => props.theme.colors.primary};
    color: white;
    font-size: 16px;
    text-decoration: none;
    border-radius: 0.25rem;
    cursor: pointer;
    border: none;
    width: 100%;
    margin-top: 1rem;
    font-weight: bold;
  }

  button[type='button'] {
    padding: 1rem 1.5rem;
    background-color: white;
    color: ${props => props.theme.colors.text};
    font-size: 16px;
    text-decoration: none;
    border-radius: 0.25rem;
    cursor: pointer;
    border: none;
    width: 100%;
    margin-top: 1rem;
    font-weight: bold;
  }
`;

export { Container, Logo, Button, FormContainer };
