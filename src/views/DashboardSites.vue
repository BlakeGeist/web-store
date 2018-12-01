<template>
  <div class="dashboard-sites">
    <router-link to="/dashboard">Dashboard</router-link>
    <form @submit.prevent="createSite">
      <input v-model="site.name" class="dashboard-sites-name" placeholder="Name" type="text"/>
      <input v-model="site.address" class="dashboard-sites-address" placeholder="Address" type="text"/>
      <input v-model="site.slug" class="dashboard-sites-slug" placeholder="Slug" type="text"/>
      <button>Submit</button>
    </form>
    <div>
      <table>
        <tr>
          <th>Name</th>
          <th>Address</th>
          <th>Slug</th>
        </tr>
        <tr v-for="(site) in sites">
          <td>{{site.name}}</td>
          <td>{{site.address}}</td>
          <td>{{site.slug}}</td>
        </tr>
      </table>
    </div>
  </div>
</template>
<script>

import firebase from 'firebase'

const db = firebase.firestore()

export default {
  name: 'dashboardSites',
  data: function () {
    return {
      site: {
        address: '',
        name: '',
        slug: ''
      },
      sites: []
    }
  },
  methods: {
    createSite: function () {
      db.collection('sites').doc(this.site.slug).set(this.site)
        .then(function () {
          console.log(site)
          console.log('Document successfully written!')
        })
        .catch(function (error) {
          console.error('Error writing document: ', error)
        })
    }
  },
  beforeCreate () {
    var query = db.collection('sites').orderBy('name', 'asc')

    query.onSnapshot(querySnapshot => {
      this.sites = []
      querySnapshot.forEach((doc) => {
        this.sites.push(doc.data())
      })
    }, err => {
      console.log(`Encountered error: ${err}`)
    })
  }
}

</script>
<style scoped>
</style>
