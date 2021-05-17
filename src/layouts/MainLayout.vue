<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <div class="bg-white tw-flex tw-items-center">
        <div class="tw-mr--1">
          <q-btn
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
        <div class="tw-w-32">
          <q-btn-dropdown rounded color="bg-white text-black" class="tw-font-light" label="English" no-caps>
            <q-list class="tw-font-light">
              <q-item clickable class="tw-flex-col tw-items-center tw-rounded-md hover:tw-bg-gray-200" exact v-close-popup @click="onItemClick">
                  <q-item-label class="tw-mt-2">French</q-item-label>
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

        <span class="tw-text-black">Quasar v{{ $q.version }}</span>
      </div>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
      content-class="bg-grey-1"
    >
      <q-list>
        <q-item-label
          header
          class="text-grey-8"
        >
          Essential Links
        </q-item-label>
        <EssentialLink
          v-for="link in essentialLinks"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import EssentialLink from 'components/EssentialLink.vue'
import Search from "components/Search";
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
  components: { EssentialLink, Search},
  data () {
    return {
      leftDrawerOpen: false,
      essentialLinks: linksData
    }
  }
}
</script>

<style scoped>
.my-item:hover {
  background-color: red;
}
</style>
