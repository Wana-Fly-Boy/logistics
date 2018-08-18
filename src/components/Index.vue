<template>
    <el-container>
        <el-header style="height:77px;position:relative"><l-header></l-header></el-header>
        <router-view :style="{'position':'relative'}"></router-view>
        <el-footer :style="{'position':'absolute','bottom':'0','width':'100%'}"><l-footer></l-footer></el-footer>
    </el-container>
</template>
<script>
import Header from './layout/Header.vue'
import Footer from './layout/Footer.vue'
export default {
    data () {
        return {

        }
    },
    methods: {
    },
    components: {
        'l-header': Header,
        'l-footer': Footer
    }
}
</script>
<style scoped>
  .el-header {
    padding: 0px;
  }
  .el-header, .el-footer {
    color: #333;
    text-align: center;
    line-height: 60px;
  }
  .el-container:nth-child(5) .el-aside,
  .el-container:nth-child(6) .el-aside {
    line-height: 260px;
  }
  .el-container:nth-child(7) .el-aside {
    line-height: 320px;
  }
</style>
