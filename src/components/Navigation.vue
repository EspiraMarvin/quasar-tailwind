<template>
  <div class="q-pa-md">
    <div class="bg-white tw-flex tw-items-center tw-gap-3 tw-wrap">
      <div class="tw-mr-1">
        <q-btn
          class="tw-left-2"
          flat
          dense
          round
          icon="menu"
          color="primary"
          aria-label="Menu"
          @click="leftDrawerOpen = !leftDrawerOpen"
        />
      </div>
      <div class="tw-w-2/3">
        <Search />
      </div>
      <div class="tw-w-30">
        <q-toggle
          :false-value="this.$q.dark.set(theme)"
          :true-value="this.$q.dark.set(theme)"
          v-model="theme"
          :icon="$q.dark.isActive ? '' : ''"
          color="green"
          class="tw-text-black tw-mx-2"
          label="Live"
          size="md"
        />
      </div>
      <div class="tw-w-32 tw-flex">
        <q-btn-dropdown
          color="bg-white text-black" class="tw-font-light"
          label="English"
          rounded
          no-caps
          dropdown-icon="expand_more"
        >
          <q-list separator bordered class="tw-font-light">
            <q-item clickable class="tw-flex-col tw-items-center tw-rounded-md hover:tw-bg-gray-200" exact v-close-popup @click="onItemClick">
              <q-item-label class="tw-pt-2">French</q-item-label>
            </q-item>
            <q-item clickable class="tw-flex-col tw-items-center tw-rounded-md hover:tw-bg-gray-200" exact v-close-popup @click="onItemClick">
              <q-item-label class="tw-mt-2">German</q-item-label>
            </q-item>
          </q-list>
        </q-btn-dropdown>
      </div>

      <div class="tw-w-10">
        <q-icon name="eva-bell-outline" class="" size="md" color="" style="color: #828282" />
      </div>

      <div class="tw-flex tw-items-center tw-px-4 tw-text-black tw-bordered-md">
        <div class="tw-h-30">
          <q-btn-dropdown
            class="tw-font-light tw-py-2 tw-my-2"
            color="bg-white text-black"
            label="User Name"
            caption="user"
            rounded
            no-caps
            dropdown-icon="expand_more"
          >
            <q-list bordered class="tw-font-light">
              <q-item clickable class="tw-flex-col tw-items-center tw-rounded-md hover:tw-bg-gray-200" exact v-close-popup @click="onItemClick">
                <q-item-label class="tw-pt-2">Settings</q-item-label>
              </q-item>
              <q-separator />
              <q-item clickable class="tw-flex-col tw-items-center tw-rounded-md hover:tw-bg-gray-200" exact v-close-popup @click="onItemClick">
                <q-item-label class="tw-mt-2">Logout</q-item-label>
              </q-item>
            </q-list>
          </q-btn-dropdown>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Search from "components/Search";
export default {
  name: "Nav",
  components: { Search }
}
</script>

<style scoped>

</style>
