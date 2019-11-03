<template>
    <div class="login-section">
        <el-form ref="form" :model="form" label-width="80px">
            <el-form-item label="用户名：">
                <el-input
                placeholder="输入用户名" 
                v-model="form.username"> 
                </el-input>
            </el-form-item>
            <el-form-item label="密码">
                <el-input
                placeholder="输入密码" 
                v-model="form.psw"> 
                </el-input>
            </el-form-item>
            <el-form-item>
                <el-button class="primary" @click="submitLogin">登录</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>
<script>
    export default {
        name:'login',
        data(){
            return {
                form:{
                    username:'',
                    psw:'',
                }
            }
        },
        methods:{
            submitLogin(){
                
            }
        }
    }
</script>
<style scoped>
    .login-section{
        width:200px;
        margin:0 auto;
        text-align:left;
    }
    .el-input {
        display:block;
    }
</style>