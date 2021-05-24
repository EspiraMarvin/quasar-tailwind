<template>
  <q-page class="tw-mt-2 tw-font-sans">

    <div class="tw-grid tw-grid-rows-2 md:tw-grid-cols-6 tw-gap-4 tw-py-3">
      <div class="grid-rows-3 md:tw-col-start-1 md:tw-col-end-5 tw-bg-indigo-50">
        <div class="tw-pl-4 md:tw-pl-10 tw-mt-3 tw-text-lg tw-font-semibold" style="color: #ffa14e">
          👋️ Hey User
        </div>

        <div class="tw-pl-4 md:tw-pl-10 tw-mt-3 tw-text-2xl tw-font-bold">
          Your dummy dashboard
        </div>
        <div class="md:tw-grid md:tw-cols-4 md:tw-mt-10 md:tw-gap-y-8 md:tw-gap-x-10 md:tw-h-96">
<!--        <div class="row tw-px-8 tw-gap-y-4">-->
          <div class="md:tw-col-span-3 md:tw-bg-gray-300">
<!--          <div class="col-xs-12 tw-bg-gray-300">-->
          Bar Chart
            <RadialBar />
          </div>
          <div class="tw-col-start-1 tw-col-end-2 bg-amber-1">
<!--          <div class="col-xs-6 bg-white">-->
            Pie Chart
            <RadialBar />
          </div>
<!--          <q-space/>-->
          <div class="tw-col-start-2 tw-col-end-4 bg-purple-2">
<!--          <div class="col-xs-6 bg-white">-->
            Bar Graph
            <RadialBar />
          </div>
        </div>
      </div>
      <div class="md:tw-col-start-5 md:tw-col-end-7 md:tw-pl-4 lg:tw-pl-4 xl:tw-pl-28">
        <div style="border-top-left-radius: 80px; background: #f9f9f9">
          <div class="tw-flex tw-justify-center tw-pt-10 tw-px-8 tw-leading-5 tw-font-semibold">
            <q-tabs
              dense
              v-model="tab"
              indicator-color="grey"
              class="tw-text-gray-500"
              active-color="black"
            >
              <div class="tw-flex tw-gap-20 md:tw-gap-10 lg:tw-gap-24">
                <q-tab name="stats" label="Stats" no-caps :ripple="false" class="tw-ml-0 md:tw-ml-1 lg:tw-ml-4" />
                <q-tab name="messages" label="Messages" no-caps  :ripple="false" />
              </div>
            </q-tabs>
          </div>

<!--          separator-->
          <q-separator class="tw-mt-2 tw-gray-100 tw-mx-10" />

          <q-scroll-area style="height:650px" :thumb-style="this.thumbStyle" >
          <q-tab-panels v-model="tab" animated :style="{background: '#f9f9f9'}">
            <q-tab-panel name="stats">
              <div class="tw-flex tw-justify-center">Stats</div>
            </q-tab-panel>
            <q-tab-panel name="messages">
              <div
                v-for="item in messageCards"
                :key="item.index"
              >
                <!-- message card component-->
                <MessageCard />
              </div>
            </q-tab-panel>
          </q-tab-panels>
          </q-scroll-area>
        </div>
      </div>
    </div>

  </q-page>
</template>

<script>
import MessageCard from "components/MessageCard";
import RadialBar from "components/Graphs/RadialBar";
import commonMixins from "src/mixins/commonMixins";
export default {
  name: 'PageIndex',
  components: {
    MessageCard,
    RadialBar
  },
  mixins: [commonMixins],
  data () {
    return {
      tab: 'messages',
      messageCards: 5
    }
  }
}
</script>
