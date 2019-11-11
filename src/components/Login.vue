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
                let d = {
                        // username: this.form.username,
                        // password: this.form.psw
                        publicNumberId:1,
                        pageNo:1,
                        pageSize:15,
                        needTotalSize:true,
                        companyCode:'ruixue_test',
                        certificate:'52895F8E60699E3552F63D522A113D8A7117BC3C32E76CE0B41555AB8653CDF2EFED99D1C71919E48B33B0693CD689425ED074C2D34E05517F91CB6898D05F79'
                    };
                this.$http({
                    method: 'post',
                    url: 'http://120.26.101.143:80/welearning/api/content/findPage',
                    withCredentials:true,
                    data: d
                })
                .then(function(response){
                    console.log(response)
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