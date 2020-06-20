<template>
  <div class=" fixed flex shadow-xl">
    <div
      id="mySidebar"
      class="sidebar flex flex-col "
      v-bind:class="{ ' w-1/5': isOpen, 'w-0': !isOpen }"
    >
      <a
        href="javascript:void(0)"
        class=" right-0 mr-3 top-0 ml-20 absolute text-white text-xl hover:text-myYellow hover:text-3xl"
        @click="closeNav"
        >&times;</a
      >
      <!--<img
        src="@/assets/img/logo.png"
        alt="logo"
        class=" rounded-full w-20 h-20 bg-white object-contain py-5 self-center align-middle"
      /> -->
      <p
        class="block py-1 md:py-3 pl-1 align-middle no-underline text-white ml-6 font-bold text-white"
      >
        MOVIE STORE
      </p>
      <router-link to="/" @click="setActiveTab('Latest')">
        <a
          class="block py-1 md:py-3 pl-1 align-middle  no-underline hover:text-pink-500 border-b-2 border-gray-800 md:border-gray-900 hover:border-myYellow"
          v-bind:class="{ 'text-gray-200': activeTab == 'latest' }"
        >
          Latest
        </a>
      </router-link>
      <router-link to="/">
        <a
          href="#"
          class="block py-1 md:py-3 pl-1 align-middle text-gray-800 no-underline hover:text-pink-500 border-b-2 border-gray-800 md:border-gray-900 hover:border-myYellow"
          >Services</a
        >
      </router-link>
      <router-link to="/">
        <a
          href="#"
          class="block py-1 md:py-3 pl-1 align-middle text-gray-800 no-underline hover:text-pink-500 border-b-2 border-gray-800 md:border-gray-900 hover:border-myYellow"
          >Clients</a
        >
      </router-link>
      <router-link to="/">
        <a
          href="#"
          class="block py-1 md:py-3 pl-1 align-middle text-gray-800 no-underline hover:text-pink-500 border-b-2 border-gray-800 md:border-gray-900 hover:border-myYellow mb-auto"
          >Contact</a
        >
      </router-link>

      <div
        class=" w-full flex flex-col bg-white items-center self-end mt-20 flex-1  "
      >
        <img
          src="@/assets/img/ic_user.png"
          alt="logo"
          class=" rounded-full w-12 h-12 mt-6"
        />
        <div class=" bg-black w-24 rounded-lg flex justify-center ">
          <button
            class=" self-center text-white p-3 transition duration-500 ease-in-out  hover:text-pink-500 "
          >
            Sign In
          </button>
        </div>
        <p
          class=" text-sm font-semibold mt-10 cursor-pointer"
          @click="closeNav"
        >
          Close
        </p>
      </div>
    </div>

    <div id="main" v-if="!isOpen" class="transition duration-500 ease-in-out">
      <button
        class="py-3 px-3 rounded-lg text-xl bg-black cursor-pointer"
        @click="openNav"
        v-bind:class="{
          'text-myYellow': isMenuHovered,
          'text-white': !isMenuHovered
        }"
        @mouseover="isMenuHovered = true"
        @mouseleave="isMenuHovered = false"
      >
        <span
          v-bind:class="{
            'text-pink-500': isMenuHovered,
            'text-white': !isMenuHovered
          }"
          >&#9776;</span
        >
        Movie Store
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "SideBar",
  data() {
    return {
      isOpen: false,
      isMenuHovered: false,
      activeTab: "latest"
    };
  },
  methods: {
    openNav: function() {
      this.isOpen = true;
    },
    closeNav: function() {
      this.isOpen = false;
      this.isMenuHovered = false;
    },
    setActiveTab: function(val) {
      this.activeTab = val;
    },
    getTextColor: function(tab) {
      var styleClass = "text-gray-800";
      if (tab == this.activeTab) {
        styleClass = "text-white";
      }
      return styleClass;
    }
  }
};
</script>

<style>
.sidebar {
  height: 100%; /* 100% Full-height */
  width: 0; /* 0 width - change this with JavaScript */
  position: fixed; /* Stay in place */
  z-index: 1; /* Stay on top */
  top: 0;
  left: 0;
  background-color: #111; /* Black*/
  overflow-x: hidden; /* Disable horizontal scroll */
  padding-top: 60px; /* Place content 60px from the top */
  transition: 0.5s; /* 0.5 second transition effect to slide in the sidebar */
}

/* The sidebar links */
.sidebar a {
  padding: 8px 8px 8px 32px;
  text-decoration: none;
  font-size: 25px;
  color: #818181;
  display: block;
  transition: 0.3s;
}

/* When you mouse over the navigation links, change their color */

/* Position and style the close button (top right corner) */

/* Style page content - use this if you want to push the page content to the right when you open the side navigation */
#main {
  transition: margin-left 0.5s; /* If you want a transition effect */
  padding: 20px;
}

/* On smaller screens, where height is less than 450px, change the style of the sidenav (less padding and a smaller font size) */
@media screen and (max-height: 450px) {
  .sidebar {
    padding-top: 15px;
  }
  .sidebar a {
    font-size: 18px;
  }
}
</style>
