import { defineStore } from 'pinia'

export const useCreateStore = defineStore({
  // id is required so that Pinia can connect the store to the devtools
  id: 'CreateStore',
  state: () => ({
    user: {
      name: '',
      email: '',
    },
    loggedIn: false,
  }),
  getters: {},
  actions: {
    setUser(user) {
      this.state.user = user
      this.state.loggedIn = true
    },
    logout(state) {
      state.user = {
        name: '',
        email: '',
      }
      state.loggedIn = false
    },
  },
})