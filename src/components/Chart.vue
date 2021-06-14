<template>
  <div class="chart">
      <canvas :id="name" :key="name" height="250"></canvas>
  </div>
</template>

<script>
import Chart from "chart.js";
export default {
  props:{name:String , type:String , data:Object,options:Object}
  ,
  mounted() {
      
    const ctx = document.getElementById(this.name);
    new Chart(ctx, {
  type:this.type,
  data: this.data,
  options: this.options
});
  },
};
</script>
<style lang="scss" scoped>
    .chart{
        background-color: #f1f1f1;
        padding: 1em;
    }
</style>
