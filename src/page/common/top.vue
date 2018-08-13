<template>
  <el-header style="text-align: right; font-size: 14px">
    <span style="padding-right: 70%;font-size: x-large;letter-spacing: 10px">营销服务平台</span>
    <el-dropdown>
      <i class="el-icon-setting" style="margin-right: 15px;font-size: large"></i>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item>查看</el-dropdown-item>
        <el-dropdown-item>新增</el-dropdown-item>
        <el-dropdown-item>删除</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
    <span>张文</span>
  </el-header>
</template>

<script>


  export default {
    data() {
      return {
        merchantName: '张文'
      }
    },
    methods: {
      logoutFun() {

      },
      tomendian() {
        let _this = this
        _this.$router.push({path: '/dropdownmenu/mendianguanli'})
      },
      tozhanghu() {
        let _this = this
        _this.$router.push({path: '/dropdownmenu/zhanghuguanli'})
      },
      tojiesuan() {
        let _this = this
        _this.$router.push({path: '/dropdownmenu/jiesuanzhanghu'})
      },

    }
  }
</script>

<!--<style scoped lang="stylus" rel="stylesheet/stylus">-->
<style scoped>
  .el-header {
    background-color: rgb(41, 53, 65);
    color: white;
    line-height: 60px;
    width: 100%;
    height: 60px !important;
  }
</style>
