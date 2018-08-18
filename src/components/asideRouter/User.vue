<template>
<div id="user">
  <el-table
    :data="list"
    style="width: 100%">
    <el-table-column
      label="日期"
      width="180">
      <template slot-scope="scope">
        <i class="el-icon-time"></i>
        <span style="margin-left: 10px">{{ scope.row.date }}</span>
      </template>
    </el-table-column>
    <el-table-column
      label="姓名"
      width="180">
      <template slot-scope="scope">
        <el-popover trigger="hover" placement="top">
          <p>姓名: {{ scope.row.name }}</p>
          <p>住址: {{ scope.row.address }}</p>
          <div slot="reference" class="name-wrapper">
            <el-tag size="medium">{{ scope.row.name }}</el-tag>
          </div>
        </el-popover>
      </template>
    </el-table-column>
    <el-table-column label="操作">
      <template slot-scope="scope">
        <el-button
          size="mini"
          @click="handleEdit(list,scope.$index)">编辑</el-button>
        <el-button
          size="mini"
          type="danger"
          @click="handleDelete(scope.$index, scope.row, list)">删除</el-button>
      </template>
    </el-table-column>
  </el-table>
  <el-button
  width="120px"
  size="medium"
  type="success"
  :style="{'margin-top':'20px'}"
  @click="handleAdd">添加</el-button>
  <el-dialog title="用户信息" :visible.sync="dialogFormVisible">
    <el-form :model="form">
      <el-form-item label="姓名" :label-width="formLabelWidth">
        <el-input v-model="form.name" auto-complete="off" placeholder="请输入姓名"></el-input>
      </el-form-item>
      <el-form-item label="地址" :label-width="formLabelWidth">
        <el-input v-model="form.region" placeholder="请输入收货地址"></el-input>
      </el-form-item>
      <el-form-item label="日期" :label-width="formLabelWidth">
        <!-- <el-input v-model="form.date" placeholder="请输入日期"></el-input> -->
        <el-date-picker
          v-model="form.date"
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
const list = store.fetch('user');
  export default {
    data() {
      return {
        // list: [{
        //   date: '2016-05-02',
        //   name: '王小虎',
        //   address: '上海市普陀区金沙江路 1518 弄'
        // }, {
        //   date: '2016-05-04',
        //   name: '王小虎',
        //   address: '上海市普陀区金沙江路 1517 弄'
        // }, {
        //   date: '2016-05-01',
        //   name: '王小虎',
        //   address: '上海市普陀区金沙江路 1519 弄'
        // }, {
        //   date: '2016-05-03',
        //   name: '王小虎',
        //   address: '上海市普陀区金沙江路 1516 弄'
        // }],
        list:list,
        dialogFormVisible: false,
        state: 0,
        index: 0,
        form: {
          name: '',
          region: '',
          date: '',
          delivery: false,
          type: [],
          resource: '',
          desc: ''
        },
        formLabelWidth: '120px',
      };
    },
    watch: {
        list: {
          handler() {
            store.save('user',this.list);
          },
          deep: true
        }
    },
    methods: {
      handleDelete(index, row, data) {
        // console.log(data[index].date);
        data.splice(index,1);
      },
      handleAdd() {
        this.dialogFormVisible = true;
        this.state = 1;
        this.form.region = '';
        this.form.name = '';
        this.form.date = '';
      },
      handleEdit(data,index) {
        this.form.region = data[index].address;
        this.form.name = data[index].name;
        this.form.date = new Date();
        //这个编辑日期有点迷，date.getHours is not a function
        this.dialogFormVisible = true;
        this.state = 0;
        this.index = index;
      },
      open(data) {
        this.dialogFormVisible = false;
        if(this.state === 1) {
          data.push({
            address: this.form.region,
            name: this.form.name,
            date: moment(this.form.date).format('YYYY-MM-DD')
          });
        }else {
          data[this.index].address = this.form.region;
          data[this.index].name = this.form.name;
          data[this.index].date = moment(this.form.date).format('YYYY-MM-DD');
        }
      }
    }
  };
</script>