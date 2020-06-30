<template>
  <div
    class="flex"
    v-bind:class="{
      'flex-col': isHome,
      'flex-row': !isHome
    }"
  >
    <div
      class=" bg-gray-200 rounded-full pl-5 pr-2  hover:shadow-lg flex"
      v-bind:class="{
        'w-3/4': !isHome,
        'border-4 border-red-600': inputError
      }"
    >
      <form class="flex flex-row w-full" v-on:submit.prevent="onSubmit">
        <img src="@/assets/img/ic_search.svg" class=" w-16 mr-1" />
        <input
          class="bg-gray-200 w-full mr-5  text-xl text-gray-800 mb-1 flex-end transition duration-500 ease-in-out "
          v-model="searchText"
          type="text"
          placeholder="Search ..."
        />
      </form>
    </div>
    <div
      v-bind:class="{
        'justify-center flex ': isHome,
        'justify-end ml-10': !isHome
      }"
    >
      <button
        class=" bg-black mt-5 pl-4 pr-4 pt-2 pb-3 rounded-lg text-gray-300 transition duration-500 ease-in-out hover:text-pink-500"
        v-on:click="onSubmit"
      >
        Search
      </button>
    </div>
  </div>
</template>

<script>
//v-on:keyup="onSubmit"
export default {
  name: "SearchBar",
  props: {
    isHome: Boolean,
    parsedSearchText: String
  },
  data() {
    return {
      searchText: this.parsedSearchText,
      inputError: false
    };
  },
  methods: {
    onSubmit() {
      if (typeof this.searchText !== "undefined") {
        if (this.searchText.trim() != "") {
          this.inputError = false;
          if (this.isHome) {
            this.$store.dispatch("parseSearch", this.searchText);
            this.$router.push("/search");
          } else {
            this.emitSearchText();
          }
        } else {
          this.inputError = true;
        }
      } else {
        this.inputError = true;
      }
    },
    emitSearchText() {
      this.$emit("emitSearchText", this.searchText);
    }
  }
};
</script>
