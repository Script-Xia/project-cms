import { createRouter, createWebHistory } from "vue-router"
import type { Router, RouteRecordRaw } from "vue-router"
import useLoginStore from "@/store/modules/login/useLoginStore"
import localCache from "@/utils/cache"

const routes: RouteRecordRaw[] = [
  {
    path: "/",
    redirect: "/main"
  },
  {
    path: "/login",
    name: "login",
    component: () => import("views/login/LoginPage.vue")
  },
  {
    path: "/main",
    name: "main",
    component: () => import("views/main/Main.vue")
  },
  {
    path: "/:pathMatch(.*)*",
    name: "not-found",
    component: () => import("views/notFound/NotFound.vue")
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

  if (to.path === "/main") {
    return useLoginStore().firstMenu.path
  }
})

export default router
