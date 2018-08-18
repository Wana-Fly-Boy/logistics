<template>
    <el-container :style="{'width':'80%','margin':'90px auto 0 auto'}">
        <el-aside :style="{'height':'400px','background':'#fff'}"><l-aside></l-aside></el-aside>
        <el-container :style="{'margin-left':'20px','height':'400px'}">
            <el-main><l-content></l-content></el-main>
        </el-container>
    </el-container>
</template>
<script>
import Aside from './layout/Aside.vue'
import Content from './layout/Content.vue'
export default {
    components: {
        'l-aside': Aside,
        'l-content': Content
    }
}
</script>
<style scoped>
  .el-aside {
    color: #333;
    text-align: center;
    line-height: 200px;
    width: 30%;
  }
  .el-main {
    color: #333;
    text-align: center;
  }
</style>
