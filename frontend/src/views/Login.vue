<template>
  <div class="container">
    <div class="login-box">
      <div class="title-box">
        <h1>Login</h1>
      </div>
      <div class="input-id">
        <input type="text" placeholder="ID">
      </div>
      <div class="input-pw">
        <input type="password" placeholder="Password">
      </div>
      <p><button>Sign In</button></p>
      <p>계정이 없으신가요<span><a href="#">Sign Up</a></span></p>
    </div>
  </div>
</template>

<script>
export default {
  
}
</script>

<style scoped>
.container {
  height: 100vh;
  background-color: green;
  display: flex;
  justify-content: center;
  align-items: center;
}

.container .login-box {
  background-color: white;
  width: 400px;
  height: 500px;
  border-radius: 10px 10px;
}

.container .login-box .title-box {
  height: 100px;
  border-bottom: solid 2px rgb(149, 236, 50);
}

.container .login-box .title-box h1 {
  text-align: center;
  line-height: 100px;
}

.container .login-box .input-id, .input-pw {
  text-align: center;
  margin: 30px;
}


input {
  width: 200px;
  height: 50px;
  border: none;
  border-bottom: 1px solid rgb(109, 90, 90);
}



</style>