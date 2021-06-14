<template>
  <Home msg="Welcome to Your Vue.js App"/>
</template>

<script>
import Home from './components/Home.vue'

export default {
  name: 'App',
  components: {
    Home
  }
}
</script>

<style lang="scss">
:root{
--color-grey-light-1: #f7f7f7;
--color-red-1: #fa374f;
--color-purple-1: #674ec6;
--color-green-1: #00cc77;
--color-orange-1: #eb9404;
}
html{
  font-size: 62.5%;
}
body{
    background-color: #e1e1e1;
  }
  *,
*::after,
*::before {
  margin: 0;
  padding: 0;
  box-sizing: inherit; }
.container{
  max-width: 90%;
  margin: 0 auto;
}
.flex{
  display: flex;
  flex-wrap: wrap;
  gap:1rem;
  &.flex-3 > *{
    width: calc(33.33333% - 1rem - 2rem);
  }
  &.flex-4 > *{
    width: calc(25% - 1rem - 2rem);
  }
  &.flex-2 > *{
    width: calc(50% - 1rem - 2rem);
  }
  &.flex-center{
    justify-content: center;
  }
  @media screen and (max-width: 720px){
    &.flex-md-1 > *{
    width: 100%;
  }
    &.flex-md-2 > *{
    width: calc(50% - 1rem - 2rem);
  }
  }
  @media screen and (max-width: 530px){
    &.flex-sm-1 > *{
    width: 100%;
  }
  }
  }
  .mt-10{
    margin-top: 10px;
  }
  .border{
    border: gray 1px solid;
  }
</style>
