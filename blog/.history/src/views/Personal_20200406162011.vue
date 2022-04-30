<template>
     <div class="wrapper" >
            <div class="content">
                    <el-form :model="form" ref="form"  label-width="80px">
                        <el-form-item label="昵称" >
                                <el-input v-model="orm.nickname" class="nickname" ></el-input>
                        </el-form-item>
                        <el-form-item  label="头像"
                                <el-upload 
                                    class="avatar-uploader" 
                                       action="http://127.0.0.1:3000/api/user/upload"
                                       :show-file-list="false"
                                        :on-success="handleAvatarSuccess"
                                        :before-upload="beforeAvatarUpload"
                                    　name="head_img">
                                       <img :src="imageUrl!=null?imageUrl:imgDefault" class="avatar">
                                       </el-upload>
                                       <p class="tips">tips:请上传2M以内JPG/PNG格式的图片，比例最好1:1</p>
                        </el-form-item>
                        <el-form-item>
                                <el-button type="primary" @click="save">保存</el-button>
                        </el-form-item>
</template>