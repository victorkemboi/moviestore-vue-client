<template>
  <div class="flex  p-10 flex-col items-center">
    <div class="flex flex-col w-auto  mt-10">
      <h2 class=" text-2xl text-myYellow text-center">Register below!</h2>
      <hr class="hr mt-3 mb-4" />

      <form @submit.prevent="">
        <div class="flex lg:flex-row md:flex-row flex-col w-full">
          <div class="flex flex-col">
            <div class=" mb-3 ">
              <p class=" mb-1 text-base text-white font-light">First name</p>
              <input
                type="text"
                class="text-gray-800  rounded-lg pl-3 pr-3 pt-2 pb-2 text-lg  w-full"
                v-model="first_name"
                placeholder="John"
              />
            </div>
            <div class=" mb-3 ">
              <p class=" mb-1 text-base text-white font-light">Last name</p>
              <input
                type="text"
                class="text-gray-800 rounded-lg pl-3 pr-3 pt-2 pb-2  w-full text-lg"
                v-model="last_name"
                placeholder="Doe"
              />
            </div>
            <div class="mb-3">
              <p class="mb-1 text-base text-white font-light">Phonenumber</p>
              <input
                type="phone"
                class=" rounded-lg pl-3 pr-3 pt-2 pb-2  w-full text-lg"
                v-model="phone_number"
                placeholder="07..."
              />
            </div>

            <div class="mb-3">
              <p class=" mb-1 text-base text-white font-light">E-mail</p>
              <input
                type="email"
                class="text-gray-800  rounded-lg pl-3 pr-3 pt-2 pb-2  w-full text-lg"
                v-model="email"
                placeholder="Doejohn@mail.com"
              />
            </div>
          </div>
          <div class="flex flex-col self-end md:float-right md:ml-5">
            <div class=" mb-3 ">
              <p class=" mb-1 text-base text-white font-light">Username</p>
              <input
                type="text"
                class="text-gray-800  rounded-lg pl-3 pr-3 pt-2 pb-2  text-lg w-full"
                v-model="username"
                placeholder="john_doe"
              />
            </div>

            <div class="mb-3">
              <p class=" mb-1 text-base text-white font-light">Password</p>
              <input
                type="password"
                class="text-gray-800  rounded-lg pl-3 pr-3 pt-2 pb-2  w-full text-lg"
                v-model="password"
                placeholder="Password"
              />
            </div>
          </div>
          <div
            v-if="loading === true"
            class=" bg-transparent self-center mt-3 mb-8"
          >
            <span class="text-green-500 opacity-75 top-1/2 my-0">
              <i class="fas fa-circle-notch fa-spin fa-5x"></i>
            </span>
          </div>

          <button
            class="md:self-end mb-3  md:ml-5 text-lg bg-black mt-5 pl-4 pr-4 pt-2 pb-3 rounded-lg text-gray-300 transition duration-500 ease-in-out hover:text-pink-500"
            v-on:click="signUp"
            v-bind:class="{
              'cursor-not-allowed': loading
            }"
          >
            SignUp
          </button>
        </div>
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
      phone_number: 0,
      loading: false
    };
  },
  methods: {
    signUp() {
      this.loading = true;
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
        // eslint-disable-next-line no-unused-vars
        .then(data => {
          this.loading = false;
        })
        // eslint-disable-next-line no-unused-vars
        .catch(error => {
          this.loading = false;
        });
    }
  }
};
</script>
