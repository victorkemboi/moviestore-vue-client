<template>
  <div
    class="flex flex-row flex-wrap justify-evenly grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5"
  >
    <div v-bind:key="movie.movieId" v-for="movie in movies">
      <MovieCard v-bind:movie="movie" />
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
