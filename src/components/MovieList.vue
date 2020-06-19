<template>
  <div>
    <div v-bind:key="movie.movieId" v-for="movie in movies">
      <MovieCard v-bind:movie="movie" class="flex content-center flex-wrap" />
    </div>
  </div>
</template>

<script>
import MovieCard from "@/components/MovieCard.vue";

export default {
  name: "MovieList",
  props: {
    movies: Array
  },
  components: {
    MovieCard
  }
};
</script>
