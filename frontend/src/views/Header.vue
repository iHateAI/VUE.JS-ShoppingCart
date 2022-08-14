<template>
  <header>
    <ol>
      <li v-on:click="checkLogin"><router-link to="/products">상품</router-link></li>
      <li v-on:click="checkLogin"><router-link to="/cart">장바구니</router-link></li>
      <li v-if="$store.state.userToken" v-on:click="logout" class="logout-nav">로그아웃</li>
      
    </ol>
  </header>
</template>

<script>
import axios from 'axios';

export default {
  methods: {
    checkLogin() {
      this.$store.commit('loginCheck');
    },
    
    logout() {
      axios.delete('http://localhost:3000/api/auth/logout', {withCredentials: true})
        .then((res) => {
          if (res.data === false) {
            const data = {
              id: null,
              email: null,
              name: null,
              token: null,
            }
            this.$store.commit('setUser', data);
            this.$router.push({name: 'home'});
          }
        })
        .catch((err) => {
          alert('에러남');
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

header ol .logout-nav {
  cursor: pointer;
}

a {
  text-decoration: none;
  color: black;
}

</style>