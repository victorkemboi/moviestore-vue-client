<template>
  <div class="flex bg-myBlue p-10 flex-col">
    <!--add  components -->
    <SearchBar
      class="  w-2/5 mt-32 ml-20"
      v-on:emitSearchText="receiveSearchText"
      v-bind:parsedSearchText="parsedSearch"
    />
    <div class="flex flex-col  overflow-hidden ">
      <h1
        class=" w-full mt-16 mb-2 pr-5 text-2xl text-right flex-start font-medium text-myYellow"
      >
        search: {{ searchInput }}
      </h1>
      <hr class=" w-full   mb-4 text-pink-500" />
    </div>
    <div v-if="isLoading === 1" class=" bg-transparent self-center mt-3 mb-8">
      <span class="text-green-500 opacity-75 top-1/2 my-0">
        <i class="fas fa-circle-notch fa-spin fa-5x"></i>
      </span>
    </div>
    <MovieList v-bind:movies="search" />
    <div v-if="isLoading === 0 && search.length == 0">
      <p class="text-base text-gray-300">
        Sorry, your search: {{ searchInput }}, did not match any movie in our
        Database!
      </p>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import MovieList from "@/components/MovieList.vue";
import SearchBar from "@/components/SearchBar.vue";
import { SEARCH_QUERY } from "@/graphql/query.js";
export default {
  name: "SearchPage",
  components: {
    MovieList,
    SearchBar
  },
  data() {
    return {
      searchInput: "",
      search: [],
      loading: false
    };
  },
  methods: {
    receiveSearchText: function(val) {
      this.searchInput = val;
    },
    focusInput() {
      this.$refs.searchInput.focus();
    }
  },
  apollo: {
    search: {
      query: SEARCH_QUERY,
      variables() {
        return {
          searchText: this.searchInput
        };
      },
      skip() {
        return !this.searchInput;
      }
    }
  },
  mounted: function() {
    this.searchInput = this.parsedSearch;
  },
  computed: {
    parsedSearch: function() {
      return this.$store.state.parsedSearch;
    },
    isLoading: function() {
      return this.$apolloData.loading;
    }
  }
};
</script>

<style scoped>
.search {
  position: absolute;
  top: 20%;
}
.filler {
  position: absolute;
  top: 0;
  bottom: 0;
  width: 100;
}
</style>
