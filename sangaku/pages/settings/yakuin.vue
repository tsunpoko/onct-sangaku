<template>
  <div class="container-admin">
    <div class="content">
      <Title title="ファイルを編集"></Title>
      <div class="container-filelist">
        <div class="addfile">
          <p>
            <i class="fas fa-plus-square"></i>
            ファイルを追加する
          </p>
        </div>

        <div v-for="url in urls">
          <div class="list" style="padding: 5%; margin-bottom: 20px; text-align: center;">
            <i class="far fa-file-pdf is-primary" style="color: #ff2222; font-size: 32px;"></i>
            <a :href="url.url" target="_blank" style="margin-left: 20px; color: black;">{{ url.title }}</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Login from '@/components/Login.vue'
import Title from '~/components/Title.vue'

export default {
  middleware: 'authenticated',
  layout: 'admin',
  components: {
    Login,
    Title
  },
  created () {
    this.$fireApp.auth().onAuthStateChanged((user) => {
      console.log('fuck')
      console.log(user)
    })
  },
  data () {
    return {
      urls: []
    }
  },
  async fetch({ app, store }) {
    if ( store.getters["yakuin/yakuinAll"].length > 0) {
      return
    }
    await store.dispatch("yakuin/fetchYakuin")
  },
  created() {
    this.urls = this.$store.getters["yakuin/yakuinAll"]
  }
}
</script>

<style scoped>
.container-admin {
  display: flex;
  width: 100%;
  height: 100vh;
  background-color: rgba(255,255, 255, 0);
}

.content {
  width: 100%;
  height: 100%;
  color: white;
}

.container-filelist {
  margin: 0 auto;
  min-height: 10vh;
  justify-content: center;
  align-items: center;
  text-align: left;
  margin-top: 20px;
  width: 60%;
}

.addfile {
  width: 200px;
  height: 20px;
  margin: 30px;
  font-size: 18px;
}

.list {

}

</style>
