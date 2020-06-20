<template>
  <div class="  w-full flex flex-col">
    <!-- <div class=" bg-black w-24 rounded-lg flex justify-center ">
      <button
        class=" self-center text-white p-3 transition duration-500 ease-in-out  hover:text-pink-500 "
      >
        My Movies
      </button>
    </div> -->

    <div class="flex  w-full h-full">
      <img
        src="@/assets/img/il_landing.svg"
        class=" w-full h-full absolute overflow-hidden"
        alt="Landing illustration."
      />
      <h1 class=" text-6xl font-light text-white ml-16 mb-24 mt-20">
        Welcome,
      </h1>
    </div>

    <span class="w-full self-center">
      <div class="icon">
        <div class="arrow hover: left-0"></div>
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
.icon {
  position: absolute;
  top: 90%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 80px;
  height: 60px;
  cursor: pointer;
}

.arrow {
  position: absolute;
  top: 25px;
  width: 90%;
  height: 8px;
  background-color: #fff;
  box-shadow: 0 3px 5px rgba(0, 0, 0, 0.2);
  animation: arrow 700ms linear infinite;
  transform: rotate(90deg);
}

.arrow::after,
.arrow::before {
  content: "";
  position: absolute;
  width: 60%;
  height: 10px;
  right: -8px;
  background-color: #fff;
}

.arrow::after {
  top: -12px;
  transform: rotate(45deg);
}

.arrow::before {
  top: 12px;
  box-shadow: 0 3px 5px rgba(0, 0, 0, 0.2);
  transform: rotate(-45deg);
}
</style>
