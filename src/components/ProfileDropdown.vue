<template>
  <!-- This example requires Tailwind CSS v2.0+ -->
  <div class="tw-relative tw-inline-block tw-text-left">
    <div>
      <button type="button" @click="show" class="tw-text-black tw-leading-5 tw-rounded-full tw-inline-flex tw-justify-center tw-items-center tw-w-full tw-h-12 tw-rounded-md tw-border tw-border-gray-300 tw-shadow-sm tw-px-4 py-2 tw-bg-white tw-text-sm tw-font-medium text-gray-700 hover:tw-bg-gray-50 focus:tw-outline-none focus:tw-ring-2 focus:tw-ring-offset-2 focus:tw-ring-offset-gray-100 focus:tw-ring-gray-50" id="menu-button" aria-expanded="true" aria-haspopup="true">
        Options
        <!-- Heroicon name: solid/chevron-down -->
        <svg class="tw--mr-1 tw-ml-2 tw-h-5 tw-w-5 tw-text-gray-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
          <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
        </svg>
      </button>
    </div>

    <div class="tw-origin-top-right tw-absolute tw-left-0 tw-mt-2 tw-w-56 tw-rounded-md tw-shadow-lg tw-bg-white tw-ring-1 tw-ring-black tw-ring-opacity-5 focus:tw-outline-none" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabindex="-1">
      <q-list v-model="showList">

      <div class="tw-py-1" role="none">
<!--         Active: "bg-gray-100 text-gray-900", Not Active: "text-gray-700" -->
        <a href="#" class="tw-text-gray-700 tw-block tw-px-4 tw-py-2 tw-text-sm" role="menuitem" tabindex="-1" id="menu-item-0">Account settings</a>
        <a href="#" class="tw-text-gray-700 tw-block tw-px-4 tw-py-2 tw-text-sm" role="menuitem" tabindex="-1" id="menu-item-1">Support</a>
        <a href="#" class="tw-text-gray-700 tw-block tw-px-4 tw-py-2 tw-text-sm" role="menuitem" tabindex="-1" id="menu-item-2">License</a>
        <form method="POST" action="#" role="none">
          <button type="submit" class="tw-text-gray-700 tw-block tw-w-full tw-text-left tw-px-4 tw-py-2 tw-text-sm" role="menuitem" tabindex="-1" id="menu-item-3">
            Sign out
          </button>
        </form>
      </div>

      </q-list>

    </div>
  </div>
</template>

<script>
export default {
  name: "ProfileDropdown",
  data () {
    return {
      showList: false
    }
  },
  methods: {
    show() {
      console.log('cliked')
      this.showList !== this.showList
    }
  }
}
</script>

<style scoped>

</style>
