import { createRouter, createWebHistory } from "vue-router"
import type { Router, RouteRecordRaw } from "vue-router"
import localCache from "@/utils/cache"

const routes: RouteRecordRaw[] = [
  {
    path: "/",
    redirect: "/main"
  },
  {
    path: "/login",
    component: () => import("@/view/login/LoginPage.vue")
  },
  {
    path: "/main",
    component: () => import("@/view/main/Main.vue")
  }
]

const router: Router = createRouter({
  routes,
  history: createWebHistory()
})

router.beforeEach((router, to) => {
  if (to.path !== "/login") {
    const token = localCache.getCache("token")
    if (!token) return "/login"
  }
})

export default router
