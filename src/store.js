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
let customer = {
  customerId: "",
  firstName: "",
  lastName: "",
  phoneNumber: "",
  email: ""
};
const store = new Vuex.Store({
  state: {
    loggedIn: false,
    customer: customer,
    user: {
      id: "",
      username: ""
    },
    parsedSearch: "",
    myMovies: [movie],
    newMovies: [movie],
    cart: [purchase],
    token: ""
  },
  mutations: {
    login: (state, val) => (state.loggedIn = val),
    updateToken: (state, val) => (state.token = val),
    updateCustomer: (state, val) => (state.customer = val),
    updateUser: (state, val) => (state.user = val),
    parseSearch: (state, val) => (state.parsedSearch = val),
    updateNewMovies: (state, val) => (state.newMovies = val)
  },
  actions: {
    login: ({ commit }, val) => commit("login", val),
    updateToken: ({ commit }, val) => commit("updateToken", val),
    updateCustomer: ({ commit }, val) => commit("updateCustomer", val),
    updateUser: ({ commit }, val) => commit("updateUser", val),
    parseSearch: ({ commit }, val) => commit("parseSearch", val),
    updateNewMovies: ({ commit }, val) => commit("updateNewMovies", val)
  }
});

export default store;
