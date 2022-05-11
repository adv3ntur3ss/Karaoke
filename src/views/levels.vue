<template>
  <div class="bg-gradient">
    <LayoutHeader />

    <h1 class="levels-title">LEVELS</h1>
    <div class="center-screen-on-devices">
      <button v-for="item in levels" :key="item.id" class="level-design">
        <a href="/gameplay">
          <img
            src="https://th.bing.com/th/id/R.8ced636f3075d2d9423b48bb9a68fb95?rik=3OYgMTR7784DtQ&pid=ImgRaw&r=0"
        /></a>
      </button>
    </div>
    <img class="next-levels" src="@/assets/images/arrow.png" />
  </div>
</template>
<script>
import LayoutHeader from "@/components/header.vue"
export default {
  components: {
    LayoutHeader,
  },
  data() {
    return {
      levels: [
        { number: 1 },
        { number: 2 },
        { number: 3 },
        { number: 4 },
        { number: 5 },
        { number: 6 },
        { number: 7 },
        { number: 8 },
        { number: 9 },
        { number: 10 },
      ],
    }
  },
  methods: {
    green(g) {
      g.style.background = "green"
    },
  },
}
</script>
