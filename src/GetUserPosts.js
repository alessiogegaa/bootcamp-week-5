import { gql } from '@apollo/client';

export const GET_USER_POSTS = gql`
  query($id: ID!) {
    user(id: $id) {
      posts {
        data {
          id
          title
        }
      }
    }
  }
`;
