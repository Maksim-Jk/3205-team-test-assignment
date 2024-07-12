<script lang="ts" setup>
import { NLayout } from 'naive-ui'
import { ref } from 'vue'
import UserForm from './components/UserForm/index.vue'
// import UserList from './components/UserList/index.vue'


const users = ref([])

function handleSearch(foundUsers) {
  users.value = foundUsers
}
</script>

<template>
  <n-layout>
    <n-layout-content>
      <UserForm @search="handleSearch" />
<!--      <UserList :users="users" />-->
    </n-layout-content>
  </n-layout>
</template>

<style lang="scss" scoped>
.n-layout {
  position: relative;
  height: 100vh;
  padding: 30px;
}

</style>
