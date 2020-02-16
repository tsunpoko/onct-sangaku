<template>
  <div class="container">
    <Title :title="title"></Title>
    <div v-for="(type, index) in belongs[0]['types']">
      <div class="type_wrapper">
        <p class="type_title">
          {{ index }}
          {{ type }}
        </p>
        <div class="type_details" v-for="detail in getDetails(index)">
           <p class="detail_title">
            {{ detail.corp_name }}
           </p>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import Title from '~/components/Title.vue'

export default {
  components: {
    Title
  },
  computed: {
    allKaiin(){
      return this.$store.getters['kaiin/kaiinAll']
    },
    belongs() {
      return this.$store.getters['kaiin/belongsAll']
    }
  },
  data () {
    return {
      title: "会員",
      types: []
    }
  },
  async fetch({ store }) {
    if ( ( store.getters["kaiin/kaiinAll"].length + store.getters["kaiin/belongsAll"].length) > 0 ) {
      return
    }
    await store.dispatch('kaiin/fetchBelongs')
    await store.dispatch('kaiin/fetchKaiin')
  },
  methods: {
    getDetails(n) {
      let arr = []
      for(let i=0; i < this.allKaiin.length; i++) {
        if ( n == this.allKaiin[i].belong ) {
          arr.push(this.allKaiin[i])
        }
      }
       return arr
    }
  },
  created() {
  }
}
</script>


<style scoped>
.container {
  text-align: left;
  background-color: rgba(255, 255, 255, 0);
}

.type_wrapper {
  width: 100%;
  min-height: 22px;
  background-color: rgba(0, 0, 0, 0.1);
  margin-bottom: 20px;
  font-size: 22px;
}

.type_title {
  background-color: rgba(0, 0, 0, 0.1);
  margin-bottom: 5px;
}

.detail_title {
  font-size: 18px;
}
</style>
