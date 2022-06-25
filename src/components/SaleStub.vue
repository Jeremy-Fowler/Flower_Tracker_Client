<template>
  <div class="m-2 bg-glass border border-info rounded p-2 grow">
    <div
      class="
        d-flex
        justify-content-between
        text-dark
        border-bottom border-dark
        sticky-top
        mx-1
        mb-3
        fs-3
      "
    >
      <span>Total:</span>
      <span v-if="!arrangement.budget">$ {{ total }} </span>
      <span v-else>
        <span :class="{ 'text-danger': total < 0 }"> $ {{ total }}</span>
        / $ {{ arrangement.budget.toFixed(2) }}
      </span>
    </div>
    <div class="overflow">
      <div class="d-flex justify-content-between text-dark mb-2 mx-1">
        <span>Vase:</span>
        <span>$ {{ arrangement.vasePrice.toFixed(2) }}</span>
      </div>
      <Flower v-for="f in flowers" :key="f.id" :flower="f" :total="total" />
    </div>
  </div>
</template>


<script>
import { computed } from '@vue/reactivity'
import { AppState } from '../AppState'
import Pop from '../utils/Pop'
import { logger } from '../utils/Logger'
import { flowersService } from '../services/FlowersService'
export default {
  props: {
    arrangement: {
      type: Object,
      required: true
    }
  },
  setup(props) {
    return {
      flowers: computed(() => AppState.flowers.sort((a, b) => {
        return b.price - a.price
      })),
      total: computed(() => {
        let price = 0
        if (!props.arrangement.budget) {
          price += props.arrangement.vasePrice
          AppState.flowers.forEach(f => {
            price += (f.price * f.quantity) / props.arrangement.labor
          })
        }
        else {
          price = props.arrangement.budget
          price -= props.arrangement.vasePrice
          price *= props.arrangement.labor
          AppState.flowers.forEach(f => {
            price -= (f.price * f.quantity)
          })
        }
        return price.toFixed(2)
      })
    }
  }
}
</script>


<style lang="scss" scoped>
.grow {
  height: 60vh;
}
.overflow {
  height: 90%;
  overflow: auto;
}
.bg-glass {
  background-color: #e9ecefbf;
}
</style>