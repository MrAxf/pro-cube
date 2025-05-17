<template>
  <SidebarProvider class="overflow-hidden">
    <AppSidebar />
    <SidebarInset>
      <AppHeader />
      <slot />
    </SidebarInset>
  </SidebarProvider>
</template>
