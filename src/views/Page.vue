<template>
  <div id="page" class="flex content-start justify-around">
    <Nav />
    <div class="content  inline-block">
      <Home />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Nav from "@/components/Nav.vue";
import Home from "@/views/Home.vue";
export default {
  name: "Page",
  components: {
    Home,
    Nav
  }
};
</script>
