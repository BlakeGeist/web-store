<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>

import firebase from 'firebase'
require("firebase/firestore");
let app
var config = {
  apiKey: 'AIzaSyC4dIjnGFBM1-l7eK1704wvMSqDFCQ88Eo',
  authDomain: 'web-store-7945b.firebaseapp.com',
  databaseURL: 'https://web-store-7945b.firebaseio.com',
  projectId: 'web-store-7945b',
  storageBucket: 'web-store-7945b.appspot.com',
  messagingSenderId: '994328374920'
}
firebase.initializeApp(config)
const firestore = firebase.firestore();
const settings = {timestampsInSnapshots: true};
firestore.settings(settings);

export default {
  name: 'App'
}

</script>

<style lang="less">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
