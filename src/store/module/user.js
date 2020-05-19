import { homeApi } from '../../api'
export default {
  state: {
    userId: '',
    userName: '',
    hasGetInfo: false,
  },
  mutations: {
    setUserId (state, id) {
      state.userId = id
    },
    setUserName (state, name) {
      state.userName = name
    },
    setHasGetInfo (state, status) {
      state.hasGetInfo = status
    }
  },
  actions: {
    getUserInfo ({ state, commit }) {
      return homeApi.getUserInfo.then(res => {
        if (res.code === '200') {
          commit('setUserId', res.data.id)
          commit('setUserName', res.data.name)
          commit('setHasGetInfo', true)
        }
      })
    }
  }
}
