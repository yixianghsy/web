<template>
  <div class="blog-content-box">
    <div class="wrapper">
      <h1 class="title">{{blogDetail.title}}</h1>
      <div class="time">
        <span class="date"><i class="iconfont icon-date"></i>{{blogDetail.create_time}}</span>
      </div>
      <div class="detail">
        <mavon-editor v-model="blogDetail.content"
            defaultOpen="preview"
            :toolbarsFlag="false"
            :subfield="false"/>
      </div>
      <comment></comment>
    </div>
  </div>
</template>
<script>
import  Comment　 from  '@/components/Comment.vue'
export default {
    data(){
        return{
            blogDetail:{}
        }
    },
    comments:{
        Comment
    },
    methods:{
              getDetail() {
        this.$axios.get('/api/article/detail',{
          params:{
            article_id:this.$route.params.id
          }
        }).then(res => {
            if(res.data.code === 0){
                this.blogDetail = res.data.data
            }
          }).catch(e=>{
              console.log(e)
        })
      }
    }
}
</script>