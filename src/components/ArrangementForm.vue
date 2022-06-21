<template>
  <form @submit.prevent="createArrangement">
    <div class="modal-body">
      <label for="vase" class="form-label fst-italic">Vase Price...</label>
      <div class="input-group mb-3">
        <span class="input-group-text">$</span>
        <input
          type="number"
          class="form-control"
          step="0.01"
          min="0.01"
          aria-label="Amount (to the nearest dollar)"
          v-model="editable.vasePrice"
          required
          id="vase"
          aria-describedby="vase-price"
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
        <div class="mb-3 input-group">
          <span class="input-group-text">$</span>

          <input
            type="number"
            step="0.01"
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
          arrangementsService.clear()
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