import { shallowMount, createLocalVue, RouterLinkStub } from "@vue/test-utils";
import Home from "@/views/Home";
import Vuex from "vuex";

const localVue = createLocalVue();
localVue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    user: {
      namespaced: true,
      state: () => ({
        loggedIn: true,
        token: "",
        user: {
          id: "1",
          username: ""
        },
        customer: {
          customerId: "",
          firstName: "Vicki",
          lastName: "Mes",
          phoneNumber: "",
          email: ""
        }
      })
    }
  }
});

describe("Home", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallowMount(Home, {
      store,
      localVue,
      stubs: {
        RouterLink: RouterLinkStub
      }
    });
  });
  it("Returns concatenated first and lastname of customer", () => {
    expect(wrapper.vm.username).toBe("Vicki Mes");
  });
  it("Returns if user loggedIn", () => {
    expect(wrapper.vm.loggedIn).toBe(true);
  });
});
