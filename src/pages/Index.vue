<template>
  <q-page class="tw-mt-2 tw-font-sans">

    <div class="tw-grid tw-grid-cols-6 tw-gap-4 tw-py-3">
      <div class="tw-col-start-1 tw-col-end-5 tw-bg-indigo-50">
        <div class="tw-pl-4 md:tw-pl-10 tw-mt-8 tw-text-lg tw-font-semibold" style="color: #ffa14e">
          👋️ Hey User
        </div>

        <div class="tw-pl-4 md:tw-pl-10 tw-mt-3 tw-text-2xl tw-font-bold">
          Your dummy dashboard
        </div>
        <div class="tw-mt-10">
          graph components
        </div>
      </div>
      <div class="tw-col-start-5 tw-col-end-7 md:tw-pl-4 lg:tw-pl-4 xl:tw-pl-28">
        <div
          class="tw-w-auto tw-h-full" style="border-top-left-radius: 80px; background: #f9f9f9"
        >
          <div class="tw-flex tw-justify-evenly tw-pt-20 tw-px-8 tw-gap-14 tw-leading-tight">
            <div class="tw-text-gray-400 tw-font-semibold">Stats</div>
            <div class="tw-font-semibold">Messages</div>
          </div>
          <q-separator class="tw-my-4 tw-gray-100 tw-mx-10" />
          <q-scroll-area style="height: 600px" >
            <div
              v-for="item in messageCards"
              :key="item.index"
            >
            <!-- message card component-->
              <MessageCard />
            </div>
          </q-scroll-area>
        </div>
      </div>
    </div>

<!--
   <div class="tw-bg-gray-300 tw-dark:bg-gray-800 tw-rounded-xl tw-mx-10 tw-px-10 tw-flex-wrap">
      <span class="tw-text-gray-900 tw-font-semibold tw-text-2xl">Dark mode is here!</span>
      <p class="tw-text-red-600 tw-dark:text-gray-800 tw-ellipsis">
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
&lt;!&ndash;      <q-space />&ndash;&gt;
      <div class="tw-absolute tw-right-10">
        yooo
      </div>
    </div>

    <div class="tw-bg-gray-100 tw-min-h-screen tw-px-6">
      <Try />
    </div>-->
  </q-page>
</template>

<script>
import MessageCard from "components/MessageCard";
export default {
  name: 'PageIndex',
  components: {
    MessageCard
  },
  data () {
    return {
      messageCards: 5
    }
  }
}
</script>
