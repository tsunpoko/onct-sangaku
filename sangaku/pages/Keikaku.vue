<template>
  <div class="container">
    <Title :title="title"></Title>
    <div v-for="description in allKeikaku">
      <Description :item_name="description.name" :item_description="description.description"></Description>
    </div>
  </div>
</template>


<script>
import Title from '~/components/Title.vue'
import Description from '~/components/Description.vue'

export default {
  components: {
    Title,
    Description
  },
  data () {
    return {
      title: "事業計画"
    }
  },
  computed: {
    allKeikaku() {
      return  this.$store.getters["keikaku/keikakuAll"]
    }
  },
  async fetch({ store }) {
    if (store.getters["keikaku/keikakuAll"].length > 0) {
      return
    }
    await store.dispatch("keikaku/fetchKeikaku")
  }
}
</script>


<style scoped>
.container {
  text-align: left;
}

</style>
