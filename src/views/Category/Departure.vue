<template>
  <div>
    <h1>Depature</h1>
  </div>
</template>
<script>
import {onBeforeRouteLeave} from 'vue-router'
export default {
  setup(){
    onBeforeRouteLeave((to, from)=>{
      const answer = window.confirm(
        'Are you sure you want to leave? Our products are super awesome!'
      )
      if(!answer) return false
    })
  }
}
</script>