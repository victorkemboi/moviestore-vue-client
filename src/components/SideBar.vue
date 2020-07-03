<template>
  <div class=" fixed flex shadow-xl">
    <div
      id="mySidebar"
      class="sidebar flex flex-col text-gray-700 "
      v-bind:class="{
        ' w-1/5': isOpen && !isSmallScreen,
        ' w-3/5': isOpen && isSmallScreen,
        'w-0': !isOpen
      }"
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
        class="block py-1 md:py-3 pl-1 align-middle no-underline  ml-6 font-bold text-white"
      >
        MOVIE STORE
      </p>
      <router-link to="/" exact>
        <a
          v-on:click="closeNav"
          class=" block py-1 md:py-3 pl-1 align-middle  no-underline hover:text-pink-500 border-b-2 border-gray-800 md:border-gray-900 hover:border-myYellow"
        >
          Home
        </a>
      </router-link>
      <router-link to="/latest" exact>
        <a
          v-on:click="closeNav"
          class="block py-1 md:py-3 pl-1 align-middle  no-underline hover:text-pink-500 border-b-2 border-gray-800 md:border-gray-900 hover:border-myYellow"
          >Latest</a
        >
      </router-link>
      <router-link to="/about" exact>
        <a
          v-on:click="closeNav"
          class="block py-1 md:py-3 pl-1 align-middle no-underline hover:text-pink-500 border-b-2 border-gray-800 md:border-gray-900 hover:border-myYellow"
          >About</a
        >
      </router-link>
      <router-link to="/contact" exact>
        <a
          v-on:click="closeNav"
          class="block py-1 md:py-3 pl-1 align-middle  no-underline hover:text-pink-500 border-b-2 border-gray-800 md:border-gray-900 hover:border-myYellow mb-auto"
          >Contact</a
        >
      </router-link>

      <!-- Anonymous -->
      <div
        v-if="!loggedIn"
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
            v-on:click="openSignIn"
          >
            Sign In
          </button>
        </div>

        <p
          class=" text-sm font-semibold mt-2 cursor-pointer transition duration-500 ease-in-out  hover:text-pink-500 hover:text-base"
          v-on:click="openSignUp"
        >
          Sign Up
        </p>
        <p
          class="text-xs font-semibold mt-10 cursor-pointer hover:text-gray-800"
          v-on:click="closeNav"
        >
          Close
        </p>
      </div>
      <!-- Signed In -->

      <div
        v-if="loggedIn"
        class=" w-full flex flex-col bg-white items-center self-end mt-20 flex-1  "
      >
        <img
          src="https://source.unsplash.com/random"
          alt=""
          class=" w-16 h-16 rounded-full object-cover mt-10"
        />
        <div class=" bg-myBlue w-24 rounded-lg flex justify-center  mt-3">
          <p
            class=" self-center text-white  pl-2 pr-2 pt-1 pb-1 cursor-pointer :hover:text-pink-500"
          >
            {{ username }}
          </p>
        </div>

        <p
          class="text-xs font-semibold  cursor-pointer mt-4 hover:text-gray-800"
          v-on:click="logOut"
        >
          Log Out!
        </p>
        <p
          class="text-xs font-semibold mt-10 cursor-pointer hover:text-gray-800"
          v-on:click="closeNav"
        >
          Close
        </p>
      </div>

      <!-- general -->
    </div>

    <div id="main" v-if="!isOpen" class="transition duration-500 ease-in-out">
      <button
        class="py-3 px-3 rounded-lg text-xl bg-black cursor-pointer transition duration-500 ease-in-out"
        @click="openNav"
        v-bind:class="{
          'text-myYellow': isMenuHovered,
          'text-white': !isMenuHovered
        }"
        @mouseover="isMenuHovered = true"
        @mouseleave="isMenuHovered = false"
      >
        <span
          class="transition duration-500 ease-in-out"
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
      isSmallScreen: false
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
    openSignUp: function() {
      this.closeNav();
      this.$router.push("/register");
    },
    openSignIn: function() {
      this.closeNav();
      this.$router.push("/signin");
    },
    logOut: function() {
      this.$store.dispatch("user/logOut");
      this.closeNav();
      this.$forceUpdate();
      this.$router.push("/");
    },
    // eslint-disable-next-line no-unused-vars
    changeWidth: function(e) {
      const screenWidth = window.innerWidth;
      if (screenWidth < 850) {
        this.isSmallScreen = true;
      } else {
        this.isSmallScreen = false;
      }
    }
  },
  computed: {
    loggedIn: function() {
      this.$store.dispatch("user/loginWithSavedToken", this.$apollo);
      return this.$store.state.user.loggedIn;
    },
    username: function() {
      return this.$store.state.user.user.username;
    }
  },
  created() {
    window.addEventListener("resize", this.changeWidth);
  },
  destroyed() {
    window.removeEventListener("resize", this.changeWidth);
  }
};
</script>

<style>
.active {
  color: #edf2f7;
}
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

  display: block;
  transition: 0.3s;
}

/* When you mouse over the navigation links, change their color   color: #818181; */

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
    font-size: 15px;
  }
}
</style>
