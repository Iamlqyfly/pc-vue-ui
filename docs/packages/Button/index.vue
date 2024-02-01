<template>
  <button :class="[type ? `q-button q-button--${type}` : '']">
    <slot></slot>
  </button>
</template>

<script lang="ts" setup>
  const props = defineProps({
    type: String,
  });
</script>

<style scoped lang="less">
  .q-button {
    appearance: none;
    padding: 5px 10px;
    background: rgb(137, 212, 218);
    border: none;
    border-radius: 4px;
    color: #fff;
    margin: 0 10px;
  }
  .q-button--primary {
    background-color: rgb(74, 130, 212);
  }

  .q-button--info {
    background-color: rgb(163, 191, 233);
  }

  .q-button--success {
    background-color: rgb(92, 218, 180);
  }

  .q-button--warning {
    background-color: rgb(221, 219, 77);
  }

  .q-button--danger {
    background-color: rgb(233, 56, 56);
  }
</style>