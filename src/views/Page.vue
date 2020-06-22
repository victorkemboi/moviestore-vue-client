<template>
  <div id="page">
    <div>
      <Home />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
//import Nav from "@/components/Nav.vue";

import Home from "@/views/Home.vue";
export default {
  name: "Page",
  components: {
    Home
  }
};
</script>
