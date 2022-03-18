<template>
    <Navbar/>
  <div id="nav"> 
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
   </div> 
  <router-view/>
</template>
<script>
import Navbar from "./components/Navbar.vue";
import axios from "axios"
export default {
  name: 'App',
  components: { Navbar },
   data() {
     return {
       baseURL: "https://my-fullstack-pject1.herokuapp.com/",
       prodcuts: [],
       categories: []
     }
   },
    methods: {
      async fetchData() {
        await axios.get(this.baseURL + "category")
        .then(res => {
          this.categories = res.data
        }).catch((err) => console.log('err', err));
      }
    },
    mounted() {
    }
  };
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
