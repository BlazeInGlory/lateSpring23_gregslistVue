<template>
  <div class="rounded elevation-5" v-if="houseProp">
      <router-link :to="{ name: 'houseDetails', params: { houseId: houseProp?.id } }">
          <img class="img-fluid rounded-top" :src="houseProp?.imgUrl" alt="">
      </router-link>
      <div class="p-2">
          <h1>{{ houseProp?.model }}</h1>
          <div class="d-flex justify-content-between align-items-center">
              <p>{{ houseProp?.price }}</p>
              <img class="creator-img" :src="houseProp?.creator.picture" alt="">
          </div>
          <div class="text-end py-2">
              <button @click="deleteHouse(houseProp?.id)" v-if="houseProp?.creator.id == account?.id" class="btn btn-danger"
                  title="Delete house"><i class="mdi mdi-delete"></i> </button>
          </div>
      </div>
  </div>
</template>

<script>
import { computed } from 'vue';
import { House } from '../models/House.js';
import { AppState } from '../AppState.js';
import { logger } from '../utils/Logger.js';
// import { HouseService } from '../services/HouseService.js';
export default {
  props: {
      houseProp: { type: House, required: true }
  },
  setup() {

      return {

          async deleteHouse(houseId) {
              try {
                  await HouseService.deleteHouse(houseId)
              } catch (error) {
                  logger.error(error)
                  Pop.toast(error.message, 'error')
              }
          },

          account: computed(() => AppState.account)
      };
  },
}
</script>

<style></style>