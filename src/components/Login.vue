<template>
  <div class="login">
    <h3>Sign In</h3>
    <input type="text" v-model="email" placeholder="Email"><br />
    <input type="password" v-model="password" placeholder="password"><br />
    <button v-on:click="signIn">Connection</button>
    <p>Dont have an account ? Create one</p>
    <router-link to="/signup">Create Account</router-link>
  </div>
</template>

<script>
import firebase from 'firebase'
export default {
  name: 'login',
  data: function () {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    signIn: function () {
      firebase.auth().signInWithEmailAndPassword(this.email, this.password).then(
        (user) => {
          this.$router.replace('dashboard')
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
