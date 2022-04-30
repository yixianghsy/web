<template>
     <div class="sign_box">
            <div  class="signIn"  v-if="status==1" >
                    <el-form  :model="loginForm"  :rules="loginForm" ref="loginForm" label-width="0px" key="login">
                        <el-form-item prop=" username" >
                             <el-input  v-model="loginForm.username" placeholder="请输入账号"></el-input>
                        </el-form-item>
                           <el-form-item prop=" password" >
                             <el-input  type ="password" v-model="loginForm.password" placeholder="请输入密码"></el-input>
                           </el-form-item>
                            <el-form-item>
                    <el-button class="signBtn" type="primary" @click="signIn">登录</el-button>
                </el-form-item>
                        </el-form-item>
</template>