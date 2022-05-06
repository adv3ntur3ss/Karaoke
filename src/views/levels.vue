<template>
<div class="bg-gradient">
<cHeader/>
        <h1 class="levels-title">LEVELS</h1>
           <div class="levels-position-bg">
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
              <div class="play-button-position">
               <button class="play-button">PLAY</button>
               </div>

           </div>
      
              <img class="next-levels" src="@/assets/images/arrow.png">
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
