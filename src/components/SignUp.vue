<template>
  <div class="sign-up">
    <h3>Sign Up</h3>
    <input type="text" v-model="email" placeholder="Email"><br />
    <input type="password" v-model="password" placeholder="password"><br />
    <button v-on:click="signUp">Sign Up</button>
    <p>Create Account</p>
    <router-link to="/">Login</router-link>
  </div>
</template>

<script>
import firebase from 'firebase'

export default {
  name: 'signUp',
  data: function () {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    signUp: function () {
      firebase.auth().createUserWithEmailAndPassword(this.email, this.password).then(
        function (user) {
          alert('Your account has been created !')
        },
        function (err) {
          alert('Oops. ' + err.message)
        }
      )
    }
  }
}
</script>

<style scoped>
</style>
