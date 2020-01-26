<template>
  <div class="container">
    <Title :title="title"></Title>
    <img class="kaicho-img" src="@/assets/images/kaicho.jpg">
    <div class="text-container">
      <p>
        令和元年６月より、沖縄工業高等専門学校産学連携協力会の第四代会長に就任しました古波津 昇でございます。
      </p>
      <br />
      <p>
        本協力会は、沖縄高専の教育・研究活動を側面より支援すると共に、産学間の共同研究を推進し、産学振興に寄与することを目的として、平成16年4月に設立し、島袋周仁初代会長、湧川昌秀第二代会長、呉屋守章第三代会長をはじめとする多くの方々のご尽力で活動の基盤を築いて参りました。
        これまで、産業界と沖縄高専とのパイプ役を担い、高専との技術協力や技術の実用化、技術移転など、産学間の連携強化を進めてまいりました。また、高専フォーラムや施設見学会、定期技術相談会等の産学連携事業を通して会員とのコミュニケーションを計り、共同研究等の研究支援に取り組んでおります。
      </p>
      <br />
      <p>
        本協力会は、県内の製造業、サービス業、経済団体等を中心とする企業会員及び個人会員で構成されております。会員の募集も随時行っておりますので、お気軽にお問合せください。今後ともご支援･ご協力を宜しくお願い申し上げます。
      </p>
      <br />
      <p>
        令和元年６月 沖縄工業高等専門学校産学連携協力会会長 古波津 昇
      </p>

    </div>
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
      title: "会長挨拶"
    }
  }
}
</script>

<style scoped>
.kaicho-img {
  max-height: 50vh;
}

.text-container {
  margin-top: 20px;
  text-align: left;
}
</style>
