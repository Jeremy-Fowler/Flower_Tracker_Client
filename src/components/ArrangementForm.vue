<template>
  <form @submit.prevent="createArrangement">
    <div class="modal-body">
      <div class="mb-3">
        <label for="vase" class="form-label fst-italic">Vase Price...</label>
        <input
          type="number"
          class="form-control"
          id="vase"
          aria-describedby="vase-price"
          v-model="editable.vasePrice"
          required
        />
      </div>
      <button
        class="btn btn-primary mb-3"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#budget-input"
        aria-expanded="false"
        aria-controls="budget-input"
      >
        Budget?
      </button>
      <div class="collapse" id="budget-input">
        <div class="mb-3">
          <input
            type="number"
            class="form-control"
            id="budget"
            placeholder="Budget..."
            v-model="editable.budget"
          />
        </div>
      </div>
    </div>
    <div class="modal-footer">
      <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">
        Close
      </button>
      <button type="submit" class="btn btn-primary">Save</button>
    </div>
  </form>
</template>


<script>
import { ref } from '@vue/reactivity'
import Pop from '../utils/Pop'
import { logger } from '../utils/Logger'
import { arrangementsService } from '../services/ArrangementsService'
import { Modal } from 'bootstrap'
export default {
  setup() {
    const editable = ref({ budget: null })
    return {
      editable,
      createArrangement() {
        try {
          arrangementsService.createArrangement(editable.value)
          editable.value = {}
          Modal.getOrCreateInstance('#arrangement-modal').hide()
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
</style>