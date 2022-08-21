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
                <img v-bind:src="order.imgurl" class="order-img">
                <p class="order-desc">
                  {{order.brand}} {{order.name}}
                </p>
              </div>
            </td>
            <td>{{order.size}}</td>
            <td>{{order.price.toLocaleString()}}</td>
            <td>{{order.count}}</td>
            <td><button id="delete-btn" @click="deleteProduct(order.id)">삭제</button></td>
          </tr>
        </tbody>
      </table>
      <button id="order-btn" @click="showOrderModal">
        주문하기
      </button>
    </div>

    <div class="order-modal" v-if="isClickOrder">
      <div class="order-box">
        <div class="order-confirm">
          <p>주문을 완료하시겠습니까?</p>
          <div class="order-btn-box">
            <button class="done-btn" @click='addToCarts'>주문완료</button>
            <button class="cancel-btn" @click="hideOrderModal">취소</button>
          </div>
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
      ordersData: [],
      isClickOrder: false,
    }
  },
  methods: {
    showOrderModal: function() {
      this.isClickOrder = !this.isClickOrder;
    },

    hideOrderModal: function() {
      this.isClickOrder = !this.isClickOrder;
    },

    addToCarts: function() {
      if (ordersData.length < 1) {
        alert('장바구니가 비어있습니다.');
        this.$router.push({name: 'products'});
      } else {
        const userId = this.$store.state.userId;
        const summary = `${ordersData[0].brand} ${ordersData[0].name} 외 ${ordersData.length - 1} 건`;
        
        const data = {
          userId,
          summary,

        }
        axios.post(`http://localhost:3000/api/history`, data, {withCredentials: true})
          .then(res => console.log(res))
          .catch(err => console.log(err));
      }
      
    },

    getCartsInfo: function() {
      const userId = this.$store.state.userId;
      axios.get(`http://localhost:3000/api/carts/${userId}`, {withCredentials: true})
        .then(res => {
          const data = res.data;
          this.ordersData = data;
        })
        .catch(err => {
          console.log(err);
        })
    },

    deleteProduct: function(id) {
      axios.delete(`http://localhost:3000/api/carts/${id}`, {withCredentials: true})
        .then(res => {
          alert(res.data.message);
          try {
            this.getCartsInfo();
          } catch (err) {
            console.log('리스트 업데이트 실패');
          }
        })
        .catch(err => alert(res.data.message));
      
    }
  },
  created() {
    const userId = this.$store.state.userId;
    axios.get(`http://localhost:3000/api/carts/${userId}`, {withCredentials: true})
      .then(res => {
        const data = res.data;
        this.ordersData = data;
      })
      .catch(err => {
        console.log(err);
      })
  },

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

.container .cart-list #order-btn {
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
  background-color: black;
  width: 100px;
  height: 30px;
  border-radius: 50px;
  font-weight: 900;
  color: white;
  cursor: pointer;
}

.container .order-modal {
  width: 100%;
  height: 100%;
  position: fixed;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
}

.container .order-modal .order-box {
  width: 500px;
  height: 250px;
  background-color: white;
  border-radius: 10px;
  padding: 30px; 
  display: flex;
  justify-content: center;
  align-items: center;
}

.container .order-modal .order-box .order-confirm p {
  margin-top: 50px;
  text-align: center;
  font-size: 20px;
}

.container .order-modal .order-box .order-confirm .order-btn-box {
  display: flex;
  justify-content: center;
  margin-top: 60px;
}

.container .order-modal .order-box .order-confirm .order-btn-box .done-btn {
  border: none;
  color: white;
  background-color: black;
  width: 150px;
  height: 50px;
  cursor: pointer;
}

.container .order-modal .order-box .order-confirm .order-btn-box .cancel-btn {
  border: none;
  color: white;
  background-color: black;
  width: 150px;
  height: 50px;
  margin-left: 30px;
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