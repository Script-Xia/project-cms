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
    component: () => import("views/login/LoginPage.vue")
  },
  {
    path: "/main",
    component: () => import("views/main/Main.vue")
  },
  {
    path: "/:pathMatch(.*)*",
    component: () => import("views/not-found/NotFound.vue")
  }
]

const router: Router = createRouter({
  routes,
  history: createWebHistory()
})

router.beforeEach(to => {
  if (to.path !== "/login") {
    const token = localCache.getCache("token")
    if (!token) return "/login"
  }
})

export default router
