import Vue from 'vue';
import Vuex from 'vuex';
import axios from '@/axios.js';
import cookies from 'vue-cookies';
import router from '@/router';

Vue.use(Vuex);

const state = {
  tasks: [],
  user: null,
  isLoading: false,
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
      return state.tasks.filter((task) => {
        return task.completed === 1;
      });
    },
    unCompletedTasks: (state) => {
      return state.tasks.filter((task) => {
        return task.completed === 0;
      });
    },
    isLoading: (state) => {
      return state.isLoading;
    },
  },

  mutations: {
    user(state, payload) {
      state.user = payload;
    },
    tasks(state, payload) {
      state.tasks = payload;
    },
    isLoading(state, payload) {
      state.isLoading = payload;
    },
  },

  actions: {
    async user({ commit }) {
      const res = await axios.get('user');
      const user = await res.data.data;
      commit('user', user);
    },
    isLoading({ commit }) {
      commit('isLoading', status);
    },
    //All tasks
    async tasks({ commit }) {
      const res = await axios.get('tasks');
      const tasks = await res.data.data;
      commit('tasks', tasks);
    },
    //Update complete status
    async updateCompleted({ dispatch }, payload) {
      try {
        await axios.put(`task/${payload.id}`, {
          completed: payload.completed,
        });
        dispatch('tasks');
      } catch (e) {
        console.log(e);
      }
    },
    //Delete tasks
    async deleteTask({ dispatch }, id) {
      await axios.delete(`task/${id}`);
      dispatch('tasks');
    },
    //Login
    async login({ commit }, payload) {
      try {
        const res = await axios.post('login', {
          email: payload.email,
          password: payload.password,
        });
        cookies.set('access_token', res.data.token);
        cookies.set('user', res.data.data);
        router.push('/dushboard/all');
        commit('user', res.data.data);
      } catch (e) {
        console.log(e);
      }
    },
  },
});

export default store;
