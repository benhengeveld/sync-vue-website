import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import HomeView from "../views/HomeView/HomeView.vue";
import MagicPriceView from "../views/MagicPriceView/MagicPriceView.vue";
import AboutView from "../views/AboutView/AboutView.vue";
import PageNotFoundView from "../views/PageNotFoundView/PageNotFoundView.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/magic-prices",
    name: "magic-prices",
    component: MagicPriceView,
  },
  {
    path: "/about",
    name: "about",
    component: AboutView,
  },
  {
    path: "/:catchAll(.*)",
    name: "page-not-found",
    component: PageNotFoundView,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
