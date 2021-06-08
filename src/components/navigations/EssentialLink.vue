<template>
  <q-list class="tw-mt-4">
    <div v-for="link in links" :key="link.index">
      <div>
        <q-expansion-item
          v-if="link.paymentLinks"
          class="tw-leading-5 tw-text-md tw-font-semibold tw-text-gray-600"
          :header-inset-level="0.2"
          :content-inset-level="0.3"
          expand-icon="eva-arrow-down"
          dense-toggle
          default-opened
          :header-style="{ fontSize: '15px' }"
          :label="link.name"
          :content-style="{ backgroundColor: 'red' }"
          :expand-icon-class="['']"
        >
          <!--
              <svg class="tw-absolute absolute-right tw-transform rotate-180 tw-w-6 tw-h-6" fill="currentColor" stroke="" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 15l7-7 7 7"></path>
                </svg>
          -->
          <div v-for="link in link.paymentLinks" :key="link.index">
            <q-item clickable exact v-ripple class="tw-font-normal tw-pt-2 tw--mt-2 ">
              <q-item-section
                avatar
              >
                <q-icon :name="link.icon" class="" size="19px" />
              </q-item-section>
              <q-item-section>
                <q-item-label class="tw--ml-5 tw-text-xs"> {{ link.item }} </q-item-label>
              </q-item-section>
            </q-item>
          </div>
        </q-expansion-item>
      </div>
    </div>

    <q-separator class="tw-my-2 tw-gray-100 tw-mx-4" />

      <div v-for="link in links" :key="link.index" class="">
        <div>
          <q-expansion-item
          v-if="link.commerceLinks"
          class="tw-leading-5 tw-text-md tw-font-semibold tw-text-gray-600"
          :header-inset-level="0.2"
          :content-inset-level="0.3"
          expand-icon="eva-arrow-down"
          dense-toggle
          expand-separator
          :header-style="{ fontSize: '15px' }"
          :label="link.name"
        >
          <div v-for="link in link.commerceLinks" :key="link.index">
            <q-item clickable exact v-ripple class="tw-font-normal tw-pt-2 tw--mt-2">
              <q-item-section
                avatar
              >
                <q-icon :name="link.icon" class="" size="19px" />
              </q-item-section>
              <q-item-section>
                <q-item-label class="tw--ml-5 tw-text-xs"> {{ link.item }} </q-item-label>
              </q-item-section>
            </q-item>
          </div>
        </q-expansion-item>
        </div>
      </div>

    <q-separator class="tw-my-2 tw-gray-100 tw-mx-4" />

    <div v-for="link in links" :key="link.index" class="">
      <q-item
        v-if="!link.paymentLinks && !link.commerceLinks"
        :to="link.to"
        class="tw-text-gray-600"
        clickable
        v-ripple
        exact
        dense
      >
        <q-item class="tw-font-normal tw--mt-2">
          <q-item-section
            avatar
          >
            <q-icon :name="link.icon" class="" size="19px" />
          </q-item-section>
          <q-item-section style="margin-left: -17px" class="tw-mt-1">
            <q-item-label class="tw-flex tw-justify-center tw-items-center tw-text-xs"> {{ link.item }} </q-item-label>
          </q-item-section>
        </q-item>
      </q-item>
    </div>

  </q-list>

</template>

<script>
export default {
  name: 'EssentialLink',
  data() {
    return {
      links: [
        {
          name: 'Payments',
          paymentLinks: [
            {itemTo: '/transactions', item: 'Transactions', icon: 'announcement'},
            {itemTo: '/customers', item: 'Customers', icon: 'announcement'},
            {itemTo: '/payouts', item: 'Payouts', icon: 'announcement'},
            {itemTo: '/balances', item: 'Balances', icon: 'announcement'},
            {itemTo: '/subscriptions', item: 'Subscriptions', icon: 'announcement'},
            {itemTo: '/payments-plans', item: 'Payment plans', icon: 'announcement'}
          ]
        },
        {
          name: 'Commerce',
          commerceLinks: [
            {itemTo: '/commerce', item: 'Transactions', icon: 'announcement'},
            {itemTo: '/balances', item: 'Balances', icon: 'announcement'},
            {itemTo: '/subscriptions', item: 'Subscriptions', icon: 'announcement'}
          ]
        },
        { to: '/referrals', item: 'Referrals', icon: 'dashboard' },
        { to: '/audits', item: 'Audit logs', icon: 'dashboard' },
        { to: '/settings', item: 'Settings', icon: 'settings' }
      ],
      expandClass: {
        fontSize: '20px',
        textColor: 'green'
      }
    }
  }
}
</script>

<style scoped>
.q-expansion-item__toggle-icon{
  font-size: 20px !important;
}
.large-icon i.q-icon {
  font-size: 30px;
}
</style>
