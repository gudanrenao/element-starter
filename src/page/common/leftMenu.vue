<template>

  <el-menu
    default-active="/merchant/index"
    class="el-menu-vertical-demo"
    @open="handleOpen"
    @close="handleClose"
    background-color="#545c64"
    text-color="#fff"
    :router="true"
    active-text-color="#ffd04b">
    <el-submenu index="1">
      <template slot="title">
        <i class="el-icon-location"></i>
        <span>信息中心</span>
      </template>
      <el-menu-item index="/merchant/index">商家信息</el-menu-item>
      <el-menu-item index="1-2">会员信息</el-menu-item>
    </el-submenu>
    <el-submenu index="2">
      <template slot="title">
        <i class="el-icon-location"></i>
        <span>订单中心</span>
      </template>
      <el-menu-item index="2-1">扫码订单</el-menu-item>
      <el-menu-item index="2-2">团购订单</el-menu-item>
    </el-submenu>
  </el-menu>

</template>

<script>
  export default {
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

<style scoped>

  .icon-font-style {
    font-size: 20px;
  }

  .menu-ture {
    /*:not(.el-menu--collapse)*/
    width: 200px;
    border-right: none;
  }


</style>
