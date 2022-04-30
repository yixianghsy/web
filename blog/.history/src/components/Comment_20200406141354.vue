<template>
    <div class="comment-box" >
        <div  v-if="isSignIn===0" class="signInText"> 登录留言吧</div>
        <div v-else class="input-box">
         <div class="input-top">
                <div class ="img" >
                        <img class="avatar"  :src="userinfo.head_img" alt="">
                        <p class="username"  >{{userinfo.nickname}} </p>
                </div>
                <div class="text">
                    <textarea class="comment-content" v-model="submitText"></textarea>
                </div>
         </div>
         <div class="input-bottom">
                <a href="javascript:void(0)" class="submit" @click="publicComment">发表评论</a>
            </div>
        </div>
</template>