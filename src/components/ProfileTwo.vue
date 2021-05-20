<template>
    <div class="q-pa-md tw-text-gray-700">
      <q-btn-dropdown
        @click="onMainClick"
        class="tw-font-normal tw-leading-5 tw-bg-gray-100 tw-rounded-r-md"
        no-caps
        unelevated
        dropdown-icon="expand_more"
        dropdown-color="drop-arrow-color"
      >
        <template v-slot:label>
          <div class="tw-flex no-wrap tw-pr-8">
            <div class="absolute-left tw-left-0">
              <!--            <q-icon left name="map" />-->
              <q-avatar square class="tw-rounded-l-md tw-inset-0">
                <img src="https://cdn.quasar.dev/img/avatar.png">
              </q-avatar>
            </div>
            <div class="tw-pl-10">
              <div>
                User Name
              </div>
              <div class="tw-flex tw-items-center tw-justify-start tw-text-gray-400">
                user
              </div>
            </div>
          </div>
        </template>
        <q-list class="tw-font-light">
          <q-item clickable class="tw-flex-col tw-items-center tw-rounded-md hover:tw-bg-gray-200" exact v-close-popup @click="onItemClick">
            <q-item-label class="tw-pt-2">Profile</q-item-label>
          </q-item>
          <q-separator />
          <q-item clickable class="tw-flex-col tw-items-center tw-rounded-md hover:tw-bg-gray-200" exact v-close-popup @click="onItemClick">
            <q-item-label class="tw-mt-2">Logout</q-item-label>
          </q-item>
        </q-list>
      </q-btn-dropdown>
    </div>
</template>

<script>
export default {
name: "ProfileTwo"
}
</script>

<style scoped>

</style>
