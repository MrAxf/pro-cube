<template>
  <div>
    <header>
      <SignedOut>
        <SignInButton />
      </SignedOut>
      <SignedIn>
        <UserButton />
      </SignedIn>
    </header>
    <Button as-child>
      <NuxtLink to="/dashboard">Dashboard </NuxtLink>
    </Button>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: false,
})
</script>
