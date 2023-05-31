<template>
    <div class="container-fluid">

<section class="row p-3 justify-content-end">
    <button class="col-3 btn btn-warning" data-bs-toggle="modal" data-bs-target="#create-house">Create House
        </button>
</section>
<section class="row">
    <div class="col-md-3 my-3" v-for="house in housesInAppState" :key="house.id">
        <HouseCard :houseProp="house" />
    </div>
</section>

</div>
</template>

<script>
import { computed, onMounted } from 'vue';
import { logger } from '../utils/Logger.js';
import { houseService } from '../services/HouseService.js'
import Pop from '../utils/Pop.js';
import { AppState } from '../AppState.js';
export default {
    setup() {

        async function getHouses() {
            try {
                await houseService.getHouses()
                logger.log('getting cars')
            } catch (error) {
                Pop.error(error.message)
                logger.log(error)
            }
        }
        onMounted(() => {
            getHouses()
            return {};
        })

        return {
          houses:computed (()=>AppState.houses)
        }
    },
};
</script>

<style>

</style>