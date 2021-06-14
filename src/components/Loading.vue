<template>
  <div class="loading"></div>
</template>

<style>
.loading {
  animation: loading 3s infinite;
  background: orange;
  clip-path: circle(25%);
  height: 170px;
  width: 200px;
}
@keyframes loading {
  0% { clip-path: circle(25%); }
  50% { clip-path: circle(10%); }
  100% { clip-path: circle(25%); }
}
</style>
