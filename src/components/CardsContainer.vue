<template>
  <div class="container-card">
    <p class="container-card__title">CONTAINER CARD</p>
    <div class="container-card__grid">
      <component
        v-for="(card, index) in data.sub_cards"
        :key="index"
        :is="defineComponent(card.type)"
        :data="card"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import CardImage from "@/components/CardImage.vue";
import CardText from "@/components/CardText.vue";

export default defineComponent({
  name: "CardsContainer",
  components: { CardImage, CardText },
  props: {
    data: {
      default: {},
    },
  },
  methods: {
    defineComponent(currentComponent: string) {
      switch (currentComponent) {
        case "IMAGE_CARD":
          return CardImage;
        case "TEXT_CARD":
          return CardText;
      }
    },
  },
});
</script>

<style lang="sass" scoped>
.container-card
  width: 100%
  padding: 50px 20px 0
  &__title
    font-size: 20px
    text-align: center
  &__grid
    margin-top: 30px
    background: $white
    display: grid
    grid-template-columns: repeat(auto-fill, 300px)
    grid-gap: 20px
    justify-content: center
</style>
