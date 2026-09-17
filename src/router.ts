import { createRouter, createWebHistory } from "vue-router";

export const router = createRouter({
  history: createWebHistory("/frontend"),

  routes: [
    {
      path: "/",
      name: "Home",
      component: () => import("./pages/Home.vue"),
    },

    {
      path: "/login",
      name: "Login",
      component: () => import("./pages/Login.vue"),
    },
  ],
});

