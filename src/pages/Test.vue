<template>
  <q-page class="tw-w-full flex flex-center flex-wrap">
    <div class="tw-w-full tw-flex tw-flex-wrap">
      <div class="tw-w-full tw-mt-3 md:tw-mt-10">
        <h2 class="tw-text-3xl text-primary tw-font-bold">The jokes</h2>
        <hr>
      </div>
      <div class="tw-w-full tw-mt-6 tw-flex tw-flex-wrap">
        <div  class="my-card tw-w-full md:tw-w-1/3 tw-p-3 tw-flex tw-flex-col">
          <q-card class="tw-min-h-56 tw-flex tw-flex-wrap tw-content-between tw-flex-col tw-flex-1">
            <q-card-section class="tw-w-full tw-flex-1">
              <div class="text-h6"> joke setup </div>
            </q-card-section>

            <q-card-section class="tw-w-full tw-flex-1">
              <p class="tw-px-2 tw-py-3 tw-bg-blue-100 tw-rounded"> joke punchline </p>
            </q-card-section>
            <q-card-section class="tw-w-full tw-flex tw-justify-end tw-flex-1">
              <div class="text-subtitle2">
                <q-badge outline color="primary" label="joketype" />
              </div>
            </q-card-section>
          </q-card>
        </div>
      </div>
      <div class="tw-w-full tw-mt-6 tw-flex tw-flex-wrap">
        <div class="tw-w-full tw-flex tw-justify-center">
          <q-circular-progress
            indeterminate
            size="30px"
            color="primary"
            class="q-ma-md"
          />
        </div>
        <div class="my-card tw-w-full md:tw-w-1/3 tw-p-3">
          <q-card class="tw-h-56 tw-flex tw-flex-wrap tw-content-between tw-bg-gray-300">
          </q-card>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script>
export default {
  name: "Test"
}
</script>

<style scoped>

</style>
