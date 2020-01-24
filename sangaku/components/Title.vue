<template>
  <div class="title-container">
    <div class="title-content">
      <p class="title-text"> {{ title }} </p>
    </div>
  </div>
</template>

<script>
export default {
  props: ['title'],
  mounted () {
    console.log("Title.vue is called")
  }
}
</script>

<style scoped>
.title-container {
  margin: 0 auto;
  min-height: 10vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin-bottom: 20px;
}

.title-content {
  min-width: 25%;
  font-size: 20px;
  border-bottom: solid 2px #00d1b2;
}

.title-text {
  width: 100%;
  margin-top: 10px;
  margin-bottom: 10px;
}
</style>
