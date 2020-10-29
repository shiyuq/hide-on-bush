<template>
  <div class="main">
    <a-form class="user-layout-login" :form="form">
      <div class="company-name" style="margin-bottom: 10px; text-align: center">SYMBOISIS</div>
      <a-form-item>
        <a-input
          size="large"
          type="text"
          placeholder="邮箱地址"
          v-decorator="[
            'email',
            {
              rules: [{
                type: 'email', message: '请输入一个有效的邮箱',
              }, {
                required: true, message: '请输入您的邮箱',
              }]
            }
          ]">
          <a-icon slot="prefix" type="user" :style="{ color: 'rgba(0,0,0,.25)' }"/>
        </a-input>
      </a-form-item>

      <a-form-item >
        <a-input
          size="large"
          type="password"
          autocomplete="false"
          placeholder="密码"
          v-decorator="[
            'password',
            { rules: [{ required: true, message: 'Please input your Password!' }] }
          ]">
          <a-icon slot="prefix" type="lock" :style="{ color: 'rgba(0,0,0,.25)' }"/>
        </a-input>
      </a-form-item>

      <a-form-item style="margin-top:24px">
        <a-button
          size="large"
          type="primary"
          htmlType="submit"
          class="login-button"
          :loading="loginBtn"
          @click.stop.prevent="handleSubmit"
          :disabled="loginBtn"
        >确定</a-button>
      </a-form-item>
    </a-form>
  </div>
</template>

<script>
import md5 from 'md5'
import { authService } from '@/api'

export default {
  beforeCreate () {
    this.form = this.$form.createForm(this)
  },
  data () {
    return {
      loginBtn: false
    }
  },
  methods: {
    handleSubmit (e) {
      e.preventDefault()
      this.form.validateFields((err, values) => {
        if (!err) {
          values.password = md5(values.password)
          this.login(values)
        }
      })
    },
    async login (values) {
      this.loginBtn = true
      try {
        const response = await authService.login(values)
        console.log('response', response)
        // const token = response.data.token
        // setToken(token)
        this.loginSuccess()
      } catch (err) {
        this.requestFailed(err)
      }
    },
    loginSuccess () {
      this.loginBtn = false
      // const temp = getAllUrlParams()

      // if (temp.redirect) {
      //   const redirect = unescape(temp.redirect)
      //   console.log(redirect)
      //   window.location.href = redirect
      // } else {
      //   this.$router.push({ path: '/' })
      // }
      // this.$message.success(`${timeFix()}，欢迎回来`)
    },
    requestFailed (err) {
      if (err.message === '未知的网络错误') {
        this.$message.error('用户名或密码错误')
      } else {
        this.$message.error('登录错误')
      }
      this.loginBtn = false
    }
  }
}
</script>

<style scoped>
.main {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f0f2f5;
  height: 100%;
}

.company-name {
  font-size: 30px;
  font-weight: 800;
}

.user-layout-login {
  margin-top: -10%;
  width: 20%;
}

.user-layout-login label {
  font-size: 14px;
}

.user-layout-login button.login-button {
  padding: 0 15px;
  font-size: 16px;
  height: 40px;
  width: 100%;
}

.user-layout-login .user-login-other {
  text-align: left;
  margin-top: 24px;
  line-height: 22px;
}
.user-layout-login .user-login-other .register {
  float: right;
}
</style>
