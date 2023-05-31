<template>
  <div class="modal-content">
      <div class="modal-header">
          <h1 class="modal-title fs-5" id="exampleModalLabel">Create House</h1>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>

      <form @submit="submitHouseForm()">
          <div class="modal-body" name="modal-body">
              <div class="mb-3">
                  <label for="make" class="form-label">Make</label>
                  <input type="text" v-model="editable.make" required class="form-control" id="make">
              </div>
              <div class="mb-3">
                  <label for="model" class="form-label">Model</label>
                  <input type="text" v-model="editable.model" required class="form-control" id="model">
              </div>
              <div class="mb-3">
                  <label for="year" class="form-label">Year</label>
                  <input type="number" v-model="editable.year" min="1980" required class="form-control" id="year">
              </div>
              <div class="mb-3">
                  <label for="price" class="form-label">Price</label>
                  <input type="number" v-model="editable.price" min="5" required class="form-control" id="price">
              </div>
              <div class="mb-3">
                  <label for="description" class="form-label">Description</label>
                  <input type="text" v-model="editable.description" required class="form-control" id="description">
              </div>
              <div class="mb-3">
                  <label for="imgUrl" class="form-label">ImgUrl</label>
                  <input type="url" v-model="editable.imgUrl" required class="form-control" id="imgUrl">
              </div>
              <select v-model="editable.engineTypes" required class="form-select form-select-lg mb-3"
                  aria-label=".form-select-lg example">
                  <option v-for="engineType in engineTypes" :key="engineType" :value="engineType">{{ engineType }}
                  </option>
              </select>
          </div>
          <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              <button type="submit" class="btn btn-primary">Create House</button>
          </div>
      </form>

  </div>
</template>

<script>
import { ref } from 'vue';
import { logger } from '../utils/Logger.js';
import Pop from '../utils/Pop.js';
import { Modal } from 'bootstrap'
export default {
  setup() {
      const editable = ref({})
      return {

          async submitHouseForm() {
              try {
                  logger.log('submitting the house form')
                  const formData = editable.value
                  window.event.preventDefault()
                  await houseService.createHouse(formData)
                  editable.value = {}
                  Modal.getOrCreateInstance('#create-house').hide()
              } catch (error) {
                  Pop.error(error.message)
                  logger.log(error)
              }
          }


      };
  },
};
</script>

<style></style>