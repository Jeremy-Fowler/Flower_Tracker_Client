<template>
  <form class="px-2 mt-3" @submit.prevent="createFlower()">
    <div class="mb-3">
      <label for="name" class="form-label fst-italic text-light"
        >Flower Name...</label
      >
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
          class="form-control"
          id="quantity"
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
          class="form-control"
          id="price"
          aria-describedby="flower-price"
          v-model="editable.price"
          required
        />
      </div>
    </div>
    <div class="d-flex justify-content-end">
      <button class="btn btn-success text-light border border-light">
        <i class="mdi mdi-plus"></i>
      </button>
    </div>
  </form>
</template>


<script>
import { ref } from '@vue/reactivity'
import Pop from '../utils/Pop'
import { logger } from '../utils/Logger'
import { flowersService } from '../services/FlowersService'
export default {
  setup() {
    const editable = ref({})
    return {
      editable,
      createFlower() {
        try {
          flowersService.create(editable.value)
          Pop.toast(`Added ${editable.value.name}`, 'success')
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
  text-shadow: 1px, 1px, rgb(0, 0, 0);
}
.small-input {
  width: 25%;
}
</style>