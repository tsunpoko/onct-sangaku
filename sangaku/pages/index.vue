<template>
  <div class="container">
    <div class="container-slider">
      <Slider />
      <div class="purpose">
        <p>
          本会は、沖縄工業高等専門学校の教育・研究活動を側面より支援すると共に、
        </p>
        <p>
          本件産学間の共同研究を推進し、産学振興に寄与することを目的とする。
        </p>
      </div>
    </div>
    <div class="container-update">
      <p class="info-title"><i class="fas fa-info-circle" style="color: #00d1b2; margin-bottom: 10px;"></i> &nbsp; 更新情報</p>
      <ul v-for="info in update_infos" class="info_contents">
        <li class="">
          <p class="">
            {{ info.timestamp }}
            &nbsp;&nbsp;
            {{ info.title }}
          </p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import Slider from '~/components/Slider.vue'

export default {
  components: {
    Slider,
  },
  data() {
    return {
      update_infos: [
        {timestamp: "2021-11-11", title: "会員ページのメンテナンス中です"},
        {timestamp: "2020-01-01", title: "新年の挨拶"},
        {timestamp: "2019-12-01", title: "ホームページのURLが変わりました"},
        {timestamp: "2019-04-25", title: "役員・会員数を更新しました"},
        {timestamp: "2019-04-01", title: "平成31年度の会員を募集開始しました"},
      ]
    }
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

.purpose {
  position: absolute;
  top: 55%;
  left: 0;
  margin-left: 25%;
  bottom: 100px;
  font-size: 20px;
}

.purpose p {
  width: auto;
  border-bottom: solid 3px #00d1b2;
  font-weight: 700;
}

.container-slider {
  width: 50%;
  height: 100vh;
}

.container-update {
  width: 50%;
  height: 100vh;
  margin-top: -5%;
}

.slider {
  width: 100%;
  margin-left: 10%;
  margin-top: 10%;
}

.info-content {
  display: table-cell;
  text-align: left;
  margin-left: 5%;
  padding: 2%;
  margin-bottom: 5px;
  background-color: rgb(240, 240, 240, 1);
}

.info-title {
  font-weight: bold;
  font-size: 20px;
}

ul {
  padding: 0;
}

ul li, ol li {
  text-align: left;
  margin-left: 5%;
  color: #404040;
  border-left: solid 6px #00d1b2;
  border-bottom: solid 2px #dadada;
  background: whitesmoke;
  margin-bottom: 6px;
  line-height: 1.5;
  padding: 1em;
  list-style-type: none!important;
  font-weight: bold;
}
</style>
