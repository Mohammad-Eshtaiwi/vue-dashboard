import { createStore } from "vuex";

export default createStore({
  state: {
    infos: [],
    chartData: {
      labels: ["Africa", "Asia", "Europe", "Latin America", "North America"],
      datasets: [
        {
          label: "Population (millions)",
          backgroundColor: [
            "#3e95cd",
            "#8e5ea2",
            "#3cba9f",
            "#e8c3b9",
            "#c45850",
          ],
          data: [2478, 5267, 734, 784, 433],
        },
      ],
    },
    chartOptions: { responsive: true, maintainAspectRatio: false },
  },
  mutations: {
    getInfos(state, newInfos) {
      state.infos = [...newInfos];
    },
  },
  actions: {
    async getInfos({ commit }) {
      const res = await fetch("http://localhost:3000/infos");
      commit("getInfos", await res.json());
    },
  },
  modules: {},
});
