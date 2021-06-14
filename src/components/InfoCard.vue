<template>
  <div class="info border">
    <div>
      <h2 class="info__title">{{ info.title }}</h2>
      <p class="info__amount">{{ info.amount }}</p>
      <p class="info__change">
        <span class="info__status" :data-status="info.status">
          <i class="info__change--icon">
            <font-awesome-icon
              :icon="[
                'fas',
                statusIcon
              ]"
            />
          </i>
          {{info.diff}}
        </span>
        since {{since}}
      </p>
    </div>
    <div class="info__icon"><font-awesome-icon :icon="['fas', pickIcon(info.title)]" /></div>
  </div>
</template>

<script>
import pickIcon from "../utils/pickIcon"
export default {
  props: ["info","statusIcon","since"],
  methods: {
    pickIcon
  }
};
</script>

<style lang="scss" scoped>
.info {
  display: flex;
  background-color: var(--color-grey-light-1);
  padding: 1em;
  justify-content: space-between;
  &__title {
    text-transform: uppercase;
    font-weight: 500;
    font-size: 1.6rem;
    margin-bottom: 0.7rem;
  }
  &__amount {
    font-size: 2rem;
    font-weight: 800;
    margin-bottom: 1rem;
  }
  &__change {
    font-size: 1.4rem;
    &--icon {
      display: inline-block;
      margin-right: 0.5rem;
    }
  }
  &__status {
    &[data-status="1"] {
      color: var(--color-green-1);
    }
    &[data-status="-1"] {
      color: var(--color-red-1);
    }
    &[data-status="0"] {
      color: var(--color-orange-1);
    }
  }
  &__icon {
    font-size: 5rem;
    color: gray;
  }
}
</style>
