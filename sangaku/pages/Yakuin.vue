<template>
  <div>
    <Title :title="title"></Title>
    <p>
      本会は、沖縄工業高等専門学校の教育・研究活動を側面より支援すると共に、本件産学間の共同研究を推進し、産学振興に寄与することを目的とする。
    </p>
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
      title: "役員"
    }
  }
}
</script>


<style scoped>

</style>
