<script lang="ts" setup>
import { NLayout } from 'naive-ui'
import FormView from './views/FormView/index.vue'
</script>

<template>
  <n-layout>
    <n-layout-content>
      <FormView />
    </n-layout-content>
  </n-layout>
</template>

<style lang="scss" scoped>
.n-layout {
  padding: 20px;
  max-width: 600px;
  margin: auto;
}
</style>
