<template>
  <div class="modal-body">
    <div class="d-flex justify-content-between mb-3">
      <span>{{ arrangement.budget ? "Budget:" : "Total:" }}</span>
      <span
        class="fw-bold"
        :class="{ 'text-danger': arrangement.budget && total < 0 }"
        >${{ total }}</span
      >
    </div>
    <div class="d-flex justify-content-between align-items-center">
      <span>{{ flower.name }}: ${{ flower.price.toFixed(2) }} each</span>
      <span>
        <button class="btn btn-warning" @click="editFlower(false)">
          <i class="mdi mdi-minus"></i>
        </button>
        <span class="fs-3 mx-3">{{ flower.quantity }}</span>
        <button class="btn btn-warning" @click="editFlower(true)">
          <i class="mdi mdi-plus"></i>
        </button>
      </span>
    </div>
  </div>
  <div class="modal-footer d-flex justify-content-between">
    <button class="btn btn-outline-danger" @click="removeFlower()">
      Delete
    </button>
    <button class="btn btn-success text-light" data-bs-dismiss="modal">
      Save
    </button>
  </div>
</template>


<script>
import { Modal } from 'bootstrap'
import { flowersService } from '../services/FlowersService'
import { logger } from '../utils/Logger'
import Pop from '../utils/Pop'
import { computed } from '@vue/reactivity'
import { AppState } from '../AppState'
export default {
  props: {
    flower: {
      type: Object,
      required: true
    },
    total: {
      type: String,
      required: true
    }
  },
  setup(props) {
    return {
      arrangement: computed(() => AppState.arrangement),
      editFlower(bool) {
        try {
          flowersService.edit(props.flower.id, bool)
        } catch (error) {
          logger.error(error)
          Pop.toast(error.message, 'error')
        }
      },
      async removeFlower() {
        if (await Pop.confirm()) {
          try {
            flowersService.remove(props.flower.id)
            Modal.getOrCreateInstance('#edit-flower-modal-' + props.flower.id).hide()
            Pop.toast(`${props.flower.name} removed.`, 'warning', 'bottom-end')
          } catch (error) {
            logger.error(error)
            Pop.toast(error.message, 'error')
          }
        }
      }
    }
  }
}
</script>


<style lang="scss" scoped>
</style>