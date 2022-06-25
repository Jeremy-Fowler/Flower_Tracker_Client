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
      <div class="d-flex justify-content-between">
        <button
          class="btn btn-primary mb-3"
          type="button"
          @click="toggleDropdown('#budget-input')"
          aria-expanded="false"
        >
          Budget?
        </button>
        <button
          class="btn btn-primary mb-3"
          type="button"
          @click="toggleDropdown('#labor-input')"
          aria-expanded="false"
        >
          Adjust Labor?
        </button>
      </div>
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
      <div class="collapse" id="labor-input">
        <div class="d-flex justify-content-between mb-3">
          <button
            type="button"
            :class="`btn btn-${
              editable.labor == 0.8 ? 'success' : 'outline-dark'
            }`"
            @click="adjustLabor(0.8)"
          >
            20%
          </button>
          <button
            type="button"
            :class="`btn btn-${
              editable.labor == 0.75 ? 'success' : 'outline-dark'
            }`"
            @click="adjustLabor(0.75)"
          >
            25%
          </button>
          <button
            type="button"
            :class="`btn btn-${
              editable.labor == 0.7 ? 'success' : 'outline-dark'
            }`"
            @click="adjustLabor(0.7)"
          >
            30%
          </button>
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
import { Collapse, Dropdown, Modal } from 'bootstrap'
export default {
  setup() {
    const editable = ref({ budget: null, labor: .75 })
    return {
      editable,
      createArrangement() {
        try {
          arrangementsService.clear()
          arrangementsService.createArrangement(editable.value)
          editable.value = { budget: null, labor: .75 }
          Modal.getOrCreateInstance('#arrangement-modal').hide()
        } catch (error) {
          logger.error(error)
          Pop.toast(error.message, 'error')
        }
      },
      adjustLabor(percent) {
        editable.value.labor = percent
        logger.log(editable.value.labor)
      },
      toggleDropdown(id) {
        try {
          // Collapse.getOrCreateInstance(id)
          const budgetElem = Collapse.getInstance('#budget-input')
          if (budgetElem) {
            budgetElem.hide()
          }
          const laborElem = Collapse.getInstance('#labor-input')
          if (laborElem) {
            laborElem.hide()
          }
          Collapse.getOrCreateInstance(id).toggle()
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