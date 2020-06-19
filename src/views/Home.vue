<template>
  <div class="home bg-myBlue">
    <!--add  components-->
    <MovieList v-bind:movies="newMovies" />
  </div>
</template>

<script>
// @ is an alias to /src
//import NavBar from "@/components/NavBar.vue"
//import SideNav from "@/components/SideNav.vue";
import MovieList from "@/components/MovieList.vue";
import { GET_RECENT_MOVIES_QUERY } from "@/graphql/movieQueries.js";
export default {
  name: "Home",
  components: {
    MovieList
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
