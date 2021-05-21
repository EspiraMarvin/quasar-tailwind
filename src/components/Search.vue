<template>
  <div class="tw-py-2">
    <q-input
    placeholder="Search"
    class="tw-text-gray-700 bg-grey-1 tw-text-md"
    outlined
    autogrow
    rounded
    dense
    debounce="300"
    v-model="filterItem"
  >
    <template v-slot:prepend>
      <q-icon name="search" />
    </template>
  </q-input>
  </div>

</template>

<script>
export default {
name: "Search"
}
</script>

<style scoped>

</style>
