<template>
  <div>
      <el-input type="text" v-model="name" placeholder="账号"></el-input>
      <el-input type="password" v-model="pwd" placeholder="密码"></el-input>
      <el-button type="primary"  @click.native.prevent="handleSubmit2" :loading="logining">登录</el-button>
  </div>
</template>

<script>
import { requestLogin } from '../api/api'
export default {
  data () {
    return {
      logining: false,
      signin: {
        name: 'admin',
        pwd: '123456'
      },
      rules2: {
        name: [
          { required: true, message: '请输入账号', trigger: 'blur' }
        ],
        pwd: [
          { required: true, message: '请输入密码', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    handleReset2 () {
      this.$refs.signin.resetFields()
    },
    handleSubmit2 (ev) {
      // let _this = this
      console.log(this.$refs)
      this.$refs.signin.validate((valid) => {
        if (valid) {
          this.logining = true
          let loginParams = { username: this.signin.name, password: this.signin.pws }
          requestLogin(loginParams).then(data => {
            this.logining = false
            let { msg, code, user } = data
            if (code !== 200) {
              this.$message({
                message: msg,
                type: 'error'
              })
            } else {
              sessionStorage.setItem('user', JSON.stringify(user))
              this.$router.push({ path: '/home' })
            }
          })
        } else {
          console.log('error submit!!')
          return false
        }
      })
    }
  }
}
</script>

<style>

</style>
