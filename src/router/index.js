import { createRouter, createWebHashHistory } from "vue-router"
import gameplay from "@/views/gameplay.vue"
import levels from "@/views/levels.vue"
import tbd from "@/views/TBD.vue"

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
  {
    path: "/TBD",
    component: tbd,
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})
export default router
