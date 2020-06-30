<template>
  <div class="flex  p-10 flex-col items-center">
    <div class="relative w-3/5 mt-10">
      <h2 class=" text-2xl text-myYellow">Register below!</h2>
      <hr class=" w-full mt-3 mb-8" />

      <form @submit.prevent="" class="flex flex-col">
        <div class=" mb-3 ">
          <p class=" mb-1 text-base">Username</p>
          <input
            type="text"
            class="text-gray-800  rounded-full pl-3 pr-3 pt-2 pb-2 w-3/5 text-xl"
            v-model="username"
            placeholder="john_doe"
          />
        </div>
        <div class=" mb-3 ">
          <p class=" mb-1 text-base">First name</p>
          <input
            type="text"
            class="text-gray-800  rounded-full pl-3 pr-3 pt-2 pb-2 w-3/5 text-xl"
            v-model="first_name"
            placeholder="John"
          />
        </div>
        <div class=" mb-3 ">
          <p class=" mb-1 text-base">Last name</p>
          <input
            type="text"
            class="text-gray-800 rounded-full pl-3 pr-3 pt-2 pb-2 w-3/5 text-xl"
            v-model="last_name"
            placeholder="Doe"
          />
        </div>
        <div class="mb-3">
          <p class="text-gray-800  mb-1 text-base">Phonenumber</p>
          <input
            type="phone"
            class=" rounded-full pl-3 pr-3 pt-2 pb-2 w-3/5 text-xl"
            v-model="phone_number"
            placeholder="07..."
          />
        </div>

        <div class="mb-3">
          <p class=" mb-1 text-base">E-mail</p>
          <input
            type="email"
            class="text-gray-800  rounded-full pl-3 pr-3 pt-2 pb-2 w-3/5 text-xl"
            v-model="email"
            placeholder="Doejohn@mail.com"
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
            v-on:click="signUp"
          >
            SignUp
          </button>
        </p>
      </form>
    </div>
  </div>
</template>

<script>
import { SIGNUP_MUTATION } from "@/graphql/query.js";

export default {
  name: "SignUp",
  data() {
    return {
      username: "",
      email: "",
      password: "",
      first_name: "",
      last_name: "",
      phone_number: 0
    };
  },
  methods: {
    signUp() {
      var input = {
        username: this.username,
        email: this.email,
        password: this.password,
        firstName: this.first_name,
        lastName: this.last_name,
        phoneNumber: this.phone_number
      };
      this.$apollo
        .mutate({
          mutation: SIGNUP_MUTATION,
          variables: {
            input: input
          }
        })
        .then(data => console.log(data))
        .catch(error => console.error(error));
    }
  }
};
</script>
<style></style>
