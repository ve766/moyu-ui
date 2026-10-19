export const state = () => ({
  isDarkMode: false,
});

export const mutations = {
  // eslint-disable-next-line no-shadow
  SET_DARK_MODE(state, isDarkMode) {
    state.isDarkMode = isDarkMode;
  },
};

export const actions = {
  loadDarkMode({ commit }) {
    const isDarkMode = JSON.parse(localStorage.getItem('isDarkMode'));
    commit('SET_DARK_MODE', isDarkMode || false);
    document.documentElement.classList.toggle('gl-dark', isDarkMode);
  },
  // eslint-disable-next-line no-shadow
  toggleDarkMode({ commit, state }) {
    const isDarkMode = !state.isDarkMode;
    commit('SET_DARK_MODE', isDarkMode);
    localStorage.setItem('isDarkMode', JSON.stringify(state.isDarkMode));
    document.documentElement.classList.toggle('gl-dark', isDarkMode);
  },
};
