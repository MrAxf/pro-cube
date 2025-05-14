<template>
  <header>
    <SignedOut>
      <SignInButton />
    </SignedOut>
    <SignedIn>
      <UserButton />
    </SignedIn>
  </header>
  <NuxtLink to="/dashboard">
    <h1 class="text-3xl font-bold">Welcome to Nuxt 3</h1>
  </NuxtLink>
</template>

<script setup lang="ts">
definePageMeta({
  layout: false,
})
</script>
