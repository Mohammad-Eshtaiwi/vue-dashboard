<template>
  <section class="welcome">
      <div class="container">
          <p class="welcome__message">
              Welcome to dynamic dashboard
          </p>
      </div>
  </section>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.welcome{
    margin-top: 10px;
    padding: 2em 0;
    background-color: var(--color-grey-light-1);
    &__message{
        font-size: 1.5rem;
    }
}
</style>