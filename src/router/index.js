import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Latest from "../views/Latest.vue";
import SearchPage from "../views/SearchPage.vue";
import SignUp from "../views/customer/SignUp.vue";
import SignIn from "../views/customer/SignIn.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home
  },
  {
    path: "/search",
    name: "SearchPage",
    component: SearchPage
  },
  {
    path: "/register",
    name: "SignUp",
    component: SignUp
  },
  {
    path: "/signin",
    name: "SignIn",
    component: SignIn
  },
  {
    path: "/latest",
    name: "Latest",
    component: Latest
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: () =>
    //import(/* webpackChunkName: "about" */ "../views/About.vue")
  }
];

const router = new VueRouter({
  routes,
  linkActiveClass: "active",
  linkExactActiveClass: "exact-active"
});

export default router;
