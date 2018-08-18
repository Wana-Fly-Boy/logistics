<template>
    <el-form 
    :model="ruleForm" 
    :rules="rules" 
    ref="ruleForm" 
    label-width="100px" 
    class="demo-ruleForm" 
    :style="{'width':'35%','margin':'30px auto'}">
        <el-form-item label="真实姓名" prop="name">
            <el-input v-model="ruleForm.name"></el-input>
        </el-form-item>
        <el-form-item label="员工编号" prop="num">
            <el-input v-model="ruleForm.num"></el-input>
        </el-form-item>
        <el-form-item label="出生年月" required>
            <el-col :span="11">
            <el-form-item prop="date1">
                <el-date-picker type="date" placeholder="出生年月" v-model="ruleForm.date1" style="width: 100%;"></el-date-picker>
            </el-form-item>
            </el-col>
        </el-form-item>
        <el-form-item label="工作职能" prop="type">
            <el-checkbox-group v-model="ruleForm.type">
            <el-checkbox label="商品管理" name="type"></el-checkbox>
            <el-checkbox label="库存管理" name="type"></el-checkbox>
            <el-checkbox label="运输管理" name="type"></el-checkbox>
            <el-checkbox label="系统管理" name="type"></el-checkbox>
            </el-checkbox-group>
        </el-form-item>
        <el-form-item label="工作性质" prop="resource">
            <el-radio-group v-model="ruleForm.resource">
            <el-radio label="线上技术操纵"></el-radio>
            <el-radio label="线下物流服务"></el-radio>
            </el-radio-group>
        </el-form-item>
        <el-form-item label="公司意见" prop="desc">
            <el-input type="textarea" v-model="ruleForm.desc"></el-input>
        </el-form-item>
        <el-form-item>
            <el-button type="primary" @click="submitForm('ruleForm')">激活帐号</el-button>
            <el-button @click="resetForm('ruleForm')">重置</el-button>
        </el-form-item>
    </el-form>
</template>
<script>
  export default {
    data() {
      return {
        ruleForm: {
          name: '',
          num: '',
          date1: '',
          date2: '',
          type: [],
          resource: '',
          desc: ''
        },
        rules: {
          name: [
            { required: true, message: '请输入真实姓名', trigger: 'blur' },
            { min: 2, max: 4, message: '长度在 2 到 4 个字符', trigger: 'blur' }
          ],
          num: [
            { required: true, message: '员工编号', trigger: 'change' }
          ],
          date1: [
            { type: 'date', required: true, message: '请选择日期', trigger: 'change' }
          ],

          type: [
            { type: 'array', required: true, message: '请至少选择一个工作职能', trigger: 'change' }
          ],
          resource: [
            { required: true, message: '请选择工作性质', trigger: 'change' }
          ],
          desc: [
            { required: true, message: '请填写对公司的建设性意见', trigger: 'blur' }
          ]
        }
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
<style>
</style>

