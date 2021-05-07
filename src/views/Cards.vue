<template>
  <div class="home-page">
    <template v-for="(card, index) in cards">
      <component
        :is="defineComponent(card.type)"
        v-if="!isSingleComponent(card.type)"
        :key="index"
        :data="card"
        :is-single="isSingleComponent(card.type)"
      />
    </template>
    <div v-if="isSingleComponents" class="home-page__singles">
      <p class="title">Single Components</p>
      <div class="grid">
        <template v-for="(card, index) in cards">
          <component
            :is="defineComponent(card.type)"
            v-if="isSingleComponent(card.type)"
            :key="index"
            :data="card"
          />
        </template>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import CardsContainer from "@/components/CardsContainer.vue";
import CardImage from "@/components/CardImage.vue";
import CardText from "@/components/CardText.vue";
import cards from "@/assets/api-endpoints/cards.json";
import { defineComponent } from "vue";

import { ICards } from "@/interfaces/index.interface";

interface IComponentData {
  cards: ICards[];
}

export default defineComponent({
  components: { CardsContainer, CardImage, CardText },
  data(): IComponentData {
    return {
      cards,
    };
  },
  computed: {
    isSingleComponents(): boolean {
      let isSingles = false;

      this.cards.forEach((component) => {
        if (component.type !== "CONTAINER_CARD") {
          isSingles = true;
        }
      });

      return isSingles;
    },
  },
  methods: {
    defineComponent(currentComponent: string) {
      switch (currentComponent) {
        case "CONTAINER_CARD":
          return CardsContainer;
        case "IMAGE_CARD":
          return CardImage;
        case "TEXT_CARD":
          return CardText;
      }
    },
    isSingleComponent(currentComponent: string): boolean {
      return currentComponent !== "CONTAINER_CARD";
    },
  },
});
</script>

<style lang="sass" scoped>
.home-page
  height: 100%
  padding: 20px 0
  &__singles
    padding: 60px 20px 0
    .title
      text-transform: uppercase
      font-size: 20px
      text-align: center
    .grid
      display: grid
      grid-template-columns: repeat(auto-fill, 300px)
      grid-gap: 20px
      justify-content: center
      padding-top: 40px
      background: $white
    .item
      margin-right: 30px
      margin-top: 20px
</style>
