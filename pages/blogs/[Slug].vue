<script>


</script>

<template>
  <div class="flex w-full h-full" style="width: 100%; height: 100%; overflow: scroll;">
    <main>
      <ContentDoc>
        <template v-slot="{ doc }">
          <div style="width: 100%; height: 100%;">
            <div class="head" style="border-bottom: 2px solid #454843;">
              <article style="padding: 1vw; padding-top: 3vw; padding-bottom: 3vw;">
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
              <div class="w-full">
                <div>
                  <div>
                    <div v-if="doc.published == false" style="text-align: center;">
                      <h1>WORK IN PROGRESS</h1>
                      <p>This Blog isn't ready to be viewed</p>
                    </div>
                    <div v-if="doc.published == true" style="display: flex; align-items: center;">
                      <ContentRenderer :value="doc" style="padding-top: 100px; text-align: left;"/>
                    </div>
                  </div>
                </div>
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
  padding: 5vw;
}

.icon {
    height: 45px;
  }

/* mobile */
@media (max-width: 768px) {
	.icon {
    height: 35px;
  }
}

</style>