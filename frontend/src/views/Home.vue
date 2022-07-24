<template>
  <div>
    <h3 v-if="isLogin">회원: {{ username }} 데이터로 장바구니 생성</h3>
    <h3 v-else>비회원: 쿠키로 장바구니 생성</h3>
  </div>
</template>

<script>
export default {
  
}
</script>

<style scoped>

</style>