let customer = {
  customerId: "",
  firstName: "",
  lastName: "",
  phoneNumber: "",
  email: ""
};

const ModuleA = {
  state: () => ({
    loggedIn: false,
    token: "",
    customer: customer,
    user: {
      id: "",
      username: ""
    }
  })
};
export default {
  namespaced: true,
  ModuleA
};
