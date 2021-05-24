<template>
  <div>
    <radialbar type="radialBar" :options="plotOptions" :series="series" height="280"></radialbar>
  </div>
</template>

<script>
export default {
  name: "RadialBar",
  data () {
    return {
      chart: {
        height: 280,
        type: "radialBar"
      },
      series: [67],

      plotOptions: {
        radialBar: {
          hollow: {
            margin: 15,
            size: "70%"
          },

          dataLabels: {
            showOn: "always",
            name: {
              offsetY: -10,
              show: true,
              color: "#888",
              fontSize: "13px"
            },
            value: {
              color: "#111",
              fontSize: "30px",
              show: true
            }
          }
        }
      },

      stroke: {
        lineCap: "round",
      },
      labels: ["Progress"]
    }
  }
}
</script>

<style scoped>

</style>
