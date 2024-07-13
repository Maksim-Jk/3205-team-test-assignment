<script lang="ts" setup>
import { NCard, NDescriptions, NDescriptionsItem, NEmpty, NH2, NSpin } from 'naive-ui'
import type { IProps } from '@/components/UserData/userData.types'
import { defineProps } from 'vue'

defineProps<IProps>()
</script>

<template>
  <n-card >
    <n-h2>User data</n-h2>
    <n-spin :show="isLoading" size="large">
      <n-descriptions v-if="user" :columns="1" bordered label-class="label" label-placement="left">
        <n-descriptions-item label="Email">{{ user.email }}</n-descriptions-item>
        <n-descriptions-item label="Number">{{ user.number}}</n-descriptions-item>
      </n-descriptions>
      <n-empty v-if="!user" description="User data not found" />
    </n-spin>
  </n-card>
</template>

<style lang="scss">
.label {
  width: 200px;
}
</style>
