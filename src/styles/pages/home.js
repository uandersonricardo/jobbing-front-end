import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;

  h1 {
    font-size: 3rem;
    color: ${props => props.theme.colors.text};
    margin-bottom: 2rem;
  }
`;

export { Container };
