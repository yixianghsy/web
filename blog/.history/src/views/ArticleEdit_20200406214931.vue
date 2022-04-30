<template>
    <div class="edit_wrap wrapper">
       <div class="backBtn">
           <el-button @click="goBack">返回</el-button>
       </div>
       <div class="edit_title">标题</div>
       <el-input v-model="title" placeholder="请输入标题"></el-input>
       <div class="edit_title">文章内容 (Markdown编辑器)</div>
       <div class="markdown">
            <mavon-editor v-model="content"/>
       </div>
       <div class="save_btn">
           <el-button type="primary" @click="save">保存</el-button>
       </div>
    </div>
</template>
<script>
export default {
    data(){
        return {
            title: '',
            content: ''
        }
    },
    methods:{
        goBack(){
                this.$router.go(-1)
            },
            save(){
                if(this.$route.params.id){
                    this.$axios.post('/api/article/update',{
                        title:this.title,
                        content:this.content,
                        article_id:this.$route.params.id
                    }).then(res => {
                        if(res.data.code === 0){
                            this.$message({
                                message: '更新成功',
                                type: 'success'
                            });
                            setTimeout(() => {
                                this.$router.push({name:'article'})
                            }, 1500);
                        }
                    }).catch(e => {
                        console.log(e)
                    })
                }else{
                    this.$axios.post('/api/article/add',{
                    title:this.title,
                    content:this.content
                }).then(res => {
                    if(res.data.code === 0){
                        this.$message({
                            message: '新增成功',
                            type: 'success'
                        });
                        setTimeout(() => {
                            this.$router.push({name:'article'})
                        }, 1500);
                    }
                }).catch(e => {
                    console.log(e)
                })
                }     
            },
    }
}
</script>