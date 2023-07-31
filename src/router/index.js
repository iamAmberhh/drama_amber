import { createRouter, createWebHashHistory } from "vue-router";

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: "/",
      component: () => import("../views/IndexView.vue"),
    },
    {
        path: "/question1",
        component: () => import("../views/QuestionView.vue"),
    }
  ],
});

export default router;
