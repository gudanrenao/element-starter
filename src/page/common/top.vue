<template>
  <div>
    <el-row class="header-wrapper">
      <el-col :md="12" class="logo-wrapper flex-wrapper flex-column-center">
        <div class="logo"><img src="../../assets/common/img/logo.png" alt=""></div>
        <div class="name">营销平台</div>
      </el-col>
      <el-col :md="12" class="clearfix">
        <div class="user right">
          你好，
          <!-- 点击用户名之后下拉菜单 -->
          <el-dropdown>
            <span class="el-dropdown-link">
              <!-- <span>{{merchantName}}</span> -->
              <span>{{merchantName}}</span>
              <i class="el-icon-arrow-down el-icon--right"></i>
            </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item @click.native="tomendian">门店管理</el-dropdown-item>
              <el-dropdown-item @click.native="tozhanghu">用户管理</el-dropdown-item>
              <el-dropdown-item @click.native="tojiesuan">结算账户管理</el-dropdown-item>
              <el-dropdown-item @click.native="logoutFun">退出</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </div>
      </el-col>
    </el-row>
  </div>

</template>

<script>


  export default {
    // computed: {
    //   ...mapGetters([
    //     'merchantName',
    //     'merchantUserId',
    //     'loginState',
    //     'level'
    //   ])
    // },
    // created: function () {
    //   this.connect()
    // },
    data() {
      return {
        merchantName: '张文'
      }
    },
    methods: {
      logoutFun() {
        // let _this = this
        // axios.get(`${http}/account/logout`)
        //   .then(function (res) {
        //     if (_this.stompClient !== null) {
        //       if (_this.stompClient.connected) {
        //         _this.stompClient.disconnect();
        //       }
        //       _this.stompClient = null;
        //     }
        //     _this.$router.push({path: '/login'})
        //   })
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
      // play(content) {
      //   // let utterThis = null;
      //   // utterThis = new window.SpeechSynthesisUtterance();
      //   // utterThis.text = content;
      //   // utterThis.pitch = 1.35;
      //   // window.speechSynthesis.speak(utterThis);
      // }
      // ,
      // connect() {
      //   let _this = this
      //   let socket = new SockJS(`${http}/endpointChat`);
      //   this.stompClient = Stomp.Stomp.over(socket);
      //   this.stompClient.connect({login: _this.merchantUserId}, function (frame) {
      //     console.log('Connected：', frame)
      //     console.log('Stomp', 'connect')
      //     _this.stompClient.subscribe(`${http}/user/${_this.merchantUserId}/notifications`, function (res) {
      //       console.log('Stomp', 'subscribe')
      //       console.log("响应数据：", res.body)
      //       _this.play(res.body)
      //     });
      //   });
      // }
    }
  }
</script>

<!--<style scoped lang="stylus" rel="stylesheet/stylus">-->
<style scoped>
  .tabsLabel {
    position: relative;
    height: 30px;
    line-height: 30px;
    font-size: 14px;
    color: #fff;
    padding: 0 10px;
    margin-right: 25px;
    display: inline-block;
    background-color: #FB991A;
    border-radius: 0 3px 3px 0;
  }

  .tabsLabel:after {
    display: block;
    content: '';
    border-width: 15px 16px 15px 0px;
    border-style: solid;
    border-color: transparent #FB991A transparent transparent;
    position: absolute;
    left: -16px;
    top: 0;
  }

  .el-header {
    height: 70px;
  }

  .header-wrapper {
    width: 100%;
    height: 70px;
  }

  .logo-wrapper {
    height: 70px;
    display: flex;
  }

  .logo {
    position: relative;
    display: block;
    flex: 0 0 200px;
    -webkit-flex: 0 0 200px;
    width: 200px;
    height: 100%;
    background: #FB991A;
  }

  img {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
    width: 93px;
    height: 50px;
  }

  .name {
    padding-left: 50px;
    font-size: 24px;
    color: #111;
  }

  .user {
    margin-right: 50px;
    line-height: 70px;
  }

  .el-dropdown-link {
    cursor: pointer;
  }

</style>
