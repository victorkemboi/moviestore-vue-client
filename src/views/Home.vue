<template>
  <div class=" h-screen flex flex-col bg-myBlue landing">
    <h1 class=" text-6xl font-light text-myYellow mt-40 ml-32">
      Welcome,
    </h1>

    <SearchBar class="  w-2/5 self-center search" />

    <router-link to="/latest" exact>
      <div class="icon">
        <img src="@/assets/img/ic_arrow.svg" class=" h-5  hover: left-0" />
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
