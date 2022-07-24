<template>
  <div>
    <Header />
    <router-view />
  </div>
</template>

<script>
import Header from './Header.vue'

export default { 
  components: {
    Header,
  },
  data() {
    return {
      isLogin: false,
      username: '',
    }
  }
}
</script>

<style scoped>

</style>