import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  align-items: center;
  justify-content: flex-end;
  padding: 1rem;
  margin-bottom: 1rem;
`;

const Photo = styled.img`
  border-radius: 100%;
  height: 32px;
  width: 32px;
  cursor: pointer;
`;

export { Container, Photo };
