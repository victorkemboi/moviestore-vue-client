import { SIGNIN_MUTATION, CUSTOMER_QUERY } from "@/graphql/query.js";
let customer = {
  customerId: "",
  firstName: "",
  lastName: "",
  phoneNumber: "",
  email: ""
};
let user = {
  id: "",
  username: ""
};

const UserModule = {
  namespaced: true,
  state: () => ({
    loggedIn: false,
    token: "",
    customer: customer,
    user: user
  }),
  mutations: {
    login: (state, val) => (state.loggedIn = val),
    updateToken: (state, val) => (state.token = val),
    updateCustomer: (state, val) => (state.customer = val),
    updateUser: (state, val) => (state.user = val)
  },
  actions: {
    login: ({ commit }, val) => commit("login", val),
    updateToken: ({ commit }, val) => commit("updateToken", val),
    updateCustomer: ({ commit }, val) => commit("updateCustomer", val),
    updateUser: ({ commit }, val) => commit("updateUser", val),
    fetchToken: (context, data) => {
      return new Promise((resolve, reject) => {
        data.apollo
          .mutate({
            mutation: SIGNIN_MUTATION,
            variables: {
              username: data.username,
              password: data.password
            },
            skip() {
              !data.username;
              !data.password;
            }
          })
          .then(response => {
            //save token info
            console.log("Token resolved");
            localStorage.setItem("token", response.data.tokenAuth.token);
            context.dispatch("updateToken", response.data.tokenAuth.token);
            resolve(response);
          })
          .catch(error => {
            console.log("Token failed");
            reject(error);
          });
      });
    },
    fetchCustomer: (context, data) => {
      return new Promise((resolve, reject) => {
        data.apollo
          .mutate({
            mutation: CUSTOMER_QUERY,
            context: {
              headers: {
                Authorization: `JWT ${context.state.token}`
              }
            }
          })
          .then(response => {
            //fetch customer info
            console.log("customer resolved");
            context.dispatch("updateUser", {
              id: response.data.customer.user.id,
              username: response.data.customer.user.username
            });
            context.dispatch("updateCustomer", {
              customerId: response.data.customer.customerId,
              firstName: response.data.customer.firstName,
              lastName: response.data.customer.lastName,
              phoneNumber: response.data.customer.phoneNumber,
              email: response.data.customer.email
            });
            context.dispatch("login", true);
            resolve(response);
          })
          .catch(error => {
            console.log("Customer failed");
            reject(error);
          });
      });
    },
    logOut: context => {
      context.dispatch("login", false);
      context.dispatch("updateToken", "");
      localStorage.setItem("token", null);
      context.dispatch("updateUser", user);
      context.dispatch("updateCustomer", customer);
    },
    loginWithSavedToken: (context, apollo) => {
      let savedToken = localStorage.getItem("token");
      if (savedToken != "null") {
        console.log("savedToken pass", savedToken);
        context.dispatch("updateToken", savedToken);
        // eslint-disable-next-line no-unused-vars
        context.dispatch("fetchCustomer", { apollo: apollo }).then(res => {
          console.log("fetch", res);
        });
      }
    }
  }
};
export default UserModule;
