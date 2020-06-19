import Vuex from "vuex";
import Vue from "vue";

Vue.use(Vuex);

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
const store = new Vuex.Store({
  state: {
    customer: {
      loggedIn: false,
      token: "",
      customerId: "",
      user: {
        id: "",
        username: ""
      }
    },
    myMovies: [movie],
    newMovies: [movie],
    cart: [purchase]
  },
  mutations: {
    login: (state, val) => (state.customer.loggedIn = val),
    updateToken: (state, val) => (state.customer.token = val),
    updateCustomerId: (state, val) => (state.customer.customerId = val),
    updateUser: (state, val) => (state.customer.user = val),
    updateNewMovies: (state, val) => (state.newMovies = val)
  },
  actions: {
    login: ({ commit }, val) => commit("login", val),
    updateToken: ({ commit }, val) => commit("updateToken", val),
    updateCustomerId: ({ commit }, val) => commit("updateCustomerId", val),
    updateUser: ({ commit }, val) => commit("updateUser", val),
    updateNewMovies: ({ commit }, val) => commit("updateNewMovies", val)
  }
});

export default store;
