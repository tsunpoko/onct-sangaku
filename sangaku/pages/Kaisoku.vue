<template>
  <div class="container">
    <Title :title="title"></Title>
    <div v-for="description in descriptions">
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
        {name: "第1条（名称）", description: "この会は、沖縄工業高等専門学校産学連携協力会（以下「本会」という。）という。"},
        {name: "第2条（目的）", description: "本会は、沖縄工業高等専門学校の教育・研究活動を側面より支援すると共に、本県産学間の共同研究を推進し、産業振興に寄与することを目的とする。"},
        {name: "第3条（事業）", description: "本会は、前条の目的を達成するため、次の事業を行う。"},
        {name: "第4条（組織）", description: "本会は、第２条に規定する目的に賛同する企業・団体及び個人をもって組織する。"},
        {name: "第5条（役員及び任期）", description: ""},
        {name: "第2条（目的）", description: ""},
        {name: "第2条（目的）", description: ""},
        {name: "第2条（目的）", description: ""},
        {name: "第2条（目的）", description: ""},
        {name: "第2条（目的）", description: ""},
        {name: "第2条（目的）", description: ""}
      ]
    }
  }
}
</script>

<style scoped>
.container {
  text-align: left;
}
</style>
