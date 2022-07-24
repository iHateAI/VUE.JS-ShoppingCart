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
      isLogin: true,
      username: 'ㅇㅇ',
    }
  }
}
</script>

<style scoped>

</style>