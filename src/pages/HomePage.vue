<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-12 d-flex justify-content-end">
        <button
          data-bs-toggle="modal"
          data-bs-target="#arrangement-modal"
          class="mt-3 me-2 btn btn-success border border-light text-light"
        >
          New Arrangement
        </button>
      </div>
    </div>
    <div v-if="arrangement" class="row">
      <div class="col-12">
        <FlowerForm />
      </div>
      <div class="col-12 mt-4">
        <SaleStub :arrangement="arrangement" />
      </div>
    </div>
  </div>
  <Modal id="arrangement-modal">
    <template #modal-header><i>Start A New Arrangement</i></template>
    <template #modal-body><ArrangementForm /></template>
  </Modal>
</template>

<script>
import { computed, onMounted } from '@vue/runtime-core'
import Pop from '../utils/Pop'
import { logger } from '../utils/Logger'
import { Modal } from 'bootstrap'
import { AppState } from '../AppState'
export default {
  name: 'Home',
  setup() {
    onMounted(async () => {
      try {
        Modal.getOrCreateInstance('#arrangement-modal').show()
      } catch (error) {
        logger.error(error)
        Pop.toast(error.message, 'error')
      }
    })
    return {
      arrangement: computed(() => AppState.arrangement)
    }
  }
}
</script>

<style scoped lang="scss">
</style>
