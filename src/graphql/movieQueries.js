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
