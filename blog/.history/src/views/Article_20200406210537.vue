<template>
    <div  class="wrapper" >
        <h1 class="title"> 文章列表</h1>
        <div class="article">
                <el-button class="addBtn" @click="handleAdd" >新增+</el-button>
                <el-table :data="articleList"  border stripe>
                        <el-table-column 
                            prop="title"
                            label="标题"
                            width="180">
</template>