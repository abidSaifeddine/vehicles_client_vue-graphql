<template>
  <div id="app">
    <NavigationComponent />
    <RouterView />
  </div>
</template>

<script>
import NavigationComponent from "./components/NavigationComponent";
export default {
  name: 'App',
  components: {
    NavigationComponent

  }
}
</script>

<style>
@import "./assets/bootstrap.min .css";
</style>
