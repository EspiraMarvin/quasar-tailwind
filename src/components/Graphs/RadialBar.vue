<template>
  <div class="md:tw-pl-4 md:tw-pl-8 tw-pb-3 ">
    <q-card flat bordered class="tw-rounded-3xl">
      <q-card-section class="tw-px-4">Success Rate</q-card-section>
      <div>
        <Graph type="radialBar" :options="plotOptions" :series="series" height="280"></Graph>
      </div>
    </q-card>
  </div>
</template>

<script>
export default {
  name: "RadialBar",
  data () {
    return {
      showList: false,
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
