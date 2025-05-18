<template>
  <div>
    <LandingNavbar />
    <LandingHero />
    <header>
      <SignedOut>
        <SignInButton />
      </SignedOut>
      <SignedIn>
        <UserButton />
      </SignedIn>
    </header>
    <Button as-child>
      <NuxtLink prefetch-on="visibility" to="/dashboard">Dashboard </NuxtLink>
    </Button>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: false,
})
</script>
