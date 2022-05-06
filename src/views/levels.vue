<template>
<body class="rgb-background">
<cHeader/>
        <h1 class="lvlh1">LEVELS</h1>
           <div class="whiteBorder">
              <div class="place">
               <button class="level" id="gr" @click="green()">1</button><!-- navrh na aky styl by mohol fungovat FE-->
               <button class="level">2</button>
               <button class="level">3</button>
               <button class="level">4</button>
               <button class="level">5</button>
               <button class="level">6</button>
               <button class="level">7</button>
               <button class="level">8</button>
               <button class="level">9</button>
               <button class="level tablet">10</button>
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
     green(){
        var g = document.getElementById("gr");
        g.style.background = ("green");
     }
   }
}

/* eslint-disable */
</script>
