<template>
  <header></header>
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
      appState: computed(() => AppState),
      get background() {
        const backgrounds = {
          1: 'https://images.unsplash.com/photo-1585049593555-70a36652e150?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
          2: 'https://images.unsplash.com/photo-1496062031456-07b8f162a322?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
          3: 'https://images.unsplash.com/photo-1615744455875-7ad33653e8c4?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
          4: 'https://images.unsplash.com/photo-1582912220545-456a19c1449f?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
          5: 'https://images.unsplash.com/photo-1558986889-aa828ae63a6d?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
          6: '',
          7: '',
          8: '',
          9: '',
          10: '',
          11: '',
          12: '',
        }

        return `url(${backgrounds[new Date().getMonth() + 1]})`
      }
    }
  }
}
</script>
<style lang="scss">
@import "./assets/scss/main.scss";

main {
  background-image: v-bind(background);
  background-size: cover;
  background-position: center;
}

* {
  font-family: "Raleway", sans-serif;
}
</style>
