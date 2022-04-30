<template>
 <div class="list">
     <div class="card"   v- v-for="item in blogList" :key="item.id">
         <router-link  :to="'/detail/'+item.id"
 </div>
</template>