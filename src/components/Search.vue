<template>
  <div class="tw-py-2">
    <q-input
      placeholder="Search"
      class="tw-text-md"
      style="opacity: 0.8"
      outlined
      autogrow
      rounded
      dense
      debounce="500"
      v-model="filterItem"
    >
    <template v-slot:prepend>
      <q-icon class="tw-text-gray-400" style="opacity: 1" name="search" />
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
