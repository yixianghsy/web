<template>
     <div class="sign_box">
            <div  class="signIn"  v-if="status==1" >
                    <el-form  :model="loginForm"  :rules="loginForm" ref="loginForm" label-width="0px" key="login">
                        <el-form-item prop=" username"
</template>