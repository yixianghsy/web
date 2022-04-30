<template>
    <div class="comment-box" >
        <div  v-if="isSignIn===0" class="signInText"> 登录留言吧</div>
        <div v-else class="input-box">
         <div class="input-top">
                <div class ="img" >
                        <img class="avatar"  :src="userinfo.head_img" alt="">
                        <p class="username"  >{{userinfo.nickname}}
         </div>
        </div>
</template>