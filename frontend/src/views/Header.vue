<template>
  <header>
    <ol>
      <li v-on:click="checkLogin"><router-link to="/products">상품</router-link></li>
      <li v-on:click="checkLogin"><router-link to="/cart">장바구니</router-link></li>
      <li v-if="$store.state.userId" class="ordered-nav">주문내역</li>
      <li v-if="$store.state.userId" v-on:click="logout" class="logout-nav">로그아웃</li>
      
    </ol>
  </header>
</template>

<script>
import axios from 'axios';

export default {
  methods: {
    checkLogin() {
      if(!this.$store.state.userEmail) {
        alert('로그인 이후 이용해주세요.');
        this.$router.push({name: 'home'});
      }
    },
    
    logout() {
      axios.delete('http://localhost:3000/api/auth/logout', {withCredentials: true})
        .then((res) => {
          if (res.data === false) {
            const data = {
              id: null,
              email: null,
              name: null,
            }
            this.$store.commit('setUser', data);
            localStorage.removeItem('allow-access');
            this.$router.push({name: 'home'});
          } else {
            alert('로그아웃 실패');
          }
        })
        .catch((err) => {
          alert('로그아웃 에러');
        })
    }
  },
}
</script>

<style scoped>
header {
  background-color: white;
  width: 100%;
  height: 80px;
  position: fixed;;
}

header ol {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: space-around;
  line-height: 80px;
}

header ol .logout-nav, ordered-nav {
  cursor: pointer;
}

a {
  text-decoration: none;
  color: black;
}

</style>