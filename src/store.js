import Vuex from "vuex";
import Vue from "vue";
import UserModule from "@/modules/userModule.js";
import MoviesModule from "@/modules/moviesModule.js";
Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    user: UserModule,
    movies: MoviesModule
  }
});

export default store;
