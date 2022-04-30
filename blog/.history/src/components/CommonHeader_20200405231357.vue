<template>
    <header>
        <div class="wrapper">
                <el-row>
                     <el-col  :span="4">
                         <div class=" logo">易翔的博客</div>
                     </el-col :span="20">  
                        <el-menu mode="horizontal"
                        class=" nav"
                        :default-active="activeIndex"
                        @select="hanleSelect"
                        background-color="#2d2d2d"
                        text-color="#9d9d"
                        active-text-color="#fff"
                     <el-col 
                </el-row>

                         
        </div>
    </header>
</template>