<script setup>
import { ref } from "vue";
import { Button, FormControl } from "frappe-ui";

const username = ref("");
const password = ref("");

const login = () => {
  console.log({
    username: username.value,
    password: password.value,
  });
};
</script>

<template>
  <div class="flex min-h-screen items-center justify-center bg-surface-1 px-4">
    <div class="w-full max-w-md rounded-xl bg-surface-white p-8 shadow">
      <h1 class="text-2xl font-bold text-ink-gray-9">Welcome back</h1>

      <p class="mt-2 text-ink-gray-6">Sign in to Pretest Lifesigns</p>

      <div class="mt-8 space-y-4">
        <FormControl
          v-model="username"
          label="Username"
          placeholder="Enter username"
        />

        <FormControl
          v-model="password"
          type="password"
          label="Password"
          placeholder="Enter password"
        />

        <Button class="w-full" variant="solid" label="Sign in" @click="login" />
      </div>
    </div>
  </div>
</template>
