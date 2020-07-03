<template>
  <div class=" bg-myBlue p-10 flex flex-col ">
    <!--add  components -->
    <div class="">
      <h1
        class=" w-full mt-16 mb-4 text-2xl text-right self-end font-medium text-myYellow"
      >
        Latest
      </h1>
      <hr class=" w-full mb-3 text-pink-500" />
    </div>
    <div v-if="loading === true" class=" bg-transparent self-center mt-3 mb-8">
      <span class="text-green-500 opacity-75 top-1/2 my-0">
        <i class="fas fa-circle-notch fa-spin fa-5x"></i>
      </span>
    </div>
    <MovieList v-bind:movies="newMovies" />
  </div>
</template>

<script>
import MovieList from "@/components/MovieList.vue";
import { GET_RECENT_MOVIES_QUERY } from "@/graphql/query.js";

export default {
  name: "Latest",
  components: {
    MovieList
  },
  data() {
    return {
      movies: [],
      loading: false
    };
  },
  created: function() {
    this.fetchNewMovies();
    window.addEventListener("wheel", this.handleScroll);
  },
  destroyed() {
    window.removeEventListener("wheel", this.handleScroll);
  },
  methods: {
    async fetchNewMovies() {
      this.loading = true;
      this.$apollo.query({ query: GET_RECENT_MOVIES_QUERY }).then(response => {
        this.loading = false;
        this.$store.dispatch("movies/updateNewMovies", response.data.movies);
      });
    },
    handleScroll(event) {
      const delta = Math.sign(event.deltaY);
      this.Getpostion();
      if (delta == -1) {
        // this.$router.push("/");
      }
    },
    Getpostion() {
      var vscroll = document.body.scrollTop;
      console.log("Vscroll: ", vscroll);
      console.log("Vscroll: ", document.body);
    }
  },
  computed: {
    newMovies: function() {
      return this.$store.state.movies.newMovies;
    }
  }
};
</script>
