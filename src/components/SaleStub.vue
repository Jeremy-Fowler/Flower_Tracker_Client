<template>
  <div class="m-2 bg-glass border border-info rounded p-2 grow">
    <div
      class="
        d-flex
        justify-content-between
        fw-bold
        text-dark
        border-bottom border-dark
        sticky-top
        mb-2
        fs-3
      "
    >
      <span>Total:</span>
      <span v-if="!arrangement.budget">$ {{ total }} </span>
      <span v-else>
        <span :class="{ 'text-danger': total > arrangement.budget }">
          $ {{ total }}</span
        >
        / $ {{ arrangement.budget }}
      </span>
    </div>
    <div
      v-for="f in flowers"
      :key="f.id"
      class="d-flex justify-content-between text-dark mb-2 fw-bold"
    >
      <span>{{ f.quantity }} {{ f.name }}:</span>
      <span>$ {{ f.price * f.quantity }}</span>
    </div>
    <div class="d-flex justify-content-between text-dark mb-2 fw-bold">
      <span>Vase:</span>
      <span>$ {{ arrangement.vasePrice }}</span>
    </div>
  </div>
</template>


<script>
import { computed } from '@vue/reactivity'
import { AppState } from '../AppState'
export default {
  props: {
    arrangement: {
      type: Object,
      required: true
    }
  },
  setup(props) {
    return {
      flowers: computed(() => AppState.flowers),
      total: computed(() => {
        let price = 0
        price += props.arrangement.vasePrice
        AppState.flowers.forEach(p => {
          price += p.price * p.quantity
        })
        return price
      })
    }
  }
}
</script>


<style lang="scss" scoped>
.grow {
  height: 65vh;
}
.bg-glass {
  background-color: #e9ecefbf;
  backdrop-filter: blur(2px);
}
</style>