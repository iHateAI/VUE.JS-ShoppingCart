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
      <p class="join-ask">계정이 없으신가요? <span class="show-join-modal" @click="showJoinModal">Sign Up</span></p>
    </div>

    <div class="join-modal" v-if="isClickJoin">
      <div class="join-box">
        <div class="cancel-box">
          <img class="back-icon" src="@/assets/images/backArrow.png" alt="뒤로가기 버튼" @click="hideJoinModal">
        </div>
        <div class="join-form">
          <div class="input-box">
            <p>
              <div class="title-box">
                <h1>Join</h1>
              </div>
              <input type="text" placeholder="아이디" class="input-join-id">
              <input type="password" placeholder="비밀번호" class="input-join-pw">
              <input type="password" placeholder="비밀번호 확인" class="input-join-pwcheck">
              <input type="text" placeholder="이름" class="input-join-name">
            </p>
            <p class="join-btn-box"><button>Join</button></p>
          </div>
          
        </div>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  data() {
    return {
      isClickJoin: false,
    }
  },
  methods: {
    showJoinModal: function() {
      this.isClickJoin = true;
    },
    hideJoinModal: function() {
      this.isClickJoin = false;
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

.container .login-box {
  background-color: white;
  width: 400px;
  height: 450px;
  border-radius: 10px 10px;
  border:2px solid #ddd;
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

.container .login-box .input-box input {
  width: 300px;
  height: 50px;
  border: none;
  border-bottom: 1px solid rgb(31, 231, 58);
  outline: none;
  display: block;
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

.container .login-box .join-ask {
  text-align: center;
  font-weight: bolder;
}

.container .login-box .join-ask .show-join-modal {
  cursor: pointer;
  border-bottom: 1px solid blue;
}

.container .join-modal {
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
}

.container .join-modal .join-box {
  width: 500px;
  height: 550px;
  background: white;
  border-radius: 10px;
  padding: 30px; 
}

.container .join-modal .join-box .input-box {
  border-radius: 10px 10px;
  border:2px solid #ddd;
  padding: 40px;
}

.container .join-modal .join-box .input-box .title-box {
  display: flex;
  justify-content: center;
  margin-bottom: 40px;
}

.container .join-modal .join-box .join-form .input-box input{
  width: 300px;
  height: 50px;
  border: none;
  border-bottom: 1px solid rgb(31, 231, 58);
  outline: none;
  display: block;
}

.container .join-modal .join-box .join-form .input-box .join-btn-box {
  text-align: center;
  margin-top: 40px;
}

.container .join-modal .join-box .join-form .input-box .join-btn-box button {
  width: 300px;
  height: 50px;
  border-radius: 10px 10px;
  border: none;
  background-color: black;
  margin-bottom: 30px;
  color: white;
  cursor: pointer;
  font-size: 20px;
}

.container .join-modal .join-box .cancel-box {
  width: 100%;
  text-align: right;
}

.container .join-modal .join-box .cancel-box .back-icon {
  width: 30px;
  cursor: pointer;
}

.container .join-modal .join-box .join-form {
  width: 100%;
  height: 500px;
  display: flex;
  justify-content: center;

}


</style>