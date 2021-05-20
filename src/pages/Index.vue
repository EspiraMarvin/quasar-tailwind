<template>
  <q-page class="tw-mt-2 tw-font-sans">

    <div class="tw-pl-12 tw-mt-10 tw-text-lg tw-font-semibold" style="color: #ffa14e">
      👋️ Hey User
    </div>

    <div class="tw-pl-12 tw-mt-4 tw-text-2xl tw-font-bold">
      Your dummy dashboard
    </div>

    <div class="tw-bg-gray-300 tw-dark:bg-gray-800 tw-rounded-xl tw-mx-10 tw-px-10 tw-flex-wrap">
      <span class="tw-text-gray-900 tw-font-semibold tw-text-2xl">Dark mode is here!</span>
      <p class="tw-text-red-600 tw-dark:text-gray-800 ellipsis">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque facilis, nihil quidem reiciendis tenetur veritatis! Cumque cupiditate eius et excepturi maiores perspiciatis placeat recusandae? A, ab animi consequatur cupiditate earum eligendi error eum eveniet ex, facere fuga id, impedit ipsa iure labore laboriosam magnam nulla pariatur reiciendis saepe sequi sunt?`
      </p>
      <div class="tw-sr-only">
        This is not visible
      </div>
    </div>

    <div class="tw-flex tw-relative">
      <div class="tw-absolute tw-text-blue-400 tw-left-10">
        <h1 class="tw-text-2xl">Heyyyaa</h1>
      </div>
<!--      <q-space />-->
      <div class="tw-absolute tw-right-10">
        yooo
      </div>
    </div>

    <div class="tw-bg-gray-100 tw-min-h-screen tw-px-6">
      <Try />
    </div>
  </q-page>
</template>

<script>
import Try from "components/Try";
export default {
  name: 'PageIndex',
  components: {
    Try
  }
}
</script>
