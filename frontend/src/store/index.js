import router from '@/router';
import { createStore } from 'vuex'

export default createStore({
  state: { // 데이터
    productsData: [],
    userId: '',
    userEmail: '', 
    userName: '',
    userToken: '',
  },

  getters: {
  },
  
  mutations: { //
    revokeAuth: (state, payload) => {
      state.isLoggedIn = payload;
    },
    setUser: (state, payload) => {
      state.userId = payload.id;
      state.userEmail = payload.email;
      state.userName = payload.name;
      state.userToken = payload.token;
    },
    loginCheck: (state) => {
      if(!state.userToken) {
        router.push({
          name: 'home'
        })
        .catch(err => console.log(err));
      }
    },
    allowLoginView: (state) => {
      if(state.userToken) {
        router.push({
          name: 'products'
        })
        .catch(err => console.log(err));
      }
    }
  },

  actions: {
  },
  
  modules: {
  }
})
