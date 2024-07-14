<script lang="ts" setup>
import { NCard, NDescriptions, NDescriptionsItem, NEmpty, NH2, NSpin } from 'naive-ui'
import type { IProps } from '@/components/UserData/userData.types'
import { defineProps } from 'vue'
import { prettifyPhoneNumber } from '@/helpers'

defineProps<IProps>()

</script>

<template>
  <n-card>
    <n-h2>User data</n-h2>
    <n-spin :show="isLoading" size="large">
      <n-space v-if="usersList?.length">
        <n-descriptions
          :columns="1"
          bordered
          label-class="label"
          label-placement="left">
          <n-descriptions-item
            label="Email">{{ usersList[0].email }}
          </n-descriptions-item>
          <n-descriptions-item
            v-for="(user, i) in usersList"
            :key="i"
            :label="usersList.length === 1 ? 'Phone number' : `Phone number ${i + 1}`"
          >
            {{ prettifyPhoneNumber(user.number) }}
          </n-descriptions-item>
        </n-descriptions>
      </n-space>
      <n-empty v-if="!usersList?.length" description="User data not found" />
    </n-spin>
  </n-card>
</template>

<style lang="scss">
.label {
  width: 200px;
}
</style>
