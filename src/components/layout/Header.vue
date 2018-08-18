<template>
    <div id="header">
        <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
            <img src="../../assets/logo2.png" alt="" :class="classLogo">
            <el-menu-item index="1"><router-link to="/index/message" :class="classLink">信息管理</router-link></el-menu-item>     
            <el-menu-item index="2"><router-link to="/index/count" :class="classLink">数据统计</router-link></el-menu-item>
            <el-menu-item index="3"><router-link to="/index/state" :class="classLink">关于我们</router-link></el-menu-item>
            <el-menu-item index="4"><router-link to="/index/system" :class="classLink">员工设置</router-link></el-menu-item>
            <li class="el-menu-item" style="color:#000">
                <img src="../../assets/person.png" width="36px" height="36px"><span>刘哲</span>
            </li>
        </el-menu>
    </div>
</template>
<script>
  export default {
    data() {
      return {
        activeIndex: '1',
        activeIndex2: '1',
        classLogo: {
            logo: true
        },
        classLink: {
            link: true
        }
      };
    },
    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }
</script>
<style scoped>
    .logo {
        float: left;
        width: 200px;
        height: 77px;
        cursor: pointer;
        outline: none;
    }
    .el-menu--horizontal>.el-menu-item {
        height: 77px;
        line-height: 77px;
        width: 17%;
        font-size: 17px;
        color: #828282;
    }
    .link {
        display: block;
        width: 100%;
        height: 100%;
    }
</style>
