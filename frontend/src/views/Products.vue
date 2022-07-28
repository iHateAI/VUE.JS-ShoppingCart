<template>
  <div class="container">
    <div class="product-list">
      <div class="product-item" v-for="product in productsData" :key="product.id">
        <img v-bind:src="product.imgUrl" class="product-img">
        <div class="product-info">
          <h3 id="productBrand">{{product.brand}}</h3>
          <h5 id="productName">{{product.name}}</h5>
          <h4 id="productPrice">{{product.price}}원</h4>
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


export default {
  data() {
    return {
      productsData: [
        {id: 1, brand: '커버낫', name: '에센셜 쿨 코튼 2-PACK 티셔츠', price: 49000, imgUrl: `https://image.msscdn.net/images/goods_img/20210316/1848166/1848166_11_125.jpg`},
        {id: 2, brand: '페플', name: '스테이 얼론 + 보드마스터 그래픽', price: 53800, imgUrl: `https://image.msscdn.net/images/goods_img/20210427/1921901/1921901_4_125.jpg`},
        {id: 3, brand: '예일', name: '2 TONE ARCH TEE', price: 39000, imgUrl: `https://image.msscdn.net/images/goods_img/20210312/1841764/1841764_3_125.jpg`},
        {id: 4, brand: '무신사 스탠다드', name: '릴렉스 핏 크루 넥 반팔 티셔츠', price: 11900, imgUrl: `https://image.msscdn.net/images/goods_img/20190327/996177/996177_3_125.jpg`},
      ],
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