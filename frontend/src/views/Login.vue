<template>
  <div class="container">
    <div class="login-box">
      <div class="title-box">
        <h1>Login</h1>
      </div>
      <div class="input-box">
        <p>
          <input type="text" placeholder="ID" class="input-id">
          <input type="password" placeholder="Password" class="input-pw">
        </p>
      </div>
      <p class="btn-box"><button>Login</button></p>
      <p class="join-box">계정이 없으신가요? <span><a href="#">Sign Up</a></span></p>
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
  background-color:rgb(64,113,182);
  display: flex;
  justify-content: center;
  align-items: center;
}

.container .login-box {
  background-color: white;
  width: 400px;
  height: 450px;
  border-radius: 10px 10px;
  box-shadow: 5px 5px 5px;
}

.container .login-box .title-box {
  height: 100px;
  border-bottom: solid 2px rgb(149, 236, 50);
}

.container .login-box .title-box h1 {
  text-align: center;
  line-height: 100px;
  font-size: 40px;
}

.container .login-box .input-box {
  display: flex;
  justify-content: center;
  margin: 40px;
}

.container .login-box .btn-box {
  text-align: center;
}

.container .login-box .btn-box button {
  width: 300px;
  height: 50px;
  border-radius: 10px 10px;
  border: none;
  background-color: rgb(64,113,182);
  margin-bottom: 30px;
  color: white;
  cursor: pointer;
  font-size: 20px;
}

.container .login-box .join-box {
  text-align: center;
  font-weight: bolder;
}

input {
  width: 300px;
  height: 50px;
  border: none;
  border-bottom: 1px solid rgb(31, 231, 58);
  outline: none;
  display: block;
}



</style>