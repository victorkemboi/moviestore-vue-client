import { mount, createLocalVue, RouterLinkStub } from "@vue/test-utils";
import Home from "@/views/Home";
import Vuex from "vuex";

const localVue = createLocalVue();
localVue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    user: {
      namespaced: true,
      state: () => ({
        loggedIn: false,
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
  it("Returns concatenated first and lastname of customer", () => {
    const wrapper = mount(Home, {
      store,
      localVue,
      stubs: {
        RouterLink: RouterLinkStub
      }
    });
    //expect(wrapper.text()).toBe("Vicki Mes");
    //expect(wrapper.find(".username").text()).toBe("Vicki Mes");
    expect(wrapper.vm.username).toBe("Vicki Mes");
  });
});
