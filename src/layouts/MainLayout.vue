<template>
  <q-layout view="lHh Lpr lFf">
    <q-header class="bg-white">
      <div class="tw-flex tw-items-center tw-justify-start tw-py-2 tw-gap-4">
        <div class="tw-mr-1">
          <q-btn
            class="tw-left-2 tw-text-gray-700 lg:tw-hidden"
            flat
            dense
            round
            icon="menu"
            color=""
            aria-label="Menu"
            @click="leftDrawerOpen = !leftDrawerOpen"
        />
        </div>
        <div class="tw-w-6/12">
          <Search  />
        </div>

        <div class="tw-flex tw-items-center tw-justify-start tw-w-1/2 tw-gap-10">
          <div class="">
            <q-toggle
              :false-value="this.$q.dark.set(theme)"
              :true-value="this.$q.dark.set(theme)"
              v-model="theme"
              :icon="$q.dark.isActive ? '' : ''"
              color="green"
              class="tw-text-gray-700 tw-text-lg tw-font-light"
              label="Live"
              size="md"
              style="opacity: 0.8"
            />
        </div>

        <div class="">
          <q-btn-dropdown
              class="tw-font-light tw-leading-5 tw-text-gray-500 tw-bg-gray-50 tw-px-6 tw-py-1"
              label="English"
              rounded
              outline
              unelevated
              no-caps
              dense
              size="16px"
              dropdown-icon="expand_more"
          >
            <q-list separator bordered class="tw-font-light">
              <q-item clickable class="tw-flex-col tw-text-center no-outline hover:tw-bg-gray-200" exact v-close-popup @click="onItemClick">
                  <q-item-label class="tw-mt-2">French</q-item-label>
              </q-item>
              <q-item clickable class=" tw-flex-col tw-text-center hover:tw-bg-gray-300" exact v-close-popup @click="onItemClick">
                  <q-item-label class="tw-mt-2">German</q-item-label>
              </q-item>
            </q-list>
          </q-btn-dropdown>
        </div>

          <div class="tw-bg-gray-50 tw-rounded-xl">
            <q-btn flat icon="eva-bell" size="18px" style="color: #828282">
              <q-badge floating color="purple-3" />
            </q-btn>
        </div>

          <div class="tw-w-1/4">
         <ProfileTwo />
        </div>
        </div>
      </div>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
      content-class=""
      width="270"
    >
      <div>
        <template>
          <div class="tw-flex tw-items-center tw-justify-start tw-font-semibold tw-text-3xl tw-ml-5 tw-mt-7 tw-leading-5 tw-ml-18" >Test</div>
        </template>
      </div>

<!--      <q-scroll-area
        :thumb-style="this.thumbStyle"
        :style="{height: '490px'}"
      >-->
        <EssentialLink />

<!--      </q-scroll-area>-->

    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import commonMixins from "src/mixins/commonMixins";
import Search from "components/Search";
import ProfileTwo from "components/UserProfile";
import EssentialLink from "components/navigations/EssentialLink";

export default {
  name: 'MainLayout',
  components: {EssentialLink, ProfileTwo, Search },
  mixins: [commonMixins],
  data () {
    return {
      image: 'https://cdn.quasar.dev/img/avatar2.jpg',
      leftDrawerOpen: false,
      essentialLinks: linksData,
      data() {
        return {
          theme: ""
        }
      }
    }
  },
  methods: {
    }
}
</script>

<style scoped>

</style>
