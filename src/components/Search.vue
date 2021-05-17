<template>
  <div class="tw-text-black">
    <q-input
    placeholder="Search"
    class="q-ma-xs q-ml-xs-xs bg-white col-xs-9 col-sm-10 col-md-11 tw-rounded-3xl"
    outlined
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
