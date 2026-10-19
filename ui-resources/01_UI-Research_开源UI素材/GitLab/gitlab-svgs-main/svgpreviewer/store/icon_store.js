import Vuex from 'vuex';

import icons from '../static/dist/icons.json';

const createStore = () =>
  new Vuex.Store({
    searchTerm: '',
    icons,
  });

/* eslint-disable-next-line import/no-default-export */
export default createStore;
