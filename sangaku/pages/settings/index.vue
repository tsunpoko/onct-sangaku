<template>
  <div class="container-admin">

  </div>
</template>

<script>
import Login from '@/components/Login.vue'

export default {
  middleware: 'authenticated',
  layout: 'admin',
  components: {
    Login
  },
  created () {
    this.$fireApp.auth().onAuthStateChanged((user) => {
    })
  }
}
</script>

<style scoped>
.container-admin {
  display: flex;
  width: 100%;
  height: 100vh;
  background-color: rgba(255,255, 255, 0.0);
}

</style>
