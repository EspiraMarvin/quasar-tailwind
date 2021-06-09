<template>
  <div class="tw-pb-4">
    <q-card flat bordered class="tw-rounded-3xl">
      <q-card-section class="tw-px-4 tw-font-bold">Success Rate</q-card-section>
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
      series: [67],
      plotOptions: {
        radialBar: {
          hollow: {
            margin: 25,
            size: '70%',
            background: "#293450"
          },
          track: {
            dropShadow: {
              enabled: true,
              top: 2,
              left: 0,
              blur: 4,
              opacity: 0.15
            }
          },
          dataLabels: {
            showOn: 'always',
            name: {
              offsetY: -10,
              show: true,
              color: '#888',
              fontSize: '13px'
            },
            value: {
              color: '#111',
              fontSize: "30px",
              show: true
            }
          }
        }
      },
      stroke: {
        lineCap: 'round'
      },
      labels: ['Progress']
    }
  }
}
</script>

<style scoped>

</style>
