import { shallowMount } from "@vue/test-utils";
import SignIn from "@/views/customer/SignIn.vue";

describe("Sign In", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallowMount(SignIn, {
      mocks: {}
    });
  });
  it("reveals a notification when submitted", async () => {
    wrapper = shallowMount(SignIn);

    wrapper.find("[data-username]").setValue("alice");
    wrapper.find("form").trigger("submit.prevent");
    await wrapper.vm.$nextTick();

    expect(wrapper.find(".message").text()).toBe(
      "Thank you for your submission."
    );
  });
});
