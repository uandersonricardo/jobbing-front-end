import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0.75rem 0.5rem;
  background-color: #fafafa;
  width: 240px;
  align-items: center;

  ul {
    list-style-type: none;
    padding: 0;
    margin: 1rem 0;
    width: 100%;

    li {
      width: 100%;
      padding: 0.5rem;

      &:hover {
        background-color: #eaeaea;
      }

      a {
        border-radius: 0.25rem;
        text-decoration: none;
        color: inherit;
        display: flex;
        align-items: center;
        font-weight: bold;
        color: #666666;

        span {
          margin-left: 0.5rem;
        }
      }
    }
  }
`;

const Logo = styled.img`
  height: 40px;
  width: auto;
`;

export { Container, Logo };
