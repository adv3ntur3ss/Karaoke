<template>
<body class="rgb-background">
<cHeader/>
        <h1 class="lvlh1">LEVELS</h1>
           <div class="whiteBorder">
              <div class="place">
               <button class="lvl" id="gr" @click="green()">1</button>
               <button class="lvl">2</button>
               <button class="lvl">3</button>
               <button class="lvl">4</button>
               <button class="lvl">5</button>
               <button class="lvl">6</button>
               <button class="lvl">7</button>
               <button class="lvl">8</button>
               <button class="lvl">9</button>
               <button class="lvl">10</button>
              </div>
              <div class="playPosition">
              <button class="play">PLAY</button>
              </div>
           </div>
           <div class="arrowPosition">
              <a href=""><img class="arrow" src="@/assets/images/arrow.png"></a>
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
