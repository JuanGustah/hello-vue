<template>
    <router-link :to="{ name: 'home'}">Home</router-link>
    <p />
    <router-link :to="{ name: 'incremento'}">Incremento</router-link>
    <div>
    <router-view />
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
