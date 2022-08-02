<template>
  <div class="container">
    <div class="cart-list">
      <table class="cart-table">
        <thead>
          <tr>
            <th>번호</th>
            <th>상품명</th>
            <th>사이즈</th>
            <th>판매가</th>
            <th>수량</th>
            <th>주문관리</th>
          </tr>
        </thead>
        <tbody>
          <tr :key="order.id" v-for="(order, idx) in ordersData">
            <td>{{idx + 1}}</td>
            <td>
              <div class="order-detail">
                <img v-bind:src="order.imgUrl" class="order-img">
                <p class="order-desc">
                  {{order.brand}} {{order.name}}
                </p>
              </div>
            </td>
            <td>M</td>
            <td>{{order.price.toLocaleString()}}</td>
            <td>3</td>
            <td><button id="delete-btn">삭제</button></td>
          </tr>
        </tbody>
      </table>
      <button id="purchase-btn">
        주문하기
      </button>
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
  display: flex;
  justify-content: center;
  align-items: center;
}

.container .cart-list {
  width: 1500px;
  height: 600px;
  text-align: center;
}

.container .cart-list .cart-table {
  width: 100%;
  text-align: center;
  border: 1px solid #ddd;
}

.container .cart-list #purchase-btn {
  width: 200px;
  height: 50px;
  border-radius: 10px 10px;
  border: none;
  background-color: black;
  margin-top: 30px;
  margin-bottom: 30px;
  color: white;
  cursor: pointer;
  font-size: 20px;
  font-family: GangwonEdu_OTFBoldA;
}

.container .cart-list .cart-table .order-detail .order-img {
  width: 100px;
  height: 125px;
  vertical-align: middle;
}

.container .cart-list .cart-table .order-detail .order-desc {
  width: 350px;
  height: 125px;
  display: inline-block;
}

.container .cart-list .cart-table #delete-btn {
  margin: 15px;
  border: none;
  background-color: rgb(231, 172, 124);
  width: 100px;
  height: 30px;
  border-radius: 50px;
  font-weight: 900;
  color: rgb(136, 24, 39);
  cursor: pointer;
  
}


/* .container .cart-list .cart-item {
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
} */
</style>