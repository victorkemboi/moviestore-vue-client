<template>
  <div>
    <!-- <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>  -->
    <SideBar />

    <router-view />
  </div>
</template>

<script>
import SideBar from "@/components/SideBar.vue";
export default {
  name: "app",
  components: {
    SideBar
  }
};
</script>
