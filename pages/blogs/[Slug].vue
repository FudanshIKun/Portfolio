<script>


</script>

<template>
  <div class="flex w-full h-full" style="width: 100%; height: 100%; overflow: scroll;">
    <main class="dark:prose-invert">
      <ContentDoc>
        <template v-slot="{ doc }">
          <article>
            <h1>{{ doc.title }}</h1>
          </article>
          <ContentRenderer :value="doc" />
        </template>
        <template #not-found>
          <h1>Document not found</h1>
        </template>
        <template #empty>
          <h1>Document is empty</h1>
        </template>
      </ContentDoc>
      </main>
  </div>
</template>
  
<style scoped>
/* Hide scrollbar for Chrome, Safari and Opera */
::-webkit-scrollbar {
  display: none;

}

main{
  border-top: 2px solid #454843;
  width: 100%;
  height: 100%;
  min-height: 850px;
  padding: 5vh;
  overflow-y: scroll;
  overflow-x: hidden;
  color: white;
  
}



</style>