import { GraphQLClient } from 'graphql-request';

const client = new GraphQLClient(`${process.env.NEXT_PUBLIC_API_URL}/graphql`);

export default client;
