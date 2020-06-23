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
  mutation CreateCustomer($input: Object!) {
    CreateCustomer(input: $input) {
      customer_id
    }
  }
`;
