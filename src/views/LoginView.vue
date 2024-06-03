<template>
  <div>
    <h1 class="text-white">Login</h1>
    <p>Welcome to the Login page</p>

    <form class="flex flex-col mt-6 space-y-3">
      <div class="flex flex-col">
        <label for="email">Email</label>
        <input
          v-model="email"
          class="rounded-md py-2 px-3 text-black"
          type="email"
          id="email"
          placeholder="Enter email address"
        />
      </div>

      <div class="flex flex-col">
        <label for="password">Password</label>
        <input
          v-model="password"
          class="rounded-md py-2 px-3 text-black"
          type="password"
          id="password"
          placeholder="Enter password"
        />
      </div>

      <button @click="submit" type="submit" class="bg-white text-black rounded-md py-2">
        Login
      </button>
    </form>
  </div>
</template>

<script setup>
import { ref } from 'vue'
const email = ref('')
const password = ref('')
const errorMessage = ref('')

const submit = () => {
  if (email.value && password.value) {
    if (email.value.includes('@') && email.value.includes('.')) {
      errorMessage.value = ''
      console.log('Email:', email.value)
      console.log('Password :', password.value)
    } else {
      errorMessage.value = 'Please enter a valid email'
    }
  } else {
    console.log('Please enter email and password')
    errorMessage.value = 'Please enter a valid email and password'
  }
}
</script>
