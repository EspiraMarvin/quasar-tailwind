<template>
  <div class="tw-rounded-3xl tw-pt-4 md:tw-mx-2">
    <q-card-section class="xl:tw-px-12">
      <div>
        <Graph type="bar" :options="options" :series="series" height="300" class="tw-max-w-3xl" />
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
        theme: {
          monochrome: {
            enabled: true,
            color: '#EBB1FF',
            // color: '#ecccff',
            shadeTo: 'dark',
            shadeIntensity: 0.65
          }
        },
        chart: {
          id: 'vuechart-example',
          animations: {
            speed: 200
          }
        },
        dataLabels: {
          enabled: false
        },
        plotOptions: {
          bar: {
            distributed: false,
            curve: true,
            borderRadius: 2,
            style: { borderRadius: '50px'},
          }
        },
        xaxis: {
          categories: ['Mar 1-7', 'Mar 8-14', 'Mar 15-21', 'Mar 22-28', 'Final wk'],
        }
      },
      series: [{
        name: 'series-1',
        data: [50000, 120000, 120000, 120000, 180000]
      }],
      fill: {
        type: 'gradient',
        gradient: {
          shade: 'dark',
          type: "horizontal",
          shadeIntensity: 0.5,
          gradientToColors: undefined, // optional, if not defined - uses the shades of same color in series
          inverseColors: true,
          opacityFrom: 1,
          opacityTo: 1,
          stops: [0, 50, 100],
          colorStops: []
        }
      }
    }
  }
}
</script>

<style scoped>

</style>
