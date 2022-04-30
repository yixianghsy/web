<template>
 <div class="list">
     <div class="card"   v- v-for="item in blogList" :key="item.id">
         <router-link  :to="'/detail/'+item.id">
            <p  class="title" >{{item.title}}</p>
         </router-link>
         <p class="date" > {{item.create_time}}</p>
 </div>
</template>
<script>
export default {
    data(){
        return{
         blogList:[]
        }
    },
    mounted :{
        getBlogList(){
            this.$axios.get('/api/article/allList')
        }
    }

}
</script>