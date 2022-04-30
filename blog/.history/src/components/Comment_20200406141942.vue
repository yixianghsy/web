<template>
    <div class="comment-box">
        <div v-if="isSignIn===0" class="signInText">登录留言吧</div>
        <div v-else class="input-box">
            <div class="input-top">
                <div class="img">
                    <img class="avatar" :src="userinfo.head_img" alt="">
                    <p class="username">{{userinfo.nickname}}</p>
                </div>
                <div class="text">
                    <textarea class="comment-content" v-model="submitText"></textarea>
                </div>
            </div>
            <div class="input-bottom">
                <a href="javascript:void(0)" class="submit" @click="publicComment">发表评论</a>
            </div>
        </div>
        <div class="all_comment">
            <p class="title">全部评论<span class="total">{{comments.length}}</span>条</p>
            <div class="comment-list">
                <div class="comment-item" v-for="item in comments" :key="item.id">
                    <div class="item_l">
                        <img class="avatar" :src="item.head_img" alt="">
                        <p class="username">{{item.nickname}}</p>
                    </div>
                    <div class="item_r">
                        <div class="comment-content">
                            <div class="comment_text">{{item.cm_content}}</div>
                            <div class="comment_time">
                                <span class="date">{{item.create_time}}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data()
    {
        return {
                userinfo:{},
                submitText:'',
                comments:[]
        }
    },
    computed : {
    isSignIn(){
        return this.$store.state.isSignIn
    }
    },
    methods: {
        getUserInfo() {
                this.$axios.get('/api/user/info').then((res)=>{
                    let result = res.data
                    if(result.code === 0){
                        this.userinfo = result.data
                    }
                }).catch(e=>{
                    console.log(e)
                })
    },
                publicComment() {
                this.$axios.post('/api/comment/public',{
                    article_id:this.$route.params.id,
                    content:this.submitText
                }).then((res)=>{
                    console.log(res)
                    if(res.data.code === 0){
                        this.submitText = ''
                        this.getCommentList()
                    }
                }).catch(e=>{
                    console.log(e)
                })
            },
            getCommentList() {
                this.$axios.get('/api/comment/list',{
                    params:{
                        article_id:this.$route.params.id
                    }     
                }).then((res)=>{
                    console.log(res)
                    if(res.data.code === 0){
                        this.comments = res.data.data
                    }
                }).catch(e=>{
                    console.log(e)
                })
            }
        },
        created() {
            this.getUserInfo()
            this.getCommentList()
        },
}
</script>