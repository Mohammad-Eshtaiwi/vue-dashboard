<template>
  <Header />
  <main>
    <Welcome />
    <div class="container flex flex-3 flex-md-2 flex-sm-1 flex-center mt-10">
      <InfoCard
        v-for="info in infos"
        :key="info.index"
        :info="info"
        :since="getSinceTime(info.time)"
        :statusIcon="
          info.status === 1
            ? 'arrow-up'
            : info.status === -1
            ? 'arrow-down'
            : 'minus'
        "
      />
    </div>
    <div class="flex flex-2 flex-md-1 mt-10 container">
      <ChartWithPriority :priority=2 type="polarArea" name="team-1" :data="data" :options="options"/>
      <ChartWithPriority :priority=1 type="pie" name="team-2" :data="data" :options="options"/>
      <ChartWithPriority :priority=4 type="line" name="team-3" :data="data" :options="options"/>
      <ChartWithPriority :priority=3 type="radar" name="team-4" :data="data" :options="options"/>
    </div>
  </main>
</template>

<script>
import Header from "./Header";
import Welcome from "./Welcome";
import InfoCard from "./InfoCard";
import ChartWithPriority from "./ChartWithPriority";
import getSinceTime from "../utils/getSinceTime";
export default {
  name: "Home",
  components: { Header, Welcome, InfoCard , ChartWithPriority  },
  created() {
    // get the data from the server
    this.$store.dispatch("getInfos");
  },
  methods: {
    // return how many days or weeks or months or week
    getSinceTime,
  },
  computed: {
    infos() {
      return this.$store.state.infos;
    },
    // used data from the internet and shared it cross all the charts
    data() {
      return this.$store.state.chartData;
    },
    options() {
      return this.$store.state.chartOptions;
    },
  },
};
</script>
