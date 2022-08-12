import { createStore } from 'vuex'

export default createStore({
  state: { // 데이터 넣어
    productsData: [], // products.vue, 상품 목록
    isLoggedIn: false, // 로그인 체크
    userId: '',
  },
  getters: {
  },
  mutations: { //
    allowAuth: (state, payload) => {
      state.isLoggedIn = payload;
    },
    revokeAuth: (state, payload) => {
      state.isLoggedIn = payload;
    },
    setUserId: (state, payload) => {
      state.userId = payload;
    }
  },
  actions: {
  },
  modules: {
  }
})
