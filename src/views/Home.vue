<template>
  <div class=" h-screen flex flex-col bg-myBlue landing">
    <div class="flex w-auto h-auto">
      <h1 class=" text-6xl font-light text-myYellow mt-40 ml-32">
        Welcome,
      </h1>
    </div>

    <span class="w-full self-center">
      <div class="icon">
        <img src="@/assets/img/ic_arrow.svg" class=" w-10 hover: left-0" />
      </div>
    </span>
  </div>
</template>

<script>
export default {
  name: "WelcomeMessage"
};
</script>

<style>
.landing {
  background: url("../assets/img/il_landing.svg") no-repeat right 50%;
  border-right: 4px solid transparent;
}

.welcome {
  top: 25%;
  left: 40%;
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
