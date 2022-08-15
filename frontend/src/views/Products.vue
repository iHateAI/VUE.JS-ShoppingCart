<template>
  <div class="container">
    <div class="product-list">
      <div class="product-item" v-for="product in $store.state.productsData" :key="product.id">
        <img v-bind:src="product.imgurl" class="product-img">
        <div class="product-info">
          <h3 id="productBrand">{{product.brand}}</h3>
          <h5 id="productName">{{product.name}}</h5>
          <h4 id="productPrice">{{product.price.toLocaleString()}}원</h4>
          <button id="submit-btn" v-on:click="addToCarts({
            id: product.id,
            brand: product.brand,
            name: product.name,
            size: 'Free',
            price: product.price,
            imgurl: product.imgurl,
          })">장바구니에 담기</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      
    }
  },

  methods: {
    addToCarts(productData) {
      const userId = this.$store.state.userId;
      const data = {userId, ...productData};
      axios.post('http://localhost:3000/api/carts', data, {withCredentials: true})
        .then((res) => {
          console.log(res.data);
          alert('상품이 장바구니에 추가되었습니다.');
        })
        .catch((err) => {
          alert(err);
        });
    }
  },
  
  created() {
    axios.get('http://localhost:3000/api/products')
      .then((res) => {
        this.$store.state.productsData = res.data;
      }).catch((err) => {
        console.error(err);
      });
  }
}
</script>

<style scoped>
li {
  list-style: none;
}

.container {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

.container .product-list {
  width: 70%;
  text-align: center;
}

.container .product-list .product-item {
  border: 1px solid #ddd;
  display: inline-block;
  width: 250px;
  height: 320px;
  min-width: 200px;
  font-size: 14px;
}

.container .product-list .product-item .product-img {
  margin-top: 10px;
}

.container .product-list .product-item .product-info #productBrand {
  margin-top: 10px;
  border-bottom: 1px solid rgb(219, 114, 114);
  display: inline-block
}

.container .product-list .product-item .product-info #productName {
  margin-top: 13px;
}

.container .product-list .product-item .product-info #productPrice {
  margin-top: 10px;
}

.container .product-list .product-item .product-info #submit-btn {
  margin: 15px;
  border: none;
  background-color: rgb(0, 0, 0);
  width: 200px;
  height: 30px;
  border-radius: 50px;
  font-weight: 900;
  color: rgb(255, 255, 255);
  cursor: pointer;
}

</style>