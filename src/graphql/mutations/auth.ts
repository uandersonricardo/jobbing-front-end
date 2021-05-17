import { gql } from 'graphql-request';

export const LOGIN = gql`
  mutation signInMutation($email: String!, $password: String!) {
    login(email: $email, password: $password)
  }
`;
