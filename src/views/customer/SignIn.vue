<template>
  <div class="flex flex-col items-center">
    <div class="flex flex-col  w-1/5 mt-20">
      <h1 class=" text-2xl mb-2 text-center text-myYellow">Sign In</h1>
      <hr class="mb-4 hr" />
      <form class="flex flex-col w-full" v-on:submit.prevent="signIn">
        <p class=" mb-2">Username</p>
        <input
          class="mb-3 pl-3 pb-1 pt-2  bg-gray-200 w-full mr-5 rounded-lg  text-lg text-gray-800 flex-end transition duration-500 ease-in-out hover:border-gray-700 border-b-2"
          v-model="username"
          type="text"
          placeholder="Username"
        />
        <p class=" mb-2">Password</p>
        <input
          class=" pl-3  pb-1 pt-2 bg-gray-200 w-full mr-5 rounded-lg  text-lg text-gray-800 mb-1 flex-end transition duration-500 ease-in-out hover:border-gray-700 border-b-2"
          v-model="password"
          type="password"
          placeholder="Password"
        />
        <h2
          v-if="showMessage === true"
          class=" mt-2 font-semibold text-center transition duration-500 ease-in-out"
          v-bind:class="{
            ' text-pink-400 ': error,
            'text-green-400': !error
          }"
        >
          {{ message }}
        </h2>

        <button
          v-if="loading === false"
          class=" text-lg bg-black mt-5 pl-4 pr-4 pt-2 pb-3 rounded-lg text-gray-300 transition duration-500 ease-in-out hover:text-pink-500"
          v-on:click="signIn"
        >
          Sign In
        </button>
        <div
          v-if="loading === true"
          class=" bg-transparent self-center mt-3 mb-8"
        >
          <span class="text-green-500 opacity-75 top-1/2 my-0">
            <i class="fas fa-circle-notch fa-spin fa-5x"></i>
          </span>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "SignIn",
  data() {
    return {
      loading: false,
      username: "",
      password: "",
      showMessage: false,
      message: "",
      error: true
    };
  },
  methods: {
    signIn() {
      if (this.isValidInput()) {
        this.loading = true;
        this.$store
          .dispatch("user/fetchToken", {
            username: this.username,
            password: this.password,
            apollo: this.$apollo
          })
          .then(res => {
            if (res) {
              this.$store
                .dispatch("user/fetchCustomer", { apollo: this.$apollo })
                .then(res => {
                  if (res) {
                    this.message = "Login successfull.";
                    this.showMessage = true;
                    this.error = false;
                    setTimeout(() => {
                      this.loading = false;
                      this.$router.push("/");
                    }, 600);
                  }
                });
            }
          })
          .catch(error => {
            if (
              error.message == "GraphQL error: Please enter valid credentials"
            ) {
              this.message = "Please enter valid credentials!";
              this.showMessage = true;
            }
            this.loading = false;
          });
      }
    },
    isValidInput() {
      this.showError = false;
      this.message = "";
      var valid = true;
      if (this.username.trim() === "") {
        this.message = "Enter Username!";
        this.showMessage = true;
        valid = false;
      } else if (this.password.trim() === "") {
        this.message = "Enter Password!";
        this.showMessage = true;
        valid = false;
      } else {
        this.showMessage = false;
      }
      return valid;
    }
  }
};
</script>

<style>
.hr {
  color: black;
}
</style>
