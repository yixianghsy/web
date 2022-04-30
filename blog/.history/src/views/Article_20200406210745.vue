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
                        </el-table-column>
                        <el-table-column
                            label="日期"
                            width="180">
                            <template slot-scope="scope">
                                <i class="el-icon-time"></i>
                                <span>{{scope.row.create_time}} </span>
                            </template>
                        </el-table-column>
                        <el-table-column
                                label="操作">
</template>