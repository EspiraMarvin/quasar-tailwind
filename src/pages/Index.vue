<template>
  <q-page class="tw-mt-2 tw-font-sans">

    <div class="tw-grid md:tw-grid lg:tw-grid tw-grid-rows-1 md:tw-grid-rows-1 tw-gap-2 md:tw-gap-0 tw-py-3">
      <div class="md:tw-col-span-6 md:tw-col-start-1 md:tw-col-end-4 lg:tw-col-end-5">
        <div class="tw-pl-4 lg:tw-pl-8 xl:tw-pl-10 tw-mt-4 tw-text-lg tw-font-semibold" style="color: #ffa14e">
          👋️ Hey User
        </div>

        <div class="tw-pl-4 lg:tw-pl-8 xl:tw-pl-10 tw-mt-3 tw-text-2xl tw-font-bold">
          Your dummy dashboard
        </div>
        <div class="xl:tw-grid xl:tw-cols-6 md:tw-mt-6 md:tw-gap-y-8 md:tw-gap-x-8 md:tw-h-96">
          <!--        <div class="row tw-px-8 tw-gap-y-4">-->

          <div class="tw-pl-4 lg:tw-pl-8 xl:tw-pl-10 tw-pt-4 tw-pb-3 xl:tw--mb-6 tw-font-medium tw-leading-4 tw-text-gray-500">
            <span class="tw-text-base">Last 30 Days</span>
            <q-btn-dropdown
              class="tw-ml-4 text-purple-14 bg-purple-1 tw-rounded-xl"
              label=""
              rounded
              dense
              unelevated
              size="16px"
              dropdown-icon="eva-arrow-down"
            >
              <q-list separator bordered class="tw-font-light justify-center items-center">
                <q-item dense exact clickable><span class="text-caption tw-pt-1">10</span></q-item>
                <q-item dense exact clickable><span class="text-caption tw-pt-1">50</span></q-item>
              </q-list>
            </q-btn-dropdown>
          </div>

          <div class="md:tw-col-span-3 tw-rounded-3xl tw-h-96 ">
            <!--          <div class="col-xs-12 tw-bg-gray-300">-->
            <q-card flat bordered class="tw-rounded-3xl tw-mx-1 md:tw-ml-4 lg:tw-ml-8 xl:tw-ml-10 ">
              <BarGraph />
            </q-card>
          </div>
          <div class="tw-col-start-1 tw-col-end-2 tw-rounded-3xl">
            <!--          <div class="col-xs-6 bg-white">-->
            <q-card flat class="tw-mx-1 md:tw-ml-4 lg:tw-ml-8 xl:tw-ml-10 tw-pt-2">
              <RadialBar />
            </q-card>
          </div>
          <!--          <q-space/>-->
          <div class="tw-col-start-2 tw-col-end-4 tw-rounded-3xl">
            <!--          <div class="col-xs-6 bg-white">-->
            <q-card flat class="tw-mx-1 md:tw-ml-4 lg:tw-ml-8 xl:tw-ml-10  tw-pt-1">
              <PaymentsGraph />
            </q-card>
          </div>
        </div>
      </div>
      <div class="md:tw-col-start-5 md:tw-col-end-7 md:tw-pl-4 lg:tw-pl-4 xl:tw-pl-28">
        <div style="border-top-left-radius: 80px;" class="bg-grey-1 rounded-tl-3xl">
<!--/*        <div style="border-top-left-radius: 80px; background: #f9f9f9">*/-->
          <div class="tw-flex tw-justify-center tw-pt-16 tw-px-8 xl:tw-px-8 tw-leading-5 ">
            <q-tabs
              dense
              v-model="tab"
              indicator-color="grey"
              class="tw-text-gray-500"
              active-color="grey-9"
            >
              <div class="tw-flex tw-gap-24 md:tw-gap-10 lg:tw-gap-24">
                <q-tab name="stats" label="Stats" no-caps :ripple="false" class=" tw--ml-2" />
                <q-tab name="messages" label="Messages" no-caps  :ripple="false" />
              </div>
            </q-tabs>
          </div>
          <!--          separator-->
          <q-separator class="tw-mt-2 bg-grey-4 tw-mx-10" />

          <q-scroll-area style="height:690px" :thumb-style="this.thumbStyle" >
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
import BarGraph from "components/Graphs/BarGraph";
import PaymentsGraph from "components/Graphs/PaymentsGraph";
import commonMixins from "src/mixins/commonMixins";
export default {
  name: 'PageIndex',
  components: {
    MessageCard,
    RadialBar,
    BarGraph,
    PaymentsGraph

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
