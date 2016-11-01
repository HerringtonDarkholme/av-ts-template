<template>
<div id="app">
  <h1 @click="hello">
    \{{name}} is the best girl!
  </h1>
  <h2>Essential Links</h2>
  <ul>
    <li><a href="https://vuejs.org" target="_blank">Core Docs</a></li>
    <li><a href="https://github.com/HerringtonDarkholme/av-ts" target="_blank">av-ts docs</a></li>
  </ul>
</div>
</template>

<script>
import { Vue, Component } from 'av-ts'

@Component
class App extends Vue {
  name = 'Rem'

  hello() {
    alert(this.name + ' is the best girl!')
  }
}

export default App
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
