<template>
  <div class="app">
    <div class="app__navigation">
      <router-link class="link" to="/">Posts</router-link>
      <router-link class="link" to="/cards">Cards</router-link>
    </div>
    <router-view />
  </div>
</template>

<style lang="sass">
@import "@/styles/global.sass";
</style>

<style lang="sass">
.app
  &__navigation
    max-width: 400px
    height: 50px
    margin: 0 auto
    display: grid
    grid-template-columns: 1fr 1fr
    grid-gap: 30px
    padding: 20px 20px 0
    .link
      padding: 10px
      font-size: 15px
      border-radius: 20px
      box-shadow: 0 0 10px rgba($black, .1)
      display: flex
      justify-content: center
      align-items: center
      text-decoration: none
      text-align: center
      text-transform: capitalize
      color: $black
    .router-link-exact-active
      box-shadow: 0 0 20px rgba($corporate, .5)
</style>
