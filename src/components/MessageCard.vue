<template>
  <div class="tw-py-2">
    <div class="tw-h-35 tw-w-auto tw-mx-10 tw-rounded-2xl tw-bg-white hover:tw-bg-gray-200 tw-py-4 tw-px-1 md:tw-px-1 lg:tw-px-5 overflow-hidden tw-flex-grow-0 tw-flex-shrink-0">
      <div class="tw-flex tw-justify-between tw-items-center">
        <div class="tw-h-9 tw-w-10 tw-rounded-xl" :style="{backgroundColor: randomColor()}">
          <div class="tw-flex tw-justify-center tw-pt-2 tw-text-white">{{ userName | firstChar }}</div>
        </div>
        <div class="tw-text-xs tw-text-gray-400 tw-leading-5">{{ time }}</div>
      </div>
      <div class="tw-pt-4">
        <div class="tw-text-sm tw-leading-5">
          <q-item class="tw--ml-3 tw--mt-2">
            <q-item-section>
              <q-item-label class="tw-text-gray-800">{{ userName }}</q-item-label>
              <q-item-label caption style="color: darkgrey" class="tw-pt-2 tw-w-36 tw-truncate">{{ caption }}</q-item-label>
            </q-item-section>
            <q-item-section avatar class="tw-absolute tw-right-0 tw-inset-y-0 ">
              <svg class="tw-w-5 tw-h-5 tw-text-gray-800 hover:tw-text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M9 5l7 7-7 7"></path>
              </svg>
            </q-item-section>
          </q-item>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
name: "MessageCard",
  data (){
    return {
      colorCache: {},
      userName: 'James Robinson',
      caption: 'I need some Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad animi aperiam asperiores aspernatur consequatur enim esse eveniet explicabo, fuga inventore laboriosam maiores nesciunt nisi nobis quibusdam totam ut voluptatum! Exercitationem.',
      time: 'Jan 2, 12:31pm',
      messages: [
        {
          userName: 'James Robinson',
          caption: 'I need some Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad animi aperiam asperiores aspernatur consequatur enim esse eveniet explicabo, fuga inventore laboriosam maiores nesciunt nisi nobis quibusdam totam ut voluptatum! Exercitationem.',
          time: 'Jan 12, 12:31pm'
        },
        {
          userName: 'James Robinson',
          caption: 'I need some Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad animi aperiam asperiores aspernatur consequatur enim esse eveniet explicabo, fuga inventore laboriosam maiores nesciunt nisi nobis quibusdam totam ut voluptatum! Exercitationem.',
          time: 'Jan 18, 12:31pm'
        },
        {
          userName: 'James Robinson',
          caption: 'I need some Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad animi aperiam asperiores aspernatur consequatur enim esse eveniet explicabo, fuga inventore laboriosam maiores nesciunt nisi nobis quibusdam totam ut voluptatum! Exercitationem.',
          time: 'Jan 30, 12:31pm'
        },
        {
          userName: 'James Robinson',
          caption: 'I need some Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad animi aperiam asperiores aspernatur consequatur enim esse eveniet explicabo, fuga inventore laboriosam maiores nesciunt nisi nobis quibusdam totam ut voluptatum! Exercitationem.',
          time: 'Feb 2, 12:31pm'
        },
        {
          userName: 'James Robinson',
          caption: 'I need some Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad animi aperiam asperiores aspernatur consequatur enim esse eveniet explicabo, fuga inventore laboriosam maiores nesciunt nisi nobis quibusdam totam ut voluptatum! Exercitationem.',
          time: 'Feb 13, 12:31pm'
        }
      ]
    }
  },
  methods: {
    randomColor(id) {
      const r = () => Math.floor(256 * Math.random());
      return this.colorCache[id] || (this.colorCache[id] = `rgb(${r()}, ${r()}, ${r()})`);
    }
  },
  filters: {
    firstChar(value) {
      if (!value) return ''
      value = value.charAt(0)
      return value
    }
  }
}
</script>

<style scoped>

</style>
