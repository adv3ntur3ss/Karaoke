import { createRouter, createWebHistory } from "vue-router"
import gameplay from "@/views/gameplay.vue"
import levels from "@/views/levels.vue"

const routes = [
  {
    path: "/",
    name: "levels",
    component: levels,
  },
  {
    path: "/gameplay",
    component: gameplay,
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})
export default router
