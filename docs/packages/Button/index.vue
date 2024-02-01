<template>
  <button class="q-button">
    <slot></slot>
  </button>
</template>

<script lang="ts" setup>
</script>

<style scoped lang="less">
  .q-button {
    appearance: none;
    padding: 5px 10px;
    background: rgb(137, 212, 218);
    border: none;
    border-radius: 4px;
    color: #fff;

    &:active {
      background: rgb(92, 10, 243);
    }

    &:not(:last-child) {
      margin-right: 15px;
    }
  }
</style>