import Vuex from "vuex";
import Vue from "vue";
import UserModule from "@/modules/user.js";
import MoviesModule from "@/modules/movie.js";
Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    user: UserModule,
    movies: MoviesModule
  }
});

export default store;
