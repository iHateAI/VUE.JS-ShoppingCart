<template>
  <div class="container">
    <div class="login-box">
      <div class="title-box">
        <h1>Login</h1>
      </div>
      <div class="input-box">
        <p>
          <input type="text" placeholder="ID" class="input-id" v-model="email">
          <input type="password" placeholder="Password" class="input-pw" v-model="password">
        </p>
      </div>
      <p class="btn-box"><button @click="login">Login</button></p>
      <p class="join-ask">{{$store.state.abc}}계정이 없으신가요? <span class="show-join-modal" @click="showJoinModal">Sign Up</span></p>
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
              <input type="text" placeholder="이메일" class="input-join-id" v-model="inputEmail" />
              <input type="password" placeholder="비밀번호" class="input-join-pw" v-model="inputPw" />
              <input type="password" placeholder="비밀번호 확인" class="input-join-pwcheck" v-model="inputPwCheck" />
              <input type="text" placeholder="이름" class="input-join-name" v-model="inputName" />
            </p>
            <p class="join-btn-box"><button @click="registerUser">Join</button></p>
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
      isClickJoin: false,
      email: '',
      password: '',
      inputEmail: '',
      inputPw: '',
      inputPwCheck: '',
      inputName: '',
    }
  },
  methods: {
    showJoinModal: function() {
      this.isClickJoin = true;
    },

    hideJoinModal: function() {
      this.isClickJoin = false;
    },
    
    login: function() {
      const data = {
        email: this.email,
        password: this.password,
      }
      axios.post('http://localhost:3000/api/auth/login', data, {withCredentials: true})
        .then((res) => {
          if (res.status === 200 && res.data.email) {
            const data = {
              id: res.data.id,
              email: res.data.email,
              name: res.data.name,
            }
            this.$store.commit('setUser', data);
            localStorage.setItem('allow-access', true);
            this.$router.push({name: 'products'});
          } else {
            alert('로그인 실패');
          }
        })
        .catch((err) => console.log(err));
    },

    registerUser: function() {
      if (this.inputEmail && this.inputPw && this.inputPwCheck && this.inputName) {
        //입력값에 대한 체크
        const isPermitted = this.checkRegisterInfo(this.inputEmail, this.inputPw, this.inputPwCheck, this.inputName);

        //사용자 등록
        if (isPermitted) {
          const data = {
            email: this.inputEmail,
            password: this.inputPw,
            name: this.inputName,
          };

          //axios 사용자 정보 등록
          axios.post('http://localhost:3000/api/auth/register', data)
            .then((res) => {
              alert(res.data);
              this.$router.push({name: 'home'});
            }).catch((err) => {
              if (err.response.status === 404) {
                alert(err.response.data);
              }
            });
        }
      } else {
        alert('네 항목을 모두 입력해주세요!');
      }
    },

    checkRegisterInfo: function(email, pw, pwCheck, name) {
      //정규식
      const regEmail = /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/;
      const regPassword = /^[A-Za-z0-9]{6,20}$/;
      const regName = /[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/;

      // 입력 허가 유무
      let isPermitted = false; 

      if (!regEmail.test(email)) {
        alert('잘못된 이메일 형식입니다.');
        this.inputEmail = '';
      } else if (email.length > 20) {
        alert('이메일은 20자 이하로 입력하세요.');
        this.inputEmail = '';
      } else if (!regPassword.test(pw)) {
        alert('비밀번호는 영문, 숫자로 6자~20자 이내로 입력하세요.');
        this.inputPw = '';
        his.inputPwCheck = '';
      } else if (pw !== pwCheck) {
        alert('비밀번호와 확인 비밀번호가 일치하지 않습니다.');
        this.inputPwCheck = '';
      } else if (!regName.test(name)) {
        alert('이름은 한글만 입력 가능합니다.');
        this.inputName = '';
      } else if (name.length > 5) {
        alert('이름은 5자 이하로 입력하세요.');
        this.inputName = '';
      } else {
        isPermitted = true;
      }
      return isPermitted;
    }
  },

  created() {
    this.$store.commit('allowLoginView');
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