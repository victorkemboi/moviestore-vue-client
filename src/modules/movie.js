let actor = {
  actorId: "",
  name: ""
};

let genre = {
  genreId: "",
  genre: ""
};

let movie = {
  movieId: "",
  title: "",
  year: "",
  cast: [actor],
  genres: [genre]
};
let purchase = {
  purchaseId: "",
  customer: {
    customerId: ""
  }
};

const MoviesModule = {
  namespaced: true,
  state: () => ({
    parsedSearch: "",
    myMovies: [movie],
    newMovies: [movie],
    cart: [purchase]
  }),
  mutations: {
    parseSearch: (state, val) => (state.parsedSearch = val),
    updateNewMovies: (state, val) => (state.newMovies = val)
  },
  actions: {
    parseSearch: ({ commit }, val) => commit("parseSearch", val),
    updateNewMovies: ({ commit }, val) => commit("updateNewMovies", val)
  }
};
export default MoviesModule;
