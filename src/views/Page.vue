<template>
  <div id="page">
    <SideBar />
    <div>
      <Home />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
//import Nav from "@/components/Nav.vue";
import SideBar from "@/components/SideBar.vue";
import Home from "@/views/Home.vue";
export default {
  name: "Page",
  components: {
    Home,
    SideBar
  }
};
</script>
