<script>


</script>

<template>
  <div class="flex w-full h-full" style="width: 100%; height: 100%; overflow: scroll; padding-bottom: 5vw; border-top: 1px solid #454843;">
    <main style="">
      <ContentDoc>
        <template v-slot="{ doc }">
          <div style="width: 100%; height: 100%; display: flex; flex-direction: column; align-items: center;">
            <div class="head" style="border-bottom: 2px solid #454843; text-align: center;">
              <article style="padding: .75vw; padding-top: 1vw;">
                <header class="ad5-container ad5-max-width-xs ad5-margin-bottom-lg">
                  <h1 class="rubik-mono-one-regular" style="font-size: 2.5rem;">{{ doc.title }}</h1>
                  <h2 class="source-code-pro">{{ doc.description }}</h2>
                  <div style="display: flex; justify-content: center; padding-top: 20px;">
                    
                    <div style="display: flex; gap: 1rem; align-items: center; text-align: left;">
                      <img class="icon" src="/icons/avatar.jpg" style="border-radius: 100vw; overflow: hidden; aspect-ratio: 1;">
                      <div>
                        <p class="text-sm color-contrast-medium" style="font-size: 0.8rem;"><time>Create: {{doc.createdAt}}</time></p>
                        <p class="text-sm color-contrast-medium" style="font-size: 0.8rem;"><time>Last Update: {{ doc.updatedAt }}</time></p>
                      </div>
                    </div>
                  </div>
                </header>
                
              
              </article>
              
            </div>
            <div class="content">
              <div v-if="doc.published == false" style="text-align: center;">
                <h1 class="rubik-mono-one-regular" style="font-size: 1rem;">WORK IN PROGRESS</h1>
                <p class="source-code-pro">This Blog isn't ready to be viewed</p>
              </div>
              <div>
                <ContentRenderer v-if="doc.published == true" :value="doc" class="prose dark:prose-invert prose-img:rounded-xl prose-a:text-gray-300 prose-p:text-gray-400 prose-base" style="padding-top: 100px; text-align: left;"/>
              </div>
              
            </div>
          </div>
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
  overflow-y: scroll;
  overflow-x: hidden;
  color: white;
}

.head {
  width: 100%;
  min-height: 200px;
  text-align: center;
}

.head header{
  text-align: center;
  align-items: center;

}

.content {
  margin-left: auto;
  margin-right: auto;
  text-align: center;
}

.content img{
  min-width: 200px;
  min-height: 200px;
}

.icon {
    height: 45px;
}

/* tablet */
@media (min-width: 768px) and (max-width: 1024px) {
	.content {
    width: 70%;
  }
}

/* mobile */
@media (max-width: 768px) {
  .content {
    width: 100%;
  }
  
	.icon {
    height: 35px;
  }
}

</style>