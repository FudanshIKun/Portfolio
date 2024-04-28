<script>
export default{

}

</script>

<template>
    <main v-if="!loading" id="hello" class="max-w-full h-full" style="overflow-y: scroll; overflow-x: hidden;">
      <div id="not-found" class="flex flex-col source-code-pro text-menu-text my-5 h-full justify-center items-center">
          <span class="flex justify-center text-4xl pb-3">
            X_X
          </span>
          <span class="text-white flex justify-center text-xl">
            This Part Is Still In Progress
          </span>
          <a href="/contact-me" class="hover:text-green-600"> Come back later!</a>
        </div>
    </main>
</template>

<style scoped>
/* Hide scrollbar for Chrome, Safari and Opera */
::-webkit-scrollbar {
  display: none;

}

.section-arrow {
  transform: rotate(90deg);
}

#hello { 
  height: 100%;
  width: 100%;
  border-top: 2px solid #454843;
}

</style>