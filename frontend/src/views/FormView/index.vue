<script lang="ts" setup>
import UserForm from '@/components/UserForm/index.vue'
import UserData from '@/components/UserData/index.vue'
import { NSpace } from 'naive-ui'
import type { IFormValue } from '@/components/UserForm/userForm.types'
import { ref } from 'vue'
import { fetchUser } from '@/api/user/user'
import type { IFetchUserResponse } from '@/api/user/user.types'

const handleSubmit = async (value: IFormValue) => {
  isLoading.value = true
  user.value = await fetchUser(value)
  isLoading.value = false
}
const isLoading = ref(false)
const user = ref<IFetchUserResponse | null>(null)
</script>

<template>
  <n-space vertical>
    <UserForm @onSubmit="handleSubmit" />
    <UserData :is-loading="isLoading" :user="user" />
  </n-space>
</template>

<style lang="scss" scoped></style>
