<template>
    <div class="wrapper">
        <h1 class="title">文章列表</h1>
        <div class="article">
            <el-button class="addBtn" @click="handleAdd">新增+</el-button>
            <el-table :data="articleList" border stripe>
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
                        <span>{{ scope.row.create_time }}</span>
                    </template>
                </el-table-column>
                <el-table-column
                    label="操作">
                    <template slot-scope="scope">
                        <el-button size="mini" type="primary" @click="handleLook(scope.row)">查看</el-button>
                        <el-button size="mini" type="success" @click="handleEdit(scope.row)">编辑</el-button>
                        <el-button size="mini" type="danger" @click="handleDelect(scope.row)">删除</el-button>
                    </template>
                </el-table-column>
            </el-table>
            
        </div>
    </div>
</template>
<script>
export default {
        data(){
                return{
                    articleList
                }
        }
}
</script>
<style lang="scss" scoped>
.title {
    margin: 30px 0;
    text-align: center;
    font-weight: bold;
    font-size: 28px;
}
.article {
    .addBtn {
        float: right;
        margin-bottom: 20px;
    }
}
/deep/ .el-table {
    .cell {
        text-align: center;
    }
}
</style>