<template>
  <SidebarMenu>
    <SidebarMenuItem>
      <div class="flex w-full items-center gap-2 p-2">
        <Skeleton class="h-8 w-8 rounded-lg" />
        <div class="grid flex-1 text-left text-sm leading-tight">
          <span class="truncate font-semibold">
            <Skeleton class="h-[1lh] w-24" />
          </span>
          <span class="truncate text-xs">
            <Skeleton class="h-[1lh] w-24" />
          </span>
        </div>
        <Skeleton class="ml-auto size-4" />
      </div>
    </SidebarMenuItem>
  </SidebarMenu>
</template>
