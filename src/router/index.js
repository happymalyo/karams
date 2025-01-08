import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import("@/views/HomeView.vue"),
    },
    {
      path: "/login",
      name: "login",
      component: () => import("@/views/Login.vue"),
    },
    {
      path: "/auth/callback",
      component: () => import("@/views/AuthCallback.vue"),
    },
    {
      path: "/privacy",
      name: "privacy",
      component: () => import("@/components/PrivacyPolicy.vue"),
    },
  ],
});

// router.beforeEach(async (to) => {
//   const {
//     data: { session },
//   } = await supabase.auth.getSession();

//   if (to.meta.requiresAuth && !session) {
//     return "/login";
//   }
// });

export default router;
