<template>
    <div id="register">
        <div id="wrapper">
            <el-form 
            size="500px" 
            label-position="right" 
            class="demo-ruleForm animated bounceInDown"
            :model="ruleForm2" 
            status-icon 
            :rules="rules2" 
            ref="ruleForm2" 
            label-width="100px" 
            :class="classObj">
                <el-form-item 
                label="用户名" 
                prop="userName">
                    <el-input 
                    type="text" 
                    v-model="ruleForm2.userName" 
                    auto-complete="off" 
                    placeholder="请输入登录手机号"></el-input>
                </el-form-item>
                <el-form-item 
                label="密码" 
                prop="pass">
                    <el-input 
                    type="password" 
                    v-model="ruleForm2.pass" 
                    auto-complete="off"
                    placeholder="请输入密码"></el-input>
                </el-form-item>
                <el-form-item 
                label="确认密码" 
                prop="checkPass">
                    <el-input 
                    type="password" 
                    v-model="ruleForm2.checkPass" 
                    auto-complete="off"
                    placeholder="请再次输入密码"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button 
                    type="primary" 
                    @click="submitForm('ruleForm2')">注册</el-button>
                    <el-button 
                    @click="resetForm('ruleForm2')">重置</el-button>
                </el-form-item>
            </el-form>
        </div>
    </div>
</template>
<script>
  export default {
    data() {
      var validateUser = (rule, value, callback) => {
        if (value === '') {
          return callback(new Error('请输入用户名'));
        }
        setTimeout(() => {
          if(/(^(13[0-9]|14[5|7]|15[0|1|2|3|5|6|7|8|9]|18[0|1|2|3|5|6|7|8|9])\d{8}$)/.test(value) === false) {
            callback(new Error('请输入正确的用户名'));
          } else {
            callback();
          }
        }, 1000);
      };
      var validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入密码'));
        } else {
          if (this.ruleForm2.checkPass !== '') {
            this.$refs.ruleForm2.validateField('checkPass');
          }
          callback();
        }
      };
      var validatePass2 = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请再次输入密码'));
        } else if (value !== this.ruleForm2.pass) {
          callback(new Error('两次输入密码不一致!'));
        } else {
          callback();
        }
      };
      return {
        ruleForm2: {
          userName: '',
          pass: '',
          checkPass: ''
        },
        rules2: {
          userName: [
            { validator: validateUser, trigger: 'blur' }
          ],
          pass: [  
            { validator: validatePass, trigger: 'blur' }
          ],
          checkPass: [
            { validator: validatePass2, trigger: 'blur' }
          ]
        },
        classObj: {
          form: true
        },
      };
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('submit!');
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    }
  }
</script>
<style scoped>
    #register {
        height: 734px;
        background:url(../assets/bg_center4.png) no-repeat;
        background-size: 1700px 1000px;
    }
    .wrapper {
        height: 734px;
        background: rgba(255, 255, 255, 0.2);
    }
    .form {
        position: absolute;
        width: 500px;
        height: 250px;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        margin: auto;
        margin-left: 250px;
        padding: 30px;
        padding-left: 0px;
        background-color: white;
        border-radius: 15px;
        border: 5px solid whitesmoke;
    }
</style>
