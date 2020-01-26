<template>
  <div class="area">
  <script src="https://kit.fontawesome.com/73ecc5d3cc.js" crossorigin="anonymous"></script>
  <tab />
  <nuxt class="nuxt" />
  <ul class="circles">
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
  </ul>
</div>
</template>

<script>
import Tab from '~/components/Tab.vue'

export default {
  components: {
    Tab
  }
}
</script>
<style>
html {
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
  Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

.container {
  width: 60%;
  font-size: 17px;
  font-family: 'Segoe UI';
  min-height: 80vh;
  padding-bottom: 10vh;
  justify-content: center;
  align-items: center;
  text-align: center;
  background: rgba(255,255, 255, 1);
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}

.button--green {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
}

.button--green:hover {
  color: #fff;
  background-color: #3b8070;
}

.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}

.button--grey:hover {
  color: #fff;
  background-color: #35495e;
}

@import url('https://fonts.googleapis.com/css?family=Exo:400,700');

.area {
  background: #ffffff;
  width: 100%;
  min-height: 100vh;
  z-index: 1;
}

.nuxt {
  z-index: 2;
}

.circles{
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  min-height: 150vh;
  /* overflow: hidden; */
}

.circles li{
  position: absolute;
  display: block;
  list-style: none;
  width: 20px;
  height: 20px;
  background: #00d1b2;
  animation: animate 25s linear infinite;
  bottom: -150px;
}

.circles li:nth-child(1){
  left: 25%;
  width: 80px;
  height: 80px;
  animation-delay: 0s;
}


.circles li:nth-child(2){
  left: 10%;
  width: 20px;
  height: 20px;
  animation-delay: 2s;
  animation-duration: 12s;
}

.circles li:nth-child(3){
  left: 70%;
  width: 20px;
  height: 20px;
  animation-delay: 4s;
}

.circles li:nth-child(4){
  left: 40%;
  width: 60px;
  height: 60px;
  animation-delay: 0s;
  animation-duration: 18s;
}

.circles li:nth-child(5){
  left: 65%;
  width: 20px;
  height: 20px;
  animation-delay: 0s;
}

.circles li:nth-child(6){
  left: 70%;
  width: 110px;
  height: 110px;
  animation-delay: 3s;
}

.circles li:nth-child(7){
  left: 35%;
  width: 150px;
  height: 150px;
  animation-delay: 7s;
}

.circles li:nth-child(8){
  left: 50%;
  width: 25px;
  height: 25px;
  animation-delay: 3s;
  animation-duration: 45s;
}

.circles li:nth-child(9){
  left: 20%;
  width: 15px;
  height: 15px;
  animation-delay: 2s;
  animation-duration: 35s;
}

.circles li:nth-child(10){
  left: 90%;
  width: 150px;
  height: 150px;
  animation-delay: 0s;
  animation-duration: 18s;
}

.circles li:nth-child(11){
  left: 25%;
  width: 150px;
  height: 150px;
  animation-delay: 0s;
  animation-duration: 8s;
}

.circles li:nth-child(12){
  left: 15%;
  width: 50px;
  height: 50px;
  animation-delay: 5s;
  animation-duration: 5s;
}

.circles li:nth-child(13){
  left: 5%;
  width: 10px;
  height: 10px;
  animation-delay: 0s;
  animation-duration: 11s;
}

.circles li:nth-child(14){
  left: 5%;
  width: 120px;
  height: 120px;
  animation-delay: 0s;
  animation-duration: 21s;
}

.circles li:nth-child(15){
  left: 30%;
  width: 150px;
  height: 150px;
  animation-delay: 1s;
  animation-duration: 11s;
}

.circles li:nth-child(16){
  left: 95%;
  width: 100px;
  height: 100px;
  animation-delay: 3s;
  animation-duration: 11s;
}

.circles li:nth-child(17){
  left: 80%;
  width: 20px;
  height: 20px;
  animation-delay: 1s;
  animation-duration: 6s;
}
.circles li:nth-child(18){
  left: 85%;
  width: 50px;
  height: 50px;
  animation-delay: 1s;
  animation-duration: 11s;
}

.circles li:nth-child(19){
  left: 85%;
  width: 50px;
  height: 50px;
  animation-delay: 0s;
  animation-duration: 4s;
}



@keyframes animate {

  0%{
    transform: translateY(0) rotate(0deg);
    opacity: 1;
    border-radius: 0;
  }

  100%{
    transform: translateY(-1000px) rotate(720deg);
    opacity: 0;
    border-radius: 50%;
  }

}


</style>
