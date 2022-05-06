<template>
<body class="rgb-background">
<cHeader/>
        <h1 class="lvlh1">LEVELS</h1>
           <div class="whiteBorder">
              <div class="place">
               <button class="lvl" ref="gr1" @click="green(this.$refs.gr1)">1</button>
               <button class="lvl" ref="gr2" @click="green(this.$refs.gr2)">2</button>
               <button class="lvl" ref="gr3" @click="green(this.$refs.gr3)">3</button>
               <button class="lvl" ref="gr4" @click="green(this.$refs.gr4)">4</button>
               <button class="lvl" ref="gr5" @click="green(this.$refs.gr5)">5</button>
               <button class="lvl" ref="gr6" @click="green(this.$refs.gr6)">6</button>
               <button class="lvl" ref="gr7" @click="green(this.$refs.gr7)">7</button>
               <button class="lvl" ref="gr8" @click="green(this.$refs.gr8)">8</button>
               <button class="lvl" ref="gr9" @click="green(this.$refs.gr9)">9</button>
               <button class="lvl tablet" ref="gr10" @click="green(this.$refs.gr10)">10</button>
              </div>
              <div class="center">
              <button class="play-button">PLAY</button>
              </div>
           </div>
           <div class="next-level-position">
              <a href=""><img class="next-level" src="@/assets/images/arrow.png"></a>
           </div>
         <h1 class="hide">.</h1>
      </body>
</template>
<script>
import cHeader from "@/components/header.vue"

export default{
   components:{
      cHeader
   },
   data(){
      return{

      }
   },
   methods:{
     green(g){
        g.style.background = ("green");
     }
   }
}

/* eslint-disable */
</script>
