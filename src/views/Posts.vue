<template>
  <div class="posts">
    <button class="gb-gradient-button" @click="filterToggle">
      {{ isSortByAuthor ? "All posts" : "Sort by author" }}
    </button>
    <div
      v-for="(author, index) in authorsGroups"
      v-show="isSortByAuthor"
      :key="index"
      class="posts__grouped"
    >
      <div class="author-wrapper">
        <img
          v-if="author.authorPosts[0].author.avatar"
          class="author-avatar"
          :src="author.authorPosts[0].author.avatar"
          alt=""
        />
        <div v-else class="gb-author-avatar-anonymous">^_^</div>
        <div>
          <span
            class="author-name"
            v-html="author.authorPosts[0].author.name"
          ></span>
          <a
            class="author-username"
            v-html="author.authorPosts[0].author.username"
          ></a>
        </div>
      </div>
      <div class="grid">
        <div
          v-for="(post, index) in author.authorPosts"
          :key="index"
          class="item"
        >
          <p class="title" v-html="post.title" />
          <div class="content" v-html="post.content"></div>
          <div class="link-wrapper">
            <router-link :to="`/posts/${post.id}`">Learn More</router-link>
          </div>
        </div>
      </div>
    </div>
    <div v-show="!isSortByAuthor" class="posts__mixed">
      <div v-for="(post, index) in posts" :key="index" class="item">
        <p class="title" v-html="post.title" />
        <div class="author">
          <img
            v-if="post.author.avatar"
            class="author-avatar"
            :src="post.author.avatar"
            alt=""
          />
          <div v-else class="gb-author-avatar-anonymous">^_^</div>
          <div>
            <span class="author-name" v-html="post.author.name"></span>
            <a class="author-username" v-html="post.author.username"></a>
          </div>
        </div>
        <div class="content" v-html="post.content"></div>
        <div class="link-wrapper">
          <router-link :to="`/posts/${post.id}`">Learn More</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import posts from "@/assets/api-endpoints/posts.json";
interface Posts {
  posts: {
    id: string;
    title: string;
    content?: string;
    link: string;
    author: {
      id: string;
      name: string;
      username: string;
      avatar?: string;
    };
  }[];
  authorsGroups?: {
    authorId: string;
    authorPosts?: Posts["posts"];
  }[];
  isSortByAuthor: boolean;
}
export default defineComponent({
  name: "Posts",
  data(): Posts {
    return {
      posts,
      isSortByAuthor: false,
    };
  },
  computed: {
    authorsGroups(): any {
      const AUTHORS: string[] = [];

      this.posts.forEach((post) => {
        if (!AUTHORS.includes(post.author.id)) {
          AUTHORS.push(post.author.id);
        }
      });

      const GROUPS: Posts["authorsGroups"] | any = [];

      AUTHORS.forEach((author) => {
        GROUPS?.push({ authorId: author, authorPosts: [] });
      });

      this?.posts?.forEach((post) => {
        GROUPS?.forEach((group: any) => {
          if (post.author.id === group.authorId) {
            group?.authorPosts?.push(post);
          }
        });
      });

      return GROUPS;
    },
  },
  methods: {
    filterToggle() {
      this.isSortByAuthor = !this.isSortByAuthor;
    },
  },
});
</script>
<style lang="sass" scoped>
.posts
  height: 100%
  padding: 30px 0
  &__grouped
    position: relative
    padding: 70px 20px 30px
    border-radius: 20px
    border: solid 2px rgba($black, .2)
    margin: 100px 20px 0
    .author-wrapper
      position: absolute
      top: -40px
      left: 50%
      transform: translateX(-50%)
      z-index: 1
      height: 80px
      display: flex
      justify-content: center
      align-items: center
      padding: 10px 20px
      border-radius: 50px
      border: solid 2px rgba($corporate, .5)
      background-color: $white
    .author-avatar
      height: 50px
      width: 50px
      border-radius: 50%
      object-fit: cover
    .author-name
      display: block
      margin-left: 20px
      font-size: 18px
      line-height: 150%
      font-style: italic
    .author-username
      display: block
      margin-left: 20px
      font-size: 14px
      line-height: 150%
      opacity: .7
    .grid
      display: grid
      grid-template-columns: 1fr 1fr 1fr
      grid-gap: 20px
    .item
      display: flex
      flex-direction: column
      padding: 30px 20px
      box-shadow: 10px 10px 25px rgba($black, .1)
      border-radius: 15px
    .title
      font-size: 22px
      text-align: center
      font-weight: 600
      color: $corporate
    .subtitle
      padding-top: 20px
    .content
      padding-top: 30px
      line-height: 130%
      flex-grow: 1
    .link-wrapper
      padding-top: 20px
      display: flex
      justify-content: center
    .link
      text-decoration: underline
      &:hover
        text-decoration: none

  &__mixed
    display: grid
    grid-template-columns: 1fr 1fr 1fr
    grid-gap: 20px
    padding: 60px 20px 0
    .item
      display: flex
      flex-direction: column
      padding: 30px 20px
      box-shadow: 10px 10px 25px rgba($black, .1)
      border-radius: 15px
    .title
      font-size: 22px
      text-align: center
      font-weight: 600
      color: $corporate
    .subtitle
      padding-top: 20px
    .author
      padding-top: 20px
      display: flex
      align-items: center
    .author-avatar
      height: 50px
      width: 50px
      border-radius: 50%
      object-fit: cover
    .author-name
      display: block
      margin-left: 20px
      font-size: 18px
      line-height: 150%
      font-style: italic
    .author-username
      display: block
      margin-left: 20px
      font-size: 14px
      line-height: 150%
      opacity: .7
    .content
      padding-top: 30px
      line-height: 130%
      flex-grow: 1
    .link-wrapper
      padding-top: 20px
      display: flex
      justify-content: center
    .link
      text-decoration: underline
      &:hover
        text-decoration: none
        color: $corporate

  @media (max-width: $lg)
    &__grouped
      .grid
      grid-template-columns: 1fr 1fr
    &__mixed
      grid-template-columns: 1fr 1fr
  @media (max-width: $md)
    &__grouped
      .grid
      grid-template-columns: 1fr
    &__mixed
      grid-template-columns: 1fr
  @media (max-width: $xs)
    &__grouped
      margin: 100px 5px 0
      padding: 70px 10px 30px
      .author-wrapper
        width: 280px
    &__mixed
      grid-template-columns: 1fr
</style>
