<script lang="ts" setup>
import UserForm from '@/components/UserForm/index.vue'
import UserData from '@/components/UserData/index.vue'
import { NSpace } from 'naive-ui'
import type { IFormValue } from '@/components/UserForm/userForm.types'
import { ref } from 'vue'
import { fetchUsersList } from '@/api/user/user'
import type { IUserItem } from '@/api/user/user.types'

const handleSubmit = async (value: IFormValue) => {
  isLoading.value = true
  usersList.value = await fetchUsersList(value) || []
  isLoading.value = false
}
const isLoading = ref(false)
const usersList = ref<IUserItem[]>([])
</script>

<template>
  <n-space vertical>
    <UserForm @onSubmit="handleSubmit" />
    <UserData :is-loading="isLoading" :users-list="usersList" />
  </n-space>
</template>

<style lang="scss" scoped></style>
