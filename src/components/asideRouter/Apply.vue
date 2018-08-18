<template>
  <div id="apply">
    <el-table
    :data="list"
    style="width: 100%">
    <el-table-column
      prop="apply_date"
      label="供应日期"
      width="180">
      <template slot-scope="scope">
        <i class="el-icon-time"></i>
        <span style="margin-left: 10px">{{ scope.row.apply_date }}</span>
      </template>
    </el-table-column>
    <el-table-column
      prop="apply_name"
      label="供应商"
      width="180">
      <template slot-scope="scope">
        <span style="margin-left: 10px">{{ scope.row.apply_name }}</span>
      </template>
    </el-table-column>
    <el-table-column
      prop="apply_address"
      label="供应地址">
      <template slot-scope="scope">
        <span style="margin-left: 10px">{{ scope.row.apply_address }}</span>
      </template>
    </el-table-column>
    <el-table-column
      label="操作">
      <template slot-scope="scope">
        <el-button size="mini" type="info" @click="handleEdit(list,scope.$index)">编辑</el-button>
        <el-button size="mini" type="danger" @click="handleDelete(list,scope.$index)">删除</el-button>
      </template>
    </el-table-column>
    </el-table>
    <el-button
    width="120px"
    size="medium"
    type="success"
    :style="{'margin-top':'20px'}"
    @click="handleAdd">添加</el-button>
    <el-dialog title="供应信息" :visible.sync="dialogFormVisible">
      <el-form :model="form">
        <el-form-item label="公司名" :label-width="formLabelWidth">
          <el-input v-model="form.apply_name" auto-complete="off" placeholder="供应商名"></el-input>
        </el-form-item>
        <el-form-item label="公司地址" :label-width="formLabelWidth">
          <el-input v-model="form.apply_region" placeholder="公司地址"></el-input>
        </el-form-item>
        <el-form-item label="供应日期" :label-width="formLabelWidth">
          <el-date-picker
            v-model="form.apply_date"
            type="date"
            :style="{'width':'100%'}"
            placeholder="选择日期">
          </el-date-picker>
        </el-form-item>     
      </el-form>
      <div slot="footer" class="dialog-footer" :data="list">
        <el-button @click="dialogFormVisible = false">取消</el-button>
        <el-button type="primary" @click="open(list)">确定</el-button>
      </div>
    </el-dialog>
  </div>
</template>
<script>
import moment from 'moment'

const store = {
  save(key, value) {
    localStorage.setItem(key,JSON.stringify(value));
  },
  fetch(key) {
    return JSON.parse(localStorage.getItem(key)) || [];
  }
}
const list = store.fetch('apply');
export default {
    data() {
      return {
        list:list,
        dialogFormVisible: false,
        state: 0,
        index: 0,
        form: {
          apply_name: '',
          apply_region: '',
          apply_date: '',
        },
        formLabelWidth: '120px',
        }
    },
    watch: {
        list: {
          handler() {
            store.save('apply',this.list);
          },
          deep: true
        }
    },
    methods: {
      handleDelete(data, index) {
        data.splice(index,1);
      },
      handleAdd() {
        this.dialogFormVisible = true;
        this.state = 1;
        this.form.apply_region = '';
        this.form.apply_name = '';
        this.form.apply_date = '';
      },
      handleEdit(data,index) {
        this.form.apply_region = data[index].apply_address;
        this.form.apply_name = data[index].apply_name;
        this.form.apply_date = new Date();
        //这个编辑日期有点迷，date.getHours is not a function
        this.dialogFormVisible = true;
        this.state = 0;
        this.index = index;
      },
      open(data) {
        this.dialogFormVisible = false;
        if(this.state === 1) {
          data.push({
            apply_address: this.form.apply_region,
            apply_name: this.form.apply_name,
            apply_date: moment(this.form.apply_date).format('YYYY-MM-DD')
          });
        }else {
          data[this.index].apply_address = this.form.apply_region;
          data[this.index].apply_name = this.form.apply_name;
          data[this.index].apply_date = moment(this.form.apply_date).format('YYYY-MM-DD');
        }
      }
    }
}
</script>
<style>
</style>
