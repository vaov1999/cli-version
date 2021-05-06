<template>
  <div class="card-text">
    <p class="card-text__title" v-if="data.name" v-html="data.name" />
    <p class="card-text__source" v-if="data.source" v-html="data.source" />
    <p class="card-text__content" v-if="data.content" v-html="data.content" />
    <p class="card-text__empty" v-if="!data.content && !data.source">
      OOps! <br />Content will be soon :)
    </p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "CardText",
  props: {
    data: {
      default: {},
    },
  },
});
</script>

<style lang="sass" scoped>
.card-text
  height: 400px
  padding: 20px
  box-shadow: 0 0 20px rgba($black, .1)
  border-radius: 10px
  overflow: auto
  &__title
    text-align: center
    font-size: 20px
    line-height: 150%
  &__source
    padding-top: 20px
    font-size: 14px
    line-height: 150%
  &__content
    padding-top: 20px
    font-size: 15px
    color: royalblue
  &__empty
    padding-top: 50px
    font-size: 25px
    color: #999
    text-align: center
</style>
