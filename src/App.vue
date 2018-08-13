<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
  import index from './page/common/index'

  export default {
    components: {index},
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

<style>
  #app {
    font-family: Helvetica, sans-serif;
    text-align: center;
    height: 100%;
  }
  body,html {
    height: 100%;
    width: 100%;
    margin: 0;
  }
</style>
