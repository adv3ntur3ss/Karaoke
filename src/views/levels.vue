<template>
  <body class="rgb-background">
    <LayoutHeader />
    <h1 class="lvlh1">LEVELS</h1>
    <div class="whiteBorder">
      <div class="place">
          <button v-for="(item, index) in levels" :key="item.id"
            class="lvl"
            :class="{green: isActive=1}"
            @click="isActive=1"
          >
          {{index+1}}
          </button>
      </div>
      <div class="playPosition">
        <button class="play">PLAY</button>
      </div>
    </div>
    <div class="arrowPosition">
      <a><img class="arrow" src="@/assets/images/arrow.png" /></a>
    </div>
    <h1 class="hide">.</h1>
  </body>
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
