<template>
  <div
    class="flex flex-col items-center bg-gray-300 p-10 rounded-lg shadow-lg hover:bg-pink-500 cursor-pointer"
    @mouseover="isCardHovered = true"
    @mouseleave="isCardHovered = false"
  >
    <img
      src="https://source.unsplash.com/random"
      alt=""
      class=" w-32 h-32 rounded-lg object-cover"
    />
    <h3
      class=" font-semibold text-lg mt-2"
      v-bind:class="{
        'text-myYellow': isCardHovered,
        'text-pink-500': !isCardHovered
      }"
    >
      {{ movie.title }}
    </h3>
    <p
      class=" text-center font-semibold mt-4 "
      v-bind:class="{
        'text-white': isCardHovered,
        'text-black': !isCardHovered
      }"
    >
      {{ movie.year }}
    </p>
    <ul id="cast">
      <li
        v-for="actor in movie.cast.slice(0, 3)"
        :key="actor.actorId"
        v-bind:class="{
          'text-gray-700': isCardHovered
        }"
      >
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
  data() {
    return {
      isCardHovered: false
    };
  },
  computed: {
    // a computed getter
    aggregateCast: function() {
      var cast = "";
      this.movie.cast.forEach((actor, index) => {
        if (index == 0) {
          cast = cast.concat(actor.name);
        } else {
          cast = cast.concat(", ", actor.name);
        }
      });

      return cast;
    }
  }
};
</script>

<style></style>
