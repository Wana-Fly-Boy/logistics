<template>
  <div id="apply">
    <el-table
    :data="list"
    style="width: 100%">
    <el-table-column
      prop="date"
      label="到达日期"
      width="180">
      <template slot-scope="scope">
        <i class="el-icon-time"></i>
        <span style="margin-left: 10px">{{ scope.row.date }}</span>
      </template>
    </el-table-column>
    <el-table-column
      prop="transform"
      label="交通方式"
      width="180">
      <template slot-scope="scope">
        <span style="margin-left: 10px">{{ scope.row.transform }}</span>
      </template>
    </el-table-column>
    <el-table-column
      prop="address1"
      label="中转地址">
      <template slot-scope="scope">
        <span style="margin-left: 10px">{{ scope.row.address1 }}</span>
      </template>
    </el-table-column>
    <el-table-column
      prop="address2"
      label="目的地址">
      <template slot-scope="scope">
        <span style="margin-left: 10px">{{ scope.row.address2 }}</span>
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
    <el-dialog title="中转信息" :visible.sync="dialogFormVisible">
      <el-form :model="form">
        <el-form-item label="交通方式" :label-width="formLabelWidth">
          <el-input v-model="form.transform" auto-complete="off" placeholder="交通方式"></el-input>
        </el-form-item>
        <el-form-item label="中转地址" :label-width="formLabelWidth">
          <el-input v-model="form.region1" placeholder="中转地址"></el-input>
        </el-form-item>
        <el-form-item label="目的地" :label-width="formLabelWidth">
          <el-input v-model="form.region2" placeholder="目的地"></el-input>
        </el-form-item>
        <el-form-item label="到达日期" :label-width="formLabelWidth">
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
const list = store.fetch('transfer');
export default {
    data() {
      return {
        list:list,
        dialogFormVisible: false,
        state: 0,
        index: 0,
        form: {
          name: '',
          region1: '',
          region2: '',
          transform: '',
          date: '',
        },
        formLabelWidth: '120px',
        }
    },
    watch: {
        list: {
          handler() {
            store.save('transfer',this.list);
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
        this.form.region1 = '';
        this.form.region2 = '';
        this.form.transform = '';
        this.form.date = '';
      },
      handleEdit(data,index) {
        this.form.region1 = data[index].address1;
        this.form.region2 = data[index].address2;
        this.form.transform = data[index].transform;
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
            address1: this.form.region1,
            address2: this.form.region2,
            transform: this.form.transform,
            date: moment(this.form.date).format('YYYY-MM-DD')
          });
        }else {
          data[this.index].address1 = this.form.region1;
          data[this.index].address2 = this.form.region2;
          data[this.index].transform = this.form.transform;
          data[this.index].date = moment(this.form.date).format('YYYY-MM-DD');
        }
      }
    }
}
</script>
<style>
</style>
