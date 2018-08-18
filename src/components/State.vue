<template>
  <div id="state">
    <el-carousel :interval="4000" type="card" height="300px">
      <el-carousel-item v-for="(img,index) in imgList" :key="index">
        <!-- <h3>{{ item }}</h3> -->
        <img :src="img.url" alt="">
      </el-carousel-item>
    </el-carousel>
  </div>
</template>
<script>
export default {
  data() {
    return {
      imgList: [
      {
        url: require('../assets/包裹箱.png')
      },
      {
        url: require('../assets/搞笑快递小人.png')
      },
      {
        url: require('../assets/女邮递员.png')
      }
      ]
    }
  }
}
</script>
<style>
  #state {
    margin: 80px auto;
    width: 70%;
  }
  .el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 200px;
    margin: 0;
  }
  
  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }
  
  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
</style>