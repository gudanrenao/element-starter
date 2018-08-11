<template>
  <div>
    <img src="../../assets/logo.png">
    <div>
      <el-button @click="startHacking">Start</el-button>
      <el-button @click="enter">登录主页面</el-button>
      <el-button @click="test">测试</el-button>
    </div>
  </div>
</template>

<script>
  export default {
    name: "login",
    methods: {
      startHacking() {
        this.$notify({
          title: 'It works!',
          type: 'success',
          message: 'We\'ve laid the ground work for you. It\'s time for you to build something epic!',
          duration: 5000
        })
      },
      enter: function () {
        this.$router.push('/index')
      },
      test: function () {
        this.$router.push('/topIndex')
      }
    }
  }
</script>

<style scoped>

</style>