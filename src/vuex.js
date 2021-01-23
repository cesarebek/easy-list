import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const state = {
  user: null,
  tasks: [],
  completedTasks: [],
  unCompletedTasks: [],
};

const store = new Vuex.Store({
  state,

  getters: {
    user: (state) => {
      return state.user;
    },
    tasks: (state) => {
      return state.tasks;
    },
    completedTasks: (state) => {
      return state.completedTasks;
    },
    unCompletedTasks: (state) => {
      return state.unCompletedTasks;
    },
  },

  mutations: {
    user(state, payload) {
      state.user = payload;
    },
    tasks(state, payload) {
      state.tasks = payload;
    },
    completedTasks(state, payload) {
      state.completedTasks = payload;
    },
    unCompletedTasks(state, payload) {
      state.unCompletedTasks = payload;
    },
  },

  actions: {
    user(context, payload) {
      context.commit('user', payload);
    },

    tasks(context, payload) {
      context.commit('tasks', payload);
    },
    completedTasks(context, payload) {
      context.commit('completedTasks', payload);
    },
    unCompletedTasks(context, payload) {
      context.commit('unCompletedTasks', payload);
    },
  },
});

export default store;
