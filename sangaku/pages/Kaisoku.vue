<template>
  <div class="container">
    <Title :title="title"></Title>
    <div v-for="description in allKaisoku">
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
      title: "会則",
      descriptions: [
      ]
    }
  },
  computed: {
    allKaisoku() {
      return  this.$store.getters["kaisoku/kaisokuAll"]
    }
  },
  async fetch({ store }) {
    if (store.getters["kaisoku/kaisokuAll"].length > 0) {
      return
    }
    await store.dispatch("kaisoku/fetchKaisoku")
  }
}
</script>

<style scoped>
.container {
  text-align: left;
}
</style>
