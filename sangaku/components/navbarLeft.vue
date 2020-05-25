<template>
  <div class="admin-nav">
    <aside class="menu">
      <p class="menu-label">
        更新情報
      </p>
      <ul class="menu-list">
        <li><a>投稿する</a></li>
        <li><a>写真を追加・削除</a></li>
      </ul>
      <p class="menu-label">
        各種設定
      </p>
      <ul class="menu-list">
        <li><a>会長挨拶</a></li>
        <li><a>会則</a></li>
        <li><a href="/settings/yakuin">役員</a></li>
        <li><a>会員</a></li>
        <li><a>事業報告</a></li>
        <li><a>事業計画</a></li>
        <li><a>各種お手続き</a></li>
      </ul>
      <p class="menu-label">
        アカウント
      </p>
      <ul class="menu-list">
        <li><a>ユーザー追加</a></li>
        <li><a @click="logout()">ログアウト</a></li>
      </ul>
    </aside>
  </div>
</template>

<script>

export default {
  methods: {
    logout() {
      console.log('logout')
      this.$store.dispatch('logout')
    }
  }
}
</script>

<style scoped>

.admin-nav {
  padding: 20px;
  background-color: rgba(0, 0, 0, 1);
  width: 20%;
  height: 100vh;
}

.admin-nav p {
  color: gray;
}

.admin-nav a {
  color: white;
}

.admin-nav a:hover {
  background-color: grey;
}
</style>
