<template>
  <div class="tw-rounded-3xl tw-pt-4 md:tw-mx-8">
    <q-card-section class="tw-px-6 tw-w-auto">
      <div>
        <Graph type="bar" :options="options" :series="series" height="350" class="" />
      </div>
    </q-card-section>
  </div>
</template>

<script>
export default {
  name: "BarGraph",
  data () {
    return {
      options: {
        chart: {
          id: 'vuechart-example'
        },
        xaxis: {
          categories: ['Mar 1-7', 'Mar 8-14', 'Mar 15-21', 'Mar 22-28', 'Final wk']
        }
      },
      series: [{
        name: 'series-1',
        data: [50000, 120000, 120000, 120000, 180000]
      }]
    }
  }
}
</script>

<style scoped>

</style>
