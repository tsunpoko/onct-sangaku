<template>
  <div class="container" >
    <Title :title="title"></Title>

    <div class="select-form" v-if="!selected">
      <button class="button is-primary is-medium is-fullwidth" @click="selected='産学連携協力会 お申込み'">産学連携協力会 お申込み</button>
      <button class="button is-primary is-medium is-fullwidth" @click="selected='登録内容変更'">登録内容変更</button>
      <button class="button is-primary is-medium is-fullwidth" @click="selected='その他'">その他</button>
    </div>


    <p class="p-wrapper">{{ selected }}</p>

    <div v-if="selected" class="wrapper">
      <div class="field">
        <label class="label">企業名</label>
        <div class="control has-icons-right">
          <input class="input is-primary  is-rounded" type="text" placeholder="企業名" v-model="corp_name">
          <span class="icon is-small is-right">
            <i class="fas fa-check"></i>
          </span>
        </div>
      </div>

      <div class="field">
        <label class="label">代表者役職・氏名</label>
        <div class="control has-icons-right">
          <input class="input is-primary is-rounded" type="text" placeholder="代表者役職・氏名" v-model="rep_name">
          <span class="icon is-small is-right">
            <i class="fas fa-check"></i>
          </span>
        </div>
      </div>

      <div class="field">
        <label class="label">住所</label>
        <div class="control has-icons-right">
          <input class="input is-primary is-rounded" type="text" placeholder="住所" v-model="address">
          <span class="icon is-small is-right">
            <i class="fas fa-check"></i>
          </span>
        </div>
      </div>

      <div class="field">
        <label class="label">電話番号</label>
        <div class="control has-icons-right">
          <input class="input is-primary is-rounded" type="text" placeholder="電話番号" v-model="phone">
          <span class="icon is-small is-right">
            <i class="fas fa-check"></i>
          </span>
        </div>
      </div>

      <div class="field">
        <label class="label">メールアドレス</label>
        <div class="control has-icons-right">
          <input class="input is-primary is-rounded" type="text" placeholder="メールアドレス" v-model="mail">
          <span class="icon is-small is-right">
            <i class="fas fa-check"></i>
          </span>
        </div>
      </div>


      <div class="field">
        <label class="label">担当者氏名</label>
        <div class="control has-icons-right">
          <input class="input is-primary is-rounded" type="text" placeholder="担当者氏名" v-model="charge_name">
          <span class="icon is-small is-right">
            <i class="fas fa-check"></i>
          </span>
        </div>
      </div>

      <div class="field">
        <label class="label">備考</label>
        <div class="control">
          <textarea class="textarea is-primary is-rounded " placeholder="備考" v-model="memo"></textarea>
        </div>
      </div>

      <div class="field is-grouped  button_wrapper">
        <div class="control">
          <button class="button is-primary is-disable" @click="submit">送信</button>
        </div>
        <div class="control">
          <button class="button is-link is-light" @click="selected=''">キャンセル</button>
        </div>
      </div>
    </div>

    <div id="overlay"  v-show="showContent">
      <div id="content">
        <p>お申込みを受け付けました。</p>
        <p>ありがとうございます。</p>
        <p><button @click="transToHome()">close</button></p>
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
  data () {
    return {
      showContent: false,
      selected: "",
      title: "各種お手続き",
      corp_name: "",
      rep_name: "",
      address: "",
      phone: "",
      mail: "",
      charge_name: "",
      memo: ""
    }
  },
  methods: {
    transToHome() {
      this.showContent = false
      this.$router.push('/')
    },
    clearForm() {
      this.selected = ""
      this.showContent = true
    },
    submit() {
      const mailer = this.$fireApp.functions().httpsCallable('sendMail');
      var params = {
        to: "ac194606@edu.okinawa-ct.ac.jp",
        msg: ""
      }

      var os = require("os");
      var ret = "<br />"

      params.msg = `
      お問い合わせ内容: ${ this.selected + ret}
      企業名: ${ this.corp_name + ret}
      代表者役職・氏名: ${ this.rep_name + ret}
      住所: ${ this.address + ret}
      電話番号: ${ this.phone + ret}
      メールアドレス: ${ this.mail + ret}
      担当者氏名: ${ this.charge_name + ret}
      備考: ${ this.memo + ret}
      `

      mailer(params).then(req => {
        console.log("sended: ", req)
      })
      .catch(err => {
        console.log("fuck: ", err)
      })
      .finally(req => {
        console.log("end: ", req)
      })

      this.clearForm()
    }
  }
}
</script>

<style scoped>
.container {
  text-align: center;
  background-color: rgba(255, 255, 255, 0);
}

.button_wrapper {
  width: 25%;
  margin-left: 38%;
  margin-right: 38%;
}

.select-form {
  margin-top: 60px;

  width: 60%;
  margin-left: 20%;
  margin-right: 20%;
}

.select-form button{
  margin-top: 20px;
  background-color: rgb(105, 105, 105, 0.5);
}

.wrapper {
  text-align: left;
}

#overlay{
  z-index:1;

  position:fixed;
  top:0;
  left:0;
  width:100%;
  height:100%;
  background-color:rgba(0,0,0,0.5);

  display: flex;
  align-items: center;
  justify-content: center;
}

#content{
  z-index:2;
  width:50%;
  padding: 1em;
  background:#fff;
}


</style>
