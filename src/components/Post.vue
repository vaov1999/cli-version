<template>
  <div class="post">
    <h1 class="post__title">{{ post.title }}</h1>
    <div class="post__author">
      <img v-if="post.author.avatar" class="image" :src="post.author.avatar" />
      <div v-else class="gb-author-avatar-anonymous">$_$</div>
      <div>
        <p class="name">{{ post.author.name }}</p>
        <p class="username">{{ post.author.username }}</p>
      </div>
    </div>
    <div class="post__content">{{ post.content }}</div>
    <a class="gb-gradient-button" :href="link" target="_blank">Learn More</a>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import POSTS from "@/assets/api-endpoints/posts.json";

export default defineComponent({
  computed: {
    post() {
      const POST = POSTS.filter((post) => {
        return post.id === this.$route.params.id;
      });
      return POST[0];
    },
  },
});
</script>

<style lang="sass" scoped>
$contentWidth: 840px

.post
  &__title
    max-width: $contentWidth
    margin: 0 auto
    padding: 40px 20px 0
    font-size: 50px
    color: rgba($black, .5)
    text-align: center

  &__author
    max-width: $contentWidth
    margin: 0 auto
    padding: 50px 20px 0
    display: flex
    align-items: center
    .image
      width: 100px
      height: 100px
      border-radius: 50%
      object-fit: cover
    .name
      padding-left: 20px
      font-size: 30px
    .username
      padding-top: 10px
      padding-left: 20px
      font-size: 20px
      color: rgba($black, .5)

  &__content
    max-width: $contentWidth
    margin: 0 auto
    padding: 30px 20px
    line-height: 140%
    font-size: 16px
  .gb-gradient-button
    margin: 40px auto 30px

  @media (max-width: $lg)
    &__title
      font-size: 30px
    &__author
      .image
        width: 50px
        height: 50px
      .name
        font-size: 18px
      .username
        padding-top: 5px
        font-size: 16px
</style>
