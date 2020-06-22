<template>
  <div id="search flex flex-col  "  >
    <div class=" bg-gray-200 rounded-full pl-5 pr-5 pt-3 pb-3">
      <form class="flex flex-row">
          <img src="@/assets/img/ic_search.svg" class=" w-6 mr-5" />
        <input class="bg-gray-200 w-5/6 rounded-full text-xl text-gray-800 flex-end" v-model="search" type="text"  placeholder="Search ..." />
      </form>
    </div>
   <div class=" w-auto flex justify-center">
        <button class=" bg-black mt-5 pl-4 pr-4 pt-2 pb-3 rounded-lg text-gray-300 transition duration-500 ease-in-out hover:text-pink-500">
             Search 
             </button> 
             </div>
  </div>
</template>

<script>
export default {
  name: "SearchBar",
  data() {
    return {
        search: ''
    };
  },

}