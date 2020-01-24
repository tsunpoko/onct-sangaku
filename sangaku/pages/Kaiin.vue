<template>
  <div class="container">
    <Title :title="title"></Title>
  </div>
</template>


<script>
import Title from '~/components/Title.vue'

export default {
  components: {
    Title
  },
  data () {
    return {
      title: "会員"
    }
  }
}
</script>


<style scoped>
.container {
  text-align: left;
  background-color: rgba(255, 255, 255, 0);
}
</style>
