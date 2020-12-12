import styled from 'styled-components';

const Container = styled.div`
  margin-top: 1rem;
  display: flex;
  flex-direction: column;

  h2 {
    font-size: 2rem;
    color: ${props => props.theme.colors.text};
    margin-bottom: 2rem;
  }
`;

export { Container };
