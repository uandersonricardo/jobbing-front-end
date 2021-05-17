import { gql } from 'graphql-request';

export const VALIDATE = gql`
  query validate {
    validate {
      _id
      name
      email
      photo
      bio
      city
      state
      country
      _company {
        foundation
        size
        sector
      }
      _applicant {
        areaOfInterest
        birthday
        maritalStatus
        educationLevel
        salaryExpectation
        gender
      }
    }
  }
`;
