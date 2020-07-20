<template>
  <div class=" h-screen flex flex-col bg-myBlue landing ">
    <h1
      class="text-6xl font-light text-white mt-40 ml-32 flex flex-row items-end  "
    >
      Welcome<span v-if="loggedIn">,</span>
      <p
        v-if="loggedIn"
        class="transition duration-500 ease-in-out text-3xl pb-3 hover:underline text-pink-400 hover:text-myYellow ml-4"
      >
        {{ username }}
      </p>
    </h1>

    <SearchBar class="  w-2/5 self-center search" v-bind:isHome="true" />

    <router-link to="/latest" exact>
      <div class="icon">
        <img
          src="@/assets/img/ic_arrow.svg"
          class=" h-5 transition duration-500 ease-in-out  hover: left-0 "
        />
      </div>
    </router-link>
  </div>
</template>

<script>
import SearchBar from "@/components/SearchBar.vue";
export default {
  name: "Home",
  components: {
    SearchBar
  },
  data() {
    return {
      scrolled: false
    };
  },
  methods: {
    handleScroll(event) {
      const delta = Math.sign(event.deltaY);
      if (delta == 1) {
        this.$router.push("/latest");
      }
    }
  },
  computed: {
    loggedIn: function() {
      return this.$store.state.user.loggedIn;
    },
    username: function() {
      return (
        this.$store.state.user.customer.firstName +
        " " +
        this.$store.state.user.customer.lastName
      );
    }
  },
  created() {
    window.addEventListener("wheel", this.handleScroll);
  },
  destroyed() {
    window.removeEventListener("wheel", this.handleScroll);
  }
};
</script>

<style>
.landing {
  background: url("../assets/img/il_landing.svg") no-repeat right 50%;
  border-right: 4px solid transparent;
}

.search {
  position: absolute;
  top: 65%;
}

.icon {
  position: absolute;
  top: 90%;
  left: 50%;
  transform: translate(-50%, -50%);
  cursor: pointer;
}

@media (max-width: 640px) {
  .landing-il {
    top: 40%;
  }
}
</style>
