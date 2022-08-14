import router from '@/router';
import { createStore } from 'vuex'
import axios from 'axios';
import { ssrContextKey } from 'vue';

export default createStore({
  state: { // 데이터
    productsData: [],
    userId: '',
    userEmail: '', 
    userName: '',
  },

  getters: {
  },
  
  mutations: { //
    setUser: (state, payload) => {
      state.userId = payload.id;
      state.userEmail = payload.email;
      state.userName = payload.name;
    },

    loginCheck: (state) => {
      if(!state.userId) {
        router.push({
          name: 'home'
        })
        .catch(err => console.log(err));
      }
    },

    allowLoginView: (state) => {
      const allowAccess = localStorage.getItem('allow-access');
      if(allowAccess) {
        router.push({
          name: 'products'
        })
        .catch(err => console.log(err));
      }
    },
  },

  actions: {
    getUserInfo: ({commit, state}) => {
      const allowAccess = localStorage.getItem('allow-access');
      if (allowAccess) {
        axios.post('http://localhost:3000/api/auth/user', {allowAccess}, {withCredentials: true})
          .then(res => {
            const data = res.data;
            commit('setUser', data);
          })
          .catch(err => {
            console.error(err);
            console.log('유저 정보 받아오기 실패');
          });
      }
    }
  },
  
  modules: {
  }
})
