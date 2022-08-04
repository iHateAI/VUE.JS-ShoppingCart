<template>
  <header>
    <ol>
      <li><router-link to="/products">상품</router-link></li>
      <li><router-link to="/cart">장바구니</router-link></li>
    </ol>
  </header>
</template>

<script>
export default {
  
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

a {
  text-decoration: none;
  color: black;
}

</style>