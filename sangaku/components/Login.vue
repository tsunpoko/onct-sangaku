<template>
  <div class="login-form">
    <Title title="管理者画面へログイン" />
    <input v-model="email" placeholder="メールアドレス"/>
    <input v-model="password" placeholder="パスワード"/>
    <button>ログイン</button>
  </div>
</template>

<script>

import Title from '~/components/Title.vue'
export default {
  components: {
    Title
  },data() {
    return {
      email: '',
      password: ''
    }
  }
}
</script>

<style scoped>
.login-form {
  display: flex;
  flex-direction: column;
  margin-left: 20%;
  margin-right: 20%;
  text-align: center;
  margin-top: -20%;
}

.login-form input {
  width: 400px;
  height: 40px;
  margin-bottom: 20px;
  font-size: 18px;
}

.login-form button {
  width: 40%;
  margin-left: 30%;
  margin-right: 30%;
  font-size: 16px;
  padding: 10px;
  background-color: #00d1b2;
  color: white;
  font-weight: bold;
}
</style>
