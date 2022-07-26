<template>
  <div class="container">
    <div class=""></div>
  </div>
</template>

<script>


export default {
  data() {
    return {
      productsData: [
        {id: 1, name: '아디다스 신발', price: 150000},
        {id: 2, name: '나이키 신발', price: 90000},
        {id: 3, name: '반스 신발', price: 99000},
        {id: 4, name: '뉴발란스 신발', price: 88000},
        {id: 5, name: '폴로 신발', price: 12000},
      ]
    }
  }
}
</script>

<style scoped>
.container {
  height: 100vh;
  background-color:rgb(64,113,182);
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>