<script lang="ts" setup>
import type { FormInst, FormItemRule } from 'naive-ui'
import { NButton, NCard, NDivider, NForm, NFormItem, NIcon, NInput, NRow, NTooltip } from 'naive-ui'
import { HelpCircleOutline as HelpIcon } from '@vicons/ionicons5'
import { ref } from 'vue'
import type { IFormValue } from '@/components/UserForm/userForm.types'

const emits = defineEmits(['onSubmit'])
const searchFormRef = ref<FormInst | null>()
const formValue = ref<IFormValue>({
  email: '',
  phone: ''
})

const validatePhoneNumber = (_: FormItemRule, value: string) => {
  if (!value) return true
  if (value.length !== 8) return false
}

const validateEmail = (_: FormItemRule, value: string) => {
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailPattern.test(value)
}
const rules = {
  email: {
    required: true,
    trigger: ['input', 'blur'],
    message: 'Incorrect email',
    validator: validateEmail
  },
  phone: {
    required: false,
    length: 8,
    validator: validatePhoneNumber,
    trigger: ['submit', 'blur'],
    message: 'Please input valid phone number or leave it blank'
  }
}

const handleSubmit = () => {
  searchFormRef.value?.validate(async (err) => {
    if (!err) {
      emits('onSubmit', formValue.value)
    }
  })
}

function formatNumber(value: string) {
  let cleaned = value.replace(/\D/g, '')
  let formated = cleaned.replace(/(\d{2})(?=\d)/g, '$1-')
  formValue.value.phone = formated.substring(0, 8)
}
</script>

<template>
  <n-card class="search-form">
    <pre>{{formValue}}</pre>
    <n-form ref="searchFormRef" :model="formValue" :rules="rules" @submit.prevent="handleSubmit">
      <n-form-item label="Email" path="email" required>
        <n-input
          v-model:value="formValue.email"
          clearable
          placeholder="Please input email"
          type="text"
        >
          <template #suffix>
            <n-tooltip>
              <template #trigger>
                <n-icon>
                  <help-icon />
                </n-icon>
              </template>
              <span>Email should be in format of example@example.com</span>
            </n-tooltip>
          </template>
        </n-input>
      </n-form-item>
      <n-form-item first label="Phone" path="phone">
        <n-input
          :value="formValue.phone"
          clearable
          maxlength="8"
          placeholder="Please input phone"
          type="text"
          @input="formatNumber"
        >
          <template #suffix>
            <n-tooltip>
              <template #trigger>
                <n-icon>
                  <help-icon />
                </n-icon>
              </template>
              <span>Phone number should be in format of 00-00-00</span>
            </n-tooltip>
          </template>
        </n-input>
      </n-form-item>
      <n-divider style="margin-top: 0" />
      <n-row>
        <n-button attr-type="submit" block type="primary">Submit</n-button>
      </n-row>
    </n-form>
  </n-card>
</template>

<style lang="scss" scoped>
.search-form {
  max-width: 600px;
  margin: auto;
  transform: translateY(50%);
}
</style>
