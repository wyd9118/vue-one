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
                type="password"
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
                        username: this.form.username,
                        password: this.form.psw,
                        companyCode:'ruixue_test',
                    };
                let _this = this;
                this.$http({
                    method: 'post',
                    url: 'http://120.26.101.143:80/welearning/api/login/validate',
                    withCredentials:true,
                    data: d
                })
                .then(function(res){
                    console.log(res);
                    if(res.data&&res.data.errorCode===0&&res.data.data){
                        localStorage.setItem('certificate',res.data.data.certificate);
                        _this.$router.push({path:'/'});
                    }
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