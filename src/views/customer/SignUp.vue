<template>
  <div class="flex bg-myBlue p-10 flex-col items-center h-full">
    <div class="relative w-3/5 mt-10">
      <h2 class=" text-2xl text-myYellow">Register below!</h2>
      <hr class=" w-full mt-3 mb-8" />

      <form @submit.prevent="signup" class="flex flex-col">
        <div class=" mb-3 ">
          <p class=" mb-1 text-base">Username</p>
          <input
            type="text"
            class="text-gray-800  rounded-full pl-3 pr-3 pt-2 pb-2 w-3/5 text-xl"
            v-model="username"
            placeholder="Username"
          />
        </div>
        <div class=" mb-3 ">
          <p class=" mb-1 text-base">First name</p>
          <input
            type="text"
            class="text-gray-800  rounded-full pl-3 pr-3 pt-2 pb-2 w-3/5 text-xl"
            v-model="first_name"
            placeholder="First name"
          />
        </div>
        <div class=" mb-3 ">
          <p class=" mb-1 text-base">Last name</p>
          <input
            type="text"
            class=" text-xl text-gray-800 rounded-full pl-3 pr-3 pt-2 pb-2 w-3/5 text-xl"
            v-model="last_name"
            placeholder="last_name"
          />
        </div>
        <div class="mb-3">
          <p class="text-gray-800  mb-1 text-base">Phonenumber</p>
          <input
            type="phone"
            class=" rounded-full pl-3 pr-3 pt-2 pb-2 w-3/5 text-xl"
            v-model="phonenumber"
            placeholder="Phone no."
          />
        </div>

        <div class="mb-3">
          <p class=" mb-1 text-base">E-mail</p>
          <input
            type="email"
            class="text-gray-800  rounded-full pl-3 pr-3 pt-2 pb-2 w-3/5 text-xl"
            v-model="email"
            placeholder="E-mail"
          />
        </div>

        <div class="mb-8">
          <p class=" mb-1 text-base">Password</p>
          <input
            type="password"
            class="text-gray-800  rounded-full pl-3 pr-3 pt-2 pb-2 w-3/5 text-xl"
            v-model="password"
            placeholder="Password"
          />
        </div>

        <p class="bg-black w-24 rounded-lg flex justify-center ">
          <button
            class=" self-center text-white p-3 transition duration-500 ease-in-out  hover:text-pink-500 "
          >
            SignUp
          </button>
        </p>
      </form>
    </div>
  </div>
</template>

<script>
import { SIGNUP_MUTATION } from "@/graphql/movieQueries.js";

export default {
  name: "SignUp",
  data() {
    return {
      username: "",
      email: "",
      password: ""
    };
  },
  methods: {
    async signup() {
      this.$apollo
        .mutate({
          mutation: SIGNUP_MUTATION,
          variables: {
            username: this.username,
            email: this.email,
            password: this.password
          }
        })
        .then(response => {
          // redirect to login page
          console.log(response.data.customer);
          this.$router.replace("/login");
        });
    }
  }
};
</script>
<style></style>
