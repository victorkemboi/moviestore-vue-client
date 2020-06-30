import gql from "graphql-tag";

export const GET_RECENT_MOVIES_QUERY = gql`
  query {
    movies {
      movieId
      title
      year
      cast {
        actorId
        name
      }
      genres {
        genreId
        genre
      }
    }
  }
`;

export const SEARCH_QUERY = gql`
  query SearchQuery($searchText: String!) {
    search(searchText: $searchText) {
      movieId
      title
      year
      cast {
        actorId
        name
      }
      genres {
        genreId
        genre
      }
    }
  }
`;

export const SIGNUP_MUTATION = gql`
  mutation CreateCustomer($input: CustomerInput!) {
    createCustomer(input: $input) {
      customer {
        customerId
      }
    }
  }
`;

export const SIGNIN_MUTATION = gql`
  mutation SignIn($username: String!, $password: String!) {
    tokenAuth(username: $username, password: $password) {
      token
    }
  }
`;

export const CUSTOMER_QUERY = gql`
  query {
    customer {
      customerId
      firstName
      lastName
      phoneNumber
      email
      user {
        username
        id
      }
      accountBalance
    }
  }
`;

`
customer {
  customerId
  firstName
  lastName
  phoneNumber
  email
  user {
    username
    id
  }
  accountBalance
} `;
