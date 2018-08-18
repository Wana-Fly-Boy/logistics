<template>
    <div id="aside">
        <el-row class="tac">
            <el-col :span="24">
                <el-menu
                default-active="2"
                class="el-menu-vertical-demo"
                @open="handleOpen"
                @close="handleClose">
                    <el-submenu index="1">
                        <template slot="title">
                            <i class="el-icon-tickets"></i>
                            <span>客户信息</span>
                        </template>
                        <el-menu-item-group>
                            <el-menu-item index="1-1"><router-link :class="classLink" to="/index/message/apply">供应商</router-link></el-menu-item>
                            <el-menu-item index="1-2"><router-link :class="classLink" to="/index/message/deal">经销商</router-link></el-menu-item>
                        </el-menu-item-group>
                    </el-submenu>
                    <el-submenu index="2">
                        <template slot="title">
                            <i class="el-icon-goods"></i>
                            <span>商品信息</span>
                        </template>
                        <el-menu-item-group>
                            <el-menu-item index="1-1"><router-link :class="classLink" to="/index/message/buy">商品购入</router-link></el-menu-item>
                            <el-menu-item index="1-2"><router-link :class="classLink" to="/index/message/sell">商品出售</router-link></el-menu-item>
                        </el-menu-item-group>
                    </el-submenu>
                    <el-submenu index="3">
                        <template slot="title">
                            <i class="el-icon-sold-out"></i>
                            <span>仓库信息</span>
                        </template>
                        <el-menu-item-group>
                            <el-menu-item index="1-1"><router-link :class="classLink" to="/index/message/store">入库记录</router-link></el-menu-item>
                            <el-menu-item index="1-2"><router-link :class="classLink" to="/index/message/outstore">出库记录</router-link></el-menu-item>
                        </el-menu-item-group>
                    </el-submenu>
                    <el-submenu index="4">
                        <template slot="title">
                            <i class="el-icon-refresh"></i>
                            <span>运输记录</span>
                        </template>
                        <el-menu-item-group>
                            <el-menu-item index="1-1"><router-link :class="classLink" to="/index/message/through">直达流程</router-link></el-menu-item>
                            <el-menu-item index="1-2"><router-link :class="classLink" to="/index/message/transfer">中转流程</router-link></el-menu-item>
                        </el-menu-item-group>
                    </el-submenu>
                    <el-submenu index="5">
                        <template slot="title">
                            <i class="el-icon-setting"></i>
                            <span>系统用户</span>
                        </template>
                        <el-menu-item-group>
                            <el-menu-item index="1-1"><router-link :class="classLink" to="/index/message/user">用户信息</router-link></el-menu-item>
                        </el-menu-item-group>
                    </el-submenu>
                </el-menu>
            </el-col>
        </el-row>
    </div>
</template>
<script>
  export default {
    data () {
        return {
            classLink: {
                link: true
            }
        };
    },
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }
</script>
<style>
    .el-submenu__title {
        margin-left: -30px;
    }
    .link {
        display: block;
        width: 100%;
        height: 100%;
    }
</style>
