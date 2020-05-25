<template>
  <div class="container-filelist">
    <div v-for="url in urls">
      <div class="list">
        <i class="far fa-file-pdf is-primary" style="color: #ff2222; font-size: 32px;"></i>
        <a :href="url.url" target="_blank" style="margin-left: 20px; color: black;">{{ url.title }}</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['urls']
}
</script>

<style scoped>
.container-filelist {
  margin: 0 auto;
  min-height: 10vh;
  justify-content: center;
  align-items: center;
  text-align: left;
  margin-top: 20px;
  width: 60%;
}

.list {
  display:block;
  width: 100%;
  padding: 5%;
  margin-bottom: 20px;
  text-align: center;
}

.list:hover {
  background-color: rgb(105, 105, 105, 0.5);
}
</style>
