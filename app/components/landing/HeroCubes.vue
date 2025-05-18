<template>
  <div
    class="relative hidden h-[500px] w-[600px] flex-row flex-wrap gap-8 lg:flex"
  >
    <!-- Testimonial -->
    <CubeIcon
      class="animate-float-slow absolute -top-[15px] w-[340px] shadow-black/10 drop-shadow-xl dark:shadow-white/10"
      :size="2"
    />

    <CubeIcon
      class="animate-float-medium absolute top-4 right-[5px] flex w-100 flex-col items-center justify-center shadow-black/10 drop-shadow-xl dark:shadow-white/10"
      :size="3"
      :color-up="CUBE_DEFAULT_COLORS.downColor"
      :color-front="CUBE_DEFAULT_COLORS.backColor"
      :color-left="CUBE_DEFAULT_COLORS.rightColor"
    />

    <CubeIcon
      class="animate-float-fast absolute top-[150px] left-[70px] w-120 shadow-black/10 drop-shadow-xl dark:shadow-white/10"
      :size="4"
      :color-up="CUBE_DEFAULT_COLORS.leftColor"
      :color-front="CUBE_DEFAULT_COLORS.rightColor"
      :color-left="CUBE_DEFAULT_COLORS.downColor"
    />
  </div>
</template>

<style scoped>
/* Animación de flotación suave y desacompasada */
@keyframes floatY {
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-24px);
  }
  100% {
    transform: translateY(0);
  }
}
.animate-float-slow {
  animation: floatY 5.5s ease-in-out infinite;
}
.animate-float-medium {
  animation: floatY 4.2s ease-in-out infinite;
  animation-delay: 1.2s;
}
.animate-float-fast {
  animation: floatY 3.6s ease-in-out infinite;
  animation-delay: 0.7s;
}
</style>
