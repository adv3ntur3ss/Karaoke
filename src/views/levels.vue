<template>
<div class="bg-gradient">
<cHeader/>
        <h1 class="levels-title">LEVELS</h1>
           <div>
               <button class="level-design" id="gr" @click="green()"><img src="https://th.bing.com/th/id/R.8ced636f3075d2d9423b48bb9a68fb95?rik=3OYgMTR7784DtQ&pid=ImgRaw&r=0" alt=""></button><!-- navrh na aky styl by mohol fungovat FE-->
               <button class="level-design"><img src="https://th.bing.com/th/id/R.8ced636f3075d2d9423b48bb9a68fb95?rik=3OYgMTR7784DtQ&pid=ImgRaw&r=0" alt=""></button>
               <button class="level-design"><img src="https://th.bing.com/th/id/R.8ced636f3075d2d9423b48bb9a68fb95?rik=3OYgMTR7784DtQ&pid=ImgRaw&r=0" alt=""></button>
               <button class="level-design"><img src="https://th.bing.com/th/id/R.8ced636f3075d2d9423b48bb9a68fb95?rik=3OYgMTR7784DtQ&pid=ImgRaw&r=0" alt=""></button>
               <button class="level-design"><img src="https://th.bing.com/th/id/R.8ced636f3075d2d9423b48bb9a68fb95?rik=3OYgMTR7784DtQ&pid=ImgRaw&r=0" alt=""></button>
               <button class="level-design"><img src="https://th.bing.com/th/id/R.8ced636f3075d2d9423b48bb9a68fb95?rik=3OYgMTR7784DtQ&pid=ImgRaw&r=0" alt=""></button>
               <button class="level-design"><img src="https://th.bing.com/th/id/R.8ced636f3075d2d9423b48bb9a68fb95?rik=3OYgMTR7784DtQ&pid=ImgRaw&r=0" alt=""></button>
               <button class="level-design"><img src="https://th.bing.com/th/id/R.8ced636f3075d2d9423b48bb9a68fb95?rik=3OYgMTR7784DtQ&pid=ImgRaw&r=0" alt=""></button>
               <button class="level-design"><img src="https://th.bing.com/th/id/R.8ced636f3075d2d9423b48bb9a68fb95?rik=3OYgMTR7784DtQ&pid=ImgRaw&r=0" alt=""></button>
               <button class="level-design"><img src="https://th.bing.com/th/id/R.8ced636f3075d2d9423b48bb9a68fb95?rik=3OYgMTR7784DtQ&pid=ImgRaw&r=0" alt=""></button>
              </div>
                <img class="next-levels" src="@/assets/images/arrow.png"> 
                
               <bottomBanner/>
</div>
      
             
</template>
<script>
import cHeader from "@/components/header.vue"
import bottomBanner from "@/components/footer.vue"

export default{
   components:{
      cHeader,
      bottomBanner
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
</script>
