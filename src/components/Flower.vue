<template>
  <div class="
      d-flex
      justify-content-between
      align-items-center
      text-dark
      mx-1
      mb-3
      selectable
    " data-bs-toggle="modal" :data-bs-target="'#edit-flower-modal-' + flower.id">
    <span class="d-flex align-items-center">
      {{ flower.quantity }} {{ flower.name }}:</span>
    <span>$ {{ (flower.price * flower.quantity).toFixed(2) }}</span>
  </div>
  <Modal :id="'edit-flower-modal-' + flower.id">
    <template #modal-header>Edit Flower</template>
    <template #modal-body>
      <EditFlower :flower="flower" :total="total" />
    </template>
  </Modal>
</template>


<script>
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
  setup() {
    return {
    }
  }
}
</script>


<style lang="scss" scoped></style>