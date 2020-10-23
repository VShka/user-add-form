<template>
  <div id="app">
    <addUserForm />
  </div>
</template>

<script>
import addUserForm from './components/addUserForm';
export default {
  name: 'App',
  components: {
    addUserForm
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
