<template>
  <q-layout view="lHh Lpr lFf">
    <q-header>
      <div class="tw-flex tw-items-center tw-justify-start tw-py-1 tw-gap-4 bg-grey-1">
        <div class="tw-mr-1">
          <q-btn
            class="tw-left-2 xl:tw-hidden"
            flat
            dense
            round
            icon="menu"
            color="primary"
            aria-label="Menu"
            @click="leftDrawerOpen = !leftDrawerOpen"
        />
        </div>
        <div class="tw-w-1/2">
          <Search  />
        </div>

        <div class="tw-flex tw-items-center tw-justify-start tw-w-1/2 tw-gap-16">
          <div class="tw-w-30">
          <q-toggle
            :false-value="this.$q.dark.set(theme)"
            :true-value="this.$q.dark.set(theme)"
            v-model="theme"
            :icon="$q.dark.isActive ? '' : ''"
            color="green"
            class="tw-text-gray-700 tw-text-lg"
            label="Live"
            size="md"
          />
        </div>

          <div class="">
        <q-btn-dropdown
            class="tw-font-normal tw-leading-5 tw-py-1 tw-text-gray-700 tw-bg-gray-100"
            label="English"
            rounded
            unelevated
            no-caps
            size="17px"
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

          <div class="bg-grey-2 tw-rounded-xl">
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
      content-class="bg-grey-1"
    >
      <div>
        <template>
          <div class="tw-flex tw-items-center tw-justify-start tw-font-semibold tw-text-4xl tw-ml-5 tw-mt-7 tw-leading-5" style="color: #484a4f; margin-left: 18px">Test</div>
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
const linksData = [
  {
    title: 'Docs',
    caption: 'quasar.dev',
    icon: 'school',
    link: 'https://quasar.dev'
  },
  {
    title: 'Github',
    caption: 'github.com/quasarframework',
    icon: 'code',
    link: 'https://github.com/quasarframework'
  },
  {
    title: 'Discord Chat Channel',
    caption: 'chat.quasar.dev',
    icon: 'chat',
    link: 'https://chat.quasar.dev'
  },
  {
    title: 'Forum',
    caption: 'forum.quasar.dev',
    icon: 'record_voice_over',
    link: 'https://forum.quasar.dev'
  },
  {
    title: 'Twitter',
    caption: '@quasarframework',
    icon: 'rss_feed',
    link: 'https://twitter.quasar.dev'
  },
  {
    title: 'Facebook',
    caption: '@QuasarFramework',
    icon: 'public',
    link: 'https://facebook.quasar.dev'
  },
  {
    title: 'Quasar Awesome',
    caption: 'Community Quasar projects',
    icon: 'favorite',
    link: 'https://awesome.quasar.dev'
  }
];

export default {
  name: 'MainLayout',
  components: {EssentialLink, ProfileTwo, Search },
  mixins: [commonMixins],
  data () {
    return {
      image: 'https://cdn.quasar.dev/img/avatar2.jpg',
      leftDrawerOpen: false,
      essentialLinks: linksData
    }
  },
  methods: {
    }
}
</script>

<style scoped>

</style>
