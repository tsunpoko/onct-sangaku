<template>
  <div class="container">
    <Title :title="title"></Title>
    <div v-for="(type, index) in belongs[0]['types']">
      <div class="type_wrapper">
        <h1 class="type_title">
          {{ type }}
        </h1>
        <div class="type_details" v-for="detail in getDetails(index)">
           <p class="detail_title">
            {{ detail.corp_name }}
           </p>
           <div class="detail_content">
             <p class="detail_position">
               {{ detail.position }}
             </p>
             <p class="detail_person">
               {{ detail.person_name }}
             </p>
             <div class="detail_url" v-if="detail.url">
               <a :href="detail.url" target="_blank">
                   詳細 <i class="fas fa-external-link-alt"></i>
               </a>
             </div>
           </div>
           <div class="border">
           </div>
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
  width: 80%;
  margin-left: 17%;
  min-height: 22px;
  margin-bottom: 20px;
  font-size: 22px;
}

.type_title {
  width: 80%;
  padding-left: 40px;
  margin-bottom: 5px;
}

.detail_title {
  margin-top: 10px;
  padding-left: 60px;
  font-size: 14px;

    margin-left: 10px;
}

.detail_content {
  font-size: 16px;
  padding-left: 60px;
  display: flex;
  flex-direction: row;
}

.detail_position {
  margin-top: 2px;
  margin-left: 10px;
  vertical-align: bottom;
}

.detail_person {
  font-size: 18px;
  margin-left: 20px;
}

.detail_url {
  position: absolute;
  right: 0;
  margin-right: 25%;
}

.border {
  background-color: rgba(0, 0, 0, 0.3);
  width: 65%;
  height: 2px;
  margin-left: 60px;
  text-align: center;
  margin-top: 10px;
  margin-bottom: 10px;
}

h1 {
  position: relative;
  padding: 5px 5px 5px 42px;
  background: #00d1b2;
  font-size: 20px;
  color: white;
  line-height: 1.3;
  z-index:-1;
}

h1:before {
  position: absolute;
  content: '';
  left: -2px;
  top: -2px;
  border: none;
  border-left: solid 40px white;
  border-bottom: solid 49px transparent;
  z-index:-99
}
</style>
