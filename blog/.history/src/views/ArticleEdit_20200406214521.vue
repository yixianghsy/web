<template>
     <div class=" edit_wrap wrapper" >
         <el-button @click="goBack" >返回</el-button>
     </div>
     <div class="edit_title">标题</div>
       <el-input v-model="title" placeholder="请输入标题"></el-input>
       <div class="edit_title">文章内容 (Markdown编辑器)</div>
<div class="markdown">
        <mavon-editor v-model="content"/>
</div>
<div class ="save_btn">
        <el-button type="primary" @click="save">保存　</el-button>
</div>
</div>
</template>