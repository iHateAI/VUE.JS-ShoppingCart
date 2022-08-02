<template>
  <div class="container">
    <div class="cart-list">
      <div class="cart-item" :key="order.id" v-for="order in ordersData">
        <img v-bind:src="order.imgUrl" class="product-img">
        <div class="item-desc">
          {{ order.brand }}, {{ order.name }}
        </div>
      </div>
    </div>
    
  </div>
</template>

<script>
export default {
  data() {
    return {
      ordersData: [
        {id: 1, brand: '커버낫', name: '에센셜 쿨 코튼 2-PACK 티셔츠', price: 49000, imgUrl: `https://image.msscdn.net/images/goods_img/20210316/1848166/1848166_11_125.jpg`},
        {id: 2, brand: '페플', name: '스테이 얼론 + 보드마스터 그래픽', price: 53800, imgUrl: `https://image.msscdn.net/images/goods_img/20210427/1921901/1921901_4_125.jpg`},
        {id: 3, brand: '예일', name: '2 TONE ARCH TEE', price: 39000, imgUrl: `https://image.msscdn.net/images/goods_img/20210312/1841764/1841764_3_125.jpg`},
        
      ],
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

.container .cart-list {
  width: 1500px;
  height: 750px;
  border: 1px solid #ddd;
}

.container .cart-list .cart-item {
  width: 498px;
  height: 150px;
  display: inline-block;
  border: 1px solid #ddd;
  overflow: hidden;
}

.container .cart-list .cart-item .product-img {
  width: 100px;
  height: 125px;
  vertical-align: middle;
}

.container .cart-list .cart-item .item-desc {
  width: 350px;
  height: 125px;
  display: inline-block;
  background-color: white;
  vertical-align: middle;
  float: right;
}
</style>