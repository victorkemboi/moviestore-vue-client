import { shallowMount } from "@vue/test-utils";
import Home from "@/views/Home";

describe("Message", () => {
  it("renders when logged in", () => {
    const loggedIn = true;
    const wrapper = shallowMount(Home, {
      context: { computed: { loggedIn } }
    });
    expect(wrapper.text()).toBe(loggedIn);
  });

  it("renders if not loggedIn", () => {
    const loggedIn = false;
    const wrapper = shallowMount(Home, { context: {} });
    expect(wrapper.text()).toBe(loggedIn);
  });
});
