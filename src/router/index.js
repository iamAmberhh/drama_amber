import { createRouter, createWebHashHistory } from 'vue-router';

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      component: () => import('../views/EnterView.vue'),
    },
    {
      path: '/question',
      component: () => import('../views/QuestionView.vue'),
    },
    {
      path: '/result',
      component: () => import('../views/ResultView.vue'),
    },
  ],
});

export default router;
