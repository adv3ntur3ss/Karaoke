<template>
  <div class="bg-gradient">
    <LayoutHeader />
    <h1 class="levels-title">LEVELS</h1>
    <div class="levels-position-bg">
      <div class="place">
          <button v-for="(item, index) in levels" :key="item.id"
            class="level"
            :class="{green: isActive=1}"
            @click="isActive=1"
          >
          {{index+1}}
          </button>
      </div>
      <div class="play-button-position">
        <button class="play-button">PLAY</button>
      </div>
    </div>
  </div>
</template>
<script>
import LayoutHeader from "@/components/header.vue"

export default {
  data() {
    return {
      isActive: false,
      levelNumber: 1,
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
  components: {
    LayoutHeader,
  },
  methods: {
    changeColor(g) {
      g.style.background = "changeColor"
    },
  },
}
</script>
