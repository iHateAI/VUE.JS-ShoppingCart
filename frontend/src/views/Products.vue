<template>
  <div class="container">
    <div class="product-list">
      <div class="product-item" v-for="product in $store.state.productsData" :key="product.id">
        <img v-bind:src="product.imgurl" class="product-img">
        <div class="product-info">
          <h3 id="productBrand">{{product.brand}}</h3>
          <h5 id="productName">{{product.name}}</h5>
          <h4 id="productPrice">{{product.price.toLocaleString()}}원</h4>
          <div id="productSizes">
            <span>S <input type="radio" name="size" value="s"></span>
            <span>M <input type="radio" name="size" value="m"></span>
            <span>L <input type="radio" name="size" value="l"></span>
          </div>
          <button id="submit-btn" v-on:click="test">장바구니에 담기</button>
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
      sizeValue: 's',
    }
  },

  methods: {
    test: function() {
      if (this.sizeValue) {
        alert(this.sizeValue);
      } else {
        alert('사이즈 입력해');
      }
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
  height: 350px;
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

.container .product-list .product-item .product-info #productSizes {
  margin-top: 13px;
  width: 100%;
  display: flex;
  justify-content: space-around;
}

.container .product-list .product-item .product-info #submit-btn {
  margin: 15px;
  border: none;
  background-color: rgb(231, 172, 124);
  width: 200px;
  height: 30px;
  border-radius: 50px;
  font-weight: 900;
  color: rgb(136, 24, 39);
  cursor: pointer;
}

</style>