<template>
<body class="rgb-background">
 <header class="topbanner">
          <div class="h-12 w-24">
            <h4 class="text-center p-3"><img class="logo" src="@/assets/images/logoKaraoke.png"></h4>
          </div>
        </header>
        <h1 class="lvlh1">LEVELS</h1>
           <div class="whiteBorder">
              <div class="place">
               <button class="lvl" id="gr" @click="green()">1</button>
               <button class="lvl">2</button>
               <button class="lvl">3</button>
               <button class="lvl">4</button>
               <button class="lvl">5</button>
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

export default{
   data(){
      return{

      }
   },
   methods:{
     green(){
        var g = document.getElementById("gr");
        g.style.background = ("green")
     }
   }
}

/* eslint-disable */
</script>
