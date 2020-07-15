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

<style>
@keyframes fadeIn {
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
}

@keyframes fadeInUp {
  0% {
    opacity: 0;
    transform: translate3d(0, 100%, 0);
  }

  100% {
    opacity: 1;
    transform: none;
  }
}

@keyframes fadeInRight {
  0% {
    opacity: 0;
    transform: translate3d(100%, 0, 0);
  }

  100% {
    opacity: 1;
    transform: none;
  }
}

@keyframes fadeInLeft {
  0% {
    opacity: 0;
    transform: translate3d(0, 0, 100%);
  }

  100% {
    opacity: 1;
    transform: none;
  }
}

.scene_element {
  animation-duration: 0.25s;
  transition-timing-function: ease-in;
  animation-fill-mode: both;
}

/** An element that fades in */
.scene_element--fadein {
  animation-name: fadeIn;
}

/** An element that fades in and slides up */
.scene_element--fadeinup {
  animation-name: fadeInUp;
}

/** An element that fades in and slides from the right */
.scene_element--fadeinright {
  animation-name: fadeInRight;
}
.scene_element--fadeinleft {
  animation-name: fadeInLeft;
}

.slide-left {
  position: absolute;
  left: -100px;
  -webkit-animation: slide 0.5s forwards;
  -webkit-animation-delay: 0.4s;
  animation: slide 0.5s forwards;
  animation-delay: 0.4s;
}

@-webkit-keyframes slide {
  100% {
    left: 0;
  }
}

@keyframes slide {
  100% {
    left: 0;
  }
}
</style>
