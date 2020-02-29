<template>
  <div class="container">
    <Login />
  </div>
</template>

<script>
import Login from '@/components/Login.vue'

export default {
  middleware: 'authenticated',
  components: {
    Login
  }
}
</script>

<style scoped>
.container {
  display: flex;
  width: 100%;
  height: 100vh;
  margin-top: 8%;
  background-color: rgba(255,255, 255, 0.0);
}

</style>
