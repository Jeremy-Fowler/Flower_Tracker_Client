<template>
  <header>
    <!-- <Navbar /> -->
  </header>
  <main>
    <router-view />
  </main>
  <footer></footer>
</template>

<script>
import { computed } from 'vue'
import { AppState } from './AppState'
export default {
  name: 'App',
  setup() {
    return {
      appState: computed(() => AppState)
    }
  }
}
</script>
<style lang="scss">
@import "./assets/scss/main.scss";
main {
  background-image: url("https://images.unsplash.com/photo-1505210644572-b40cdc9c53f3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80");
  background-size: cover;
  background-position: center;
}
* {
  font-family: "Raleway", sans-serif;
}
</style>
