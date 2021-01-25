import Vue from 'vue';
import Vuex from 'vuex';
import axios from '@/axios.js';

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
    //Set isLoading
    isLoading({ commit }) {
      commit('isLoading', status);
    },
    async user({ commit }) {
      try {
        const res = await axios.get('user');
        const user = await res.data.data;
        commit('user', user);
      } catch (e) {
        console.log(e);
      }
    },
    //All tasks
    async tasks({ dispatch, commit }) {
      try {
        dispatch('isLoading', true);
        const res = await axios.get('tasks');
        commit('tasks', res.data.data);
        dispatch('isLoading', false);
      } catch (e) {
        console.log(e);
      }
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
      try {
        await axios.delete(`task/${id}`);
        dispatch('tasks');
      } catch (e) {
        console.log(e);
      }
    },
  },
});

export default store;
