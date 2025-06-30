export default {
  namespaced: true,
  state: () => ({
    sidebarOpened: true
  }),
  mutations: {
    toggleSidebar(state) {
      state.sidebarOpened = !state.sidebarOpened
    }
  }
}
