import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  align-items: center;
  padding: 1rem;
  margin-bottom: 1rem;
  border-bottom: 1px solid #eaeaea;
`;

const Photo = styled.img`
  border-radius: 100%;
  height: 32px;
  width: 32px;
  cursor: pointer;
`;

const Logo = styled.img`
  height: 40px;
  width: auto;
`;

const MenuContainer = styled.div`
  display: flex;
  align-items: center;
  flex: 1;
`;

export { Container, Photo, Logo, MenuContainer };
