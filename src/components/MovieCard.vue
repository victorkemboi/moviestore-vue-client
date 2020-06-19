<template>
  <div class="flex flex-col items-center bg-white p-10 rounded-lg shadow-lg">
    <img
      src="https://source.unsplash.com/random"
      alt=""
      class=" w-32 h-32 rounded-lg object-cover"
    />
    <h3 class=" font-semibold text-lg mt-2">{{ movie.title }}</h3>
    <p class=" text-center font-semibold mt-4">{{ movie.year }}</p>
    <ul id="cast">
      <li v-for="actor in movie.cast.slice(0, 3)" :key="actor.actorId">
        {{ actor.name }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "MovieCard",
  props: {
    movie: Object
  },
  computed: {
    // a computed getter
    aggregateCast: function() {
      var cast = "";
      this.movie.cast.forEach((actor, index) => {
        console.log("Actor: ");
        console.log(actor.name);
        if (index == 0) {
          cast = cast.concat(actor.name);
        } else {
          cast = cast.concat(", ", actor.name);
        }
      });
      console.log(cast);
      return cast;
    }
  }
};
</script>

<style></style>
