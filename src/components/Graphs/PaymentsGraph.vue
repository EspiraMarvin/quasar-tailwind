<template>
    <div class="tw-pt-1 tw-pb-6 md:tw-pb-4">
      <q-card flat bordered class="tw-rounded-3xl">
        <q-card-section class="tw-px-4">Payment issues</q-card-section>
        <div>
          <Graph type="bar" :options="options" :series="series" height="244"></Graph>
        </div>
      </q-card>
    </div>
</template>

<script>
export default {
name: "PaymentsGraph",
  data () {
    return {
      showList: false,
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
  },
}
</script>

<style scoped>

</style>
