export const responseHandler = {
  methods: {
    errorHandler(error) {
      if (error.response.status === 401) {
        this.$notify.error({
          title: '登录失败',
          message: '用户名或密码错误'
        })
      } else if (error.response.status === 403) {
        this.$router.push("/login")
      } else {
        this.$notify.error({
          title: '请求异常(status=' + error.response.status + ')',
          message: error.message
        })
      }
    }
  }
}