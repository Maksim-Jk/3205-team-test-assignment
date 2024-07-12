<script lang="ts" setup>
import UserForm from '@/components/UserForm/index.vue'
import type { IFormValue } from '@/components/UserForm/userForm.types'
import { fetchUsersList } from '@/api/form/form'

const handleSubmit = (value: IFormValue) => {
  fetchUsersList(value)
}
</script>

<template>
  <UserForm @onSubmit="handleSubmit" />
</template>

<style lang="scss" scoped></style>
