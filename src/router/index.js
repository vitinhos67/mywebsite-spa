import { createRouter, createWebHistory } from "vue-router";
import PageNotFound from "../views/PageNotFound";

import ProjectsPage from "../views/ProjectsPage";
const routes = [
  {
    path: "/",
    name: "home",
    component: () => import("../views/HomeVue"),
  },
  {
    path: "/home",
    redirect: "/",
  },
  {
    path: "/projetos",
    name: "Projetos",
    component: ProjectsPage,
  },
  {
    path: "/:catchAll(.*)",
    name: "PageNotFound",
    component: PageNotFound,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
