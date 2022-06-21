<template>
  <form class="px-2" @submit.prevent="createFlower()">
    <div class="mb-3">
      <label for="name" class="form-label fst-italic text-light">
        <div class="text-shadow">Flower Name...</div>
      </label>
      <input
        type="text"
        class="form-control"
        id="name"
        aria-describedby="flower-name"
        v-model="editable.name"
        required
      />
    </div>
    <div class="mb-3 d-flex justify-content-between">
      <div class="small-input">
        <label for="quantity" class="form-label fst-italic text-light"
          >Quantity...</label
        >
        <input
          type="number"
          min="1"
          class="form-control"
          id="quantity"
          step="0.01"
          aria-describedby="flower-quantity"
          v-model="editable.quantity"
          required
        />
      </div>
      <div class="small-input">
        <label for="price" class="form-label fst-italic text-light"
          >Price...</label
        >
        <input
          type="number"
          step="0.01"
          min="0.01"
          class="form-control"
          id="price"
          aria-describedby="flower-price"
          v-model="editable.price"
          required
        />
      </div>
    </div>
    <div class="d-flex justify-content-end mt-3">
      <button class="btn btn-success text-light border border-light fs-3">
        <i class="mdi mdi-plus"></i>
      </button>
    </div>
  </form>
</template>


<script>
import { computed, ref } from '@vue/reactivity'
import Pop from '../utils/Pop'
import { logger } from '../utils/Logger'
import { flowersService } from '../services/FlowersService'
import { AppState } from '../AppState'
export default {
  setup() {
    const editable = ref({})
    return {
      editable,
      createFlower() {
        try {
          flowersService.create(editable.value)
          Pop.toast(`Added ${editable.value.name}`, 'success', 'bottom')
          editable.value = {}
        } catch (error) {
          logger.error(error)
          Pop.toast(error.message, 'error')
        }
      }
    }
  }
}
</script>


<style lang="scss" scoped>
label {
  text-shadow: 1px 1px 2px #000000;
}
.small-input {
  width: 25%;
}
</style>