import { createRouter, createWebHashHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import bookService from "../views/bookService.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/bookService",
    name: "bookService",
    component: bookService,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
