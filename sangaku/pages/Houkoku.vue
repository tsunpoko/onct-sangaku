<template>
  <div class="container">
    <Title :title="title"></Title>
    <FileList :urls="allHoukoku"></FileList>
  </div>
</template>


<script>
import Title from '~/components/Title.vue'
import FileList from '~/components/FileList.vue'

export default {
  components: {
    Title,
    FileList
  },
  data () {
    return {
      title: "事業報告"
    }
  },
  computed: {
    allHoukoku() {
      return  this.$store.getters["houkoku/houkokuAll"]
    }
  },
  async fetch({ store }) {
    console.log("aaaa")
    if (store.getters["houkoku/houkokuAll"].length > 0) {
      return
    }
    await store.dispatch("houkoku/fetchHoukoku")
  }
}
</script>


<style scoped>
.container {
  text-align: left;
  background-color: rgba(255, 255, 255, 0);
}
</style>
