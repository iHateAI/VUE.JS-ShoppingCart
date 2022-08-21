<template>
  <div class="container">
    <div class="order-history">
      <table class="order-table">
        <thead>
          <tr>
            <th>일자</th>
            <th>상품 정보</th>
            <th>가격</th>
            <th>상태</th>
            <th>내역관리</th>
          </tr>
        </thead>
        <tbody>
          <tr :key="idx" v-for="(data, idx) in historyDatas">
            <td>{{data.date}}</td>
            <td>{{data.products}}</td>
            <td>{{data.price}}</td>
            <td>배송 중 (10년 후 도착)</td>
            <td><button id="delete-btn">삭제</button></td>
          </tr>
        </tbody>
      </table>
    </div>
  </div> 
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      historyDatas: [
        {date: '2022-08-13', products: '청바지 외 3건', price: 432200},
        {date: '2022-08-13', products: '청바지 외 3건', price: 432200},
        {date: '2022-08-13', products: '청바지 외 3건', price: 432200},
        {date: '2022-08-13', products: '청바지 외 3건', price: 432200},
        {date: '2022-08-13', products: '청바지 외 3건', price: 432200}
      ],
    }
  },
  methods: {
    
  },
  created() {

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

.container .order-history {
  width: 1500px;
  height: 600px;
  text-align: center;
}

.container .order-history .order-table {
  width: 100%;
  text-align: center;
  border: 1px solid #ddd;
  border-collapse: separate;
  border-spacing: 0 50px;
}

.container .order-history .order-table thead {
  font-size: 30px;
}

.container .order-history .order-table #delete-btn {
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

</style>