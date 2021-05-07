<template>
  <div class="card-image">
    <img
      class="card-image__image"
      :src="data.source"
      :alt="`${data.name} is broken :(`"
    />
    <p class="card-image__title" v-html="data.name" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "CardImage",
  props: {
    data: {
      default: {},
    },
  },
});
</script>

<style lang="sass" scoped>
.card-image
  height: 400px
  display: flex
  flex-direction: column
  justify-content: space-between
  align-items: center
  padding: 20px
  box-shadow: 0 0 20px rgba($black, .1)
  border-radius: 10px
  &__image
    max-width: 100%
    max-height: 300px
    object-fit: cover
    border-radius: 10px
  &__title
    font-size: 20px
    line-height: 150%
</style>
