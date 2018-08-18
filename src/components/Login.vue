<template>
    <div id="login">
        <div class="wrapper">
            <el-form 
            size="500px" 
            :model="ruleForm2" 
            label-position="right" 
            status-icon 
            :rules="rules2" 
            ref="ruleForm2" 
            label-width="100px" 
            class="demo-ruleForm animated bounceInDown" 
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
                prop="checkPass">
                    <el-input 
                    type="password" 
                    v-model="ruleForm2.checkPass" 
                    auto-complete="off" 
                    placeholder="请输入登录密码"></el-input>
                    <!-- 以字母开头，长度在6~18之间，只能包含字母、数字和下划线 -->
                </el-form-item>
                <el-form-item 
                label="验证码" 
                prop="validateDemo"
                >
                    <el-input 
                    v-model="ruleForm2.validateDemo" 
                    :style="{'width':'30%'}"
                    ></el-input>
                    <el-button 
                    type="primary" 
                    @click="getDemo"
                    :style="{'margin-left':'7px'}">获取验证码</el-button>
                    <img 
                    v-show="stateDemo"
                    ref="url"
                    :style="{'width':'37%','height':'40px','margin-left':'3px','display':'block','float':'right'}" 
                    alt="">
                </el-form-item>
                <el-form-item>
                    <el-button 
                    type="primary" 
                    @click="loginForm('ruleForm2')">登录</el-button>
                    <el-button 
                    @click="registerForm">注册</el-button> 
                </el-form-item>
            </el-form>
        </div>   
    </div>
</template>
<script>
import Register from './Register.vue'
import Indexs from './Index.vue'
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
          return callback(new Error('请输入密码'));
        }
        setTimeout(() => {
          if(/^[a-zA-Z]\w{5,17}$/.test(value) === false) {
            callback(new Error('请输入正确的密码'));
          }
          else {
            callback();
          }
        }, 1000);
      };
      var validateDemo = (rule, value, callback) => {
        if (!value) {
          return callback(new Error('请输入验证码'));
        }
        setTimeout(() => {
          // console.log(value.toString().toLowerCase());
          // console.log(this.str.toLowerCase());
          if(value.toString().toLowerCase() !== this.str.toLowerCase()) {
            callback(new Error('请输入正确的验证码'));
          }
          else {
            callback();
          }
        }, 1000);
      };
      return {
        ruleForm2: {
          userName: '',
          checkPass: '',
          validateDemo: ''
        },
        rules2: {
          userName: [
            { validator: validateUser, trigger: 'blur' }
          ],
          checkPass: [
            { validator: validatePass, trigger: 'blur' }
          ],
          validateDemo: [
            { validator: validateDemo, trigger: 'blur' }
          ]
        },
        classObj: {
          form: true
        },
        str:'',
        stateDemo: false
      };   
    },
    methods: {
      loginForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            console.log('success!');
            this.$router.push('/index');
          } else {
            console.log('error login!!!');
            return false;
          }
        });
      },
      registerForm() {       
        this.$router.push('/Register');
      },
      getDemo() {
        const str = 'ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz2345678';
        var strDemo = '';
        this.stateDemo = true;
        for(var i = 0; i < 4; i++) {
          strDemo += str.charAt(Math.floor(Math.random()*str.length));
        }
        this.str = strDemo;
        this.$refs.url.src = 'http://ws.webxml.com.cn/WebServices/ValidateCodeWebService.asmx/enValidateImage?byString='+this.str;
        // console.log(this.str);
        // this.$ajax.get('/api/WebServices/ValidateCodeWebService.asmx/cnValidateImage',{
        //     params: {
        //         byString: this.str
        //     }
        // }).then((response) => {
        //   console.log(response);
        // 通过代理跨域可以获得数据但是数据格式不会解析，想到直接使用url地址
        // }).catch((error) => {
        //   console.log(error);
        // })
      }
    }
  }
</script>
<style scoped>
    #login {
        height: 734px;
        background:url(../assets/bg_my.png) no-repeat;
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
        margin-right: 250px;
        padding: 30px;
        padding-left: 0px;
        background-color: white;
        border-radius: 15px;
        border: 5px solid whitesmoke;
    }
</style>
