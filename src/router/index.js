import { createRouter, createWebHistory } from "vue-router";
import PageNotFound from "../components/PageNotFound";
import CertificationsPage from "../components/CertificationsPage";

const routes = [
  {
    path: "/",
    name: "home",
    component: () => import("../components/HomeVue"),
  },
  {
    path: "/home",
    redirect: "/",
  },
  {
    path: "/:catchAll(.*)",
    name: "PageNotFound",
    component: PageNotFound,
  },
  {
    path: "/certificacoes",
    name: "Certificacoes",
    component: CertificationsPage,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
