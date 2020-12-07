import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 1.5rem;
  border-radius: 0.25rem;
  border: 1px solid #eaeaea;
  transition: 0.25s ease-in-out;
  cursor: pointer;

  h3 {
    flex: 1;
  }

  hr {
    display: block;
    height: 1px;
    border: 0;
    border-top: 1px solid #eaeaea;
    margin: 1.25rem 0;
  }

  &:hover {
    border-color: transparent;
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
  }
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const Col = styled.div`
  display: flex;
  flex-direction: row;
  flex: 1;
`;

const Badge = styled.div`
  border-radius: 0.25rem;
  padding: 0.35rem 0.75rem;
  background: #fafafa;
  font-size: small;
  margin-top: 0.75rem;
  margin-right: 0.5rem;
  display: flex;
  align-items: center;

  span {
    margin-left: 0.35rem;
  }
`;

const IconContainer = styled.div`
  border-radius: 0.25rem;
  background: ${props => props.theme.colors.primary};
  font-size: small;
  margin-right: 0.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 2.5rem;
  height: 2.5rem;
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-size: small;
`;

export { Container, Row, Badge, Col, IconContainer, TextContainer };
