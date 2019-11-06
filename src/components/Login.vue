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
import qs from 'qs'
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
                let d = {
                    'publicNumberId':1,
                    'pageNo':1,
                    'pageSize':15,
                    'needTotalSize':true,
                    'companyCode':'ruixue_test',
                    'certificate':'52895F8E60699E3552F63D522A113D8A757F63223C6AF509B1B4580E263E605790450BAE54C406B91AFD1BB9824BE02C7493F9A510D30C21745A73DD5C88F6B0'
                };
                this.$http({
                    url:this.$config.baseUrl+'content/findPage',
                    method:'post',
                    data:qs.stringify(d)
                })
                .then(()=>{
                //    console.log(res)
                });
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