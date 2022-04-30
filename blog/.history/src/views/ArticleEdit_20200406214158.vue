<template>
     <div class=" edit_wrap wrapper" >
         <el-button @click="goBack" >返回</el-button>
     </div>
     <div class="edit_title">标题</div>
       <el-input v-model="title" placeholder="请输入标题"></el-input>
       <div class="edit_title">文章内容 (Markdown编辑器)</div>

</template>