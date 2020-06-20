<template>
  <div class="home bg-myBlue p-10 max-w-full">
    <!--add  components-->
    <WelcomeMessage />
    <div class="flex flex-col mt-screenH overflow-hidden ">
      <h1
        class=" w-full mb-4 text-2xl text-right self-end font-medium text-myYellow"
      >
        Latest
      </h1>
      <hr class=" w-full mb-3 text-pink-500" />
    </div>
    <MovieList v-bind:movies="newMovies" />
  </div>
</template>

<script>
// @ is an alias to /src
//import NavBar from "@/components/NavBar.vue"
//import SideNav from "@/components/SideNav.vue";
import MovieList from "@/components/MovieList.vue";
import { GET_RECENT_MOVIES_QUERY } from "@/graphql/movieQueries.js";
import WelcomeMessage from "@/components/WelcomeMessage.vue";
export default {
  name: "Home",
  components: {
    MovieList,
    WelcomeMessage
  },
  data() {
    return {
      movies: []
    };
  },
  created: function() {
    this.fetchNewMovies();
  },
  methods: {
    async fetchNewMovies() {
      this.$apollo.query({ query: GET_RECENT_MOVIES_QUERY }).then(response => {
        this.$store.dispatch("updateNewMovies", response.data.movies);
      });
    }
  },
  computed: {
    newMovies: function() {
      return this.$store.state.newMovies;
    }
  }
};
</script>
