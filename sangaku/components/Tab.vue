<template>
  <div class="header">
    <nav class="navbar is-primary" role="navigation" aria-label="main navigation">
      <div class="navbar-brand">
        <a class="navbar-item has-text-weight-semibold is-family-sans-serif" href="/">
          <i class="fas fa-grip-lines-vertical"></i>
          <p class="mdi mdi-light">
            &nbsp; 沖縄工業高等専門学校 産学連携協力会 &nbsp;
          </p>
          <i class="fas fa-grip-lines-vertical"></i>
        </a>

        <a role="button" class="navbar-burger burger " aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div id="navbarBasicExample" class="navbar-menu">
        <div class="navbar-start title-tabbar">
          <a class="navbar-item" :class="getIsActive('/')" href="/">
            トップ
          </a>

          <a class="navbar-item" :class="getIsActive('/kaicho')" href="/kaicho">
            会長挨拶
          </a>

          <a class="navbar-item" :class="getIsActive('/kaisoku')" href="/kaisoku">
            会則
          </a>

          <a class="navbar-item" :class="getIsActive('/yakuin')" href="/yakuin">
            役員
          </a>

          <a class="navbar-item" :class="getIsActive('/kaiin')" href="kaiin">
            会員
          </a>

          <a class="navbar-item" :class="getIsActive('/houkoku')" href="/houkoku">
            事業報告
          </a>

          <a class="navbar-item" :class="getIsActive('/keikaku')" href="/keikaku">
            事業計画
          </a>

          <a class="navbar-item" :class="getIsActive('/form')" href="/form">
            各種お手続き
          </a>

          <a class="navbar-item" target="_blank" href="http://www.okinawa-ct.ac.jp/">
            沖縄高専HPへ
          </a>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>

export default {
  methods: {
    getIsActive(path) {
      return path == this.$route.path ? "is-active" : ""
    }
  }
}

</script>

<style>

.title-tabbar {
  font-size: 16px;
  font-weight: 600;
}

/* .header {
width: 100%;
position: fixed;
} */
</style>
