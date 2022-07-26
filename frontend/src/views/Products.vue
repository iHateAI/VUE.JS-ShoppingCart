<template>
  <div class="container">
    <div class="product-list">
      <div class="product-item" v-for="product in productsData" :key="product.id">
        <ol>
          <li>{{ product.name }}</li>
          <li>{{ product.price }}</li>
        </ol>
      </div>
    </div>
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
li {
  list-style: none;
}

.container {
  height: 100vh;
  background-color:rgb(64,113,182);
  display: flex;
  justify-content: center;
  align-items: center;
}

.container .product-list {
  width: 1000px;
  height: 600px;
  background-color: white;
}

.container .product-list .product-item {
  background-color: orange;
  border: 1px solid black;
  display: inline-block;
  width: 400px;
}


</style>