<template>
  <div class="bg-gradient">
    <LayoutHeader />

    <h1 class="levels-title">LEVELS</h1>
    <div class="center-screen-on-devices">
      <button v-for="item in levels" :key="item.id" class="level-design">
        <h4>{{ item.name }}</h4>
        <a :href="item.link"> <img :src="item.image" /></a>
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
      levels: {
        level1: {
          image:
            "https://s.mxmcdn.net/images-storage/albums/4/6/7/7/5/4/27457764_350_350.jpg",
          name: "Twinkle",
          link: "#/gameplay"
        },
        level2: {
          image:
            "https://th.bing.com/th/id/R.8ced636f3075d2d9423b48bb9a68fb95?rik=3OYgMTR7784DtQ&pid=ImgRaw&r=0",
          name: "TBD",
          link: "#/TBD"
        },
        level3: {
          image:
            "https://th.bing.com/th/id/R.8ced636f3075d2d9423b48bb9a68fb95?rik=3OYgMTR7784DtQ&pid=ImgRaw&r=0",
          name: "TBD",
          link: "#/TBD"
        },
        level4: {
          image:
            "https://th.bing.com/th/id/R.8ced636f3075d2d9423b48bb9a68fb95?rik=3OYgMTR7784DtQ&pid=ImgRaw&r=0",
          name: "TBD",
          link: "#/TBD"
        },
        level5: {
          image:
            "https://th.bing.com/th/id/R.8ced636f3075d2d9423b48bb9a68fb95?rik=3OYgMTR7784DtQ&pid=ImgRaw&r=0",
          name: "TBD",
          link: "#/TBD"
        },
        level6: {
          image:
            "https://th.bing.com/th/id/R.8ced636f3075d2d9423b48bb9a68fb95?rik=3OYgMTR7784DtQ&pid=ImgRaw&r=0",
          name: "TBD",
          link: "#/TBD"
        },
        level7: {
          image:
            "https://th.bing.com/th/id/R.8ced636f3075d2d9423b48bb9a68fb95?rik=3OYgMTR7784DtQ&pid=ImgRaw&r=0",
          name: "TBD",
          link: "#/TBD"
        },
        level8: {
          image:
            "https://th.bing.com/th/id/R.8ced636f3075d2d9423b48bb9a68fb95?rik=3OYgMTR7784DtQ&pid=ImgRaw&r=0",
          name: "TBD",
          link: "#/TBD"
        },
       level9: {
          image:
            "https://th.bing.com/th/id/R.8ced636f3075d2d9423b48bb9a68fb95?rik=3OYgMTR7784DtQ&pid=ImgRaw&r=0",
          name: "TBD",
          link: "#/TBD"
        },
        level10: {
          image:
            "https://th.bing.com/th/id/R.8ced636f3075d2d9423b48bb9a68fb95?rik=3OYgMTR7784DtQ&pid=ImgRaw&r=0",
          name: "TBD",
          link: "#/TBD"
        },
      },
    }
  },
}
</script>
