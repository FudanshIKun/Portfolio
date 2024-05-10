<script setup>
const { project, key, index } = defineProps(['project', 'key', 'index'])

const imageOpacity = computed(() => {
  return project.video && project.video !== '' ? 0 : 1
})

const overlayOpacity = computed(() => {
  return project.progress && project.progress === 1 ? 0 : 1
})

</script>

<template>
    <div id="project" :key="key" class="lg:mx-5">

        <span class="flex text-sm my-3">
            <div style="display: flex; flex-direction: column;">
              <NuxtLink :href="project.url" target="_self">
                <h3 v-if="index == null" :class="['text-purplefy source-code-pro',project.url && project.url !== '' ? 'hover:text-green-600' : '',]">
                  {{ project.name }}
                </h3>
                <h3 v-else :class="['text-purplefy source-code-pro', project.url && project.url !== '' ? 'hover:text-green-600' : '',]">
                  {{ project.name }}
                </h3>
                <h4 class="source-code-pro text-menu-text">{{ project.title }}</h4>
              </NuxtLink>
            </div>
        </span>

        <div id="project-card" style="width: 100%;">
            <div id="window">
                <div class="container">
                  <div class="content" >
                    <div class="content-overlay source-code-pro" style="height: 100%;">
                      <div class="content-details">
                        <h3>WORK IN PROGRESS</h3>
                        <p>This project isn't ready to be viewed</p>
                      </div>
                    </div>
                    <div class="Player">
                      <img :src="project.img" alt="" class="image" >
                      <video :src="project.video" autoplay='true' loop muted class="video"></video> 
                    </div>
                    </div>
                </div>
            </div>

            <div style="position: relative; padding: 2vh;">
                <div style="display: flex; flex-direction: row;">
                  <p class="text-menu-text text-sm source-code-pro mb-5" style="text-wrap: wrap; width: 100%;">
                    {{ project.description }}
                  </p>
                  <span class="px-2"></span>
                  <img v-for="tech in project.tech" :key="tech" :src="'/icons/techs/filled/' + tech + '.svg'" alt="" class="w-6 h-6 mx-1">
                </div>
                <span class="px-2"></span>
                <div style="display: flex;">
                  <div>
                  <NuxtLink id = "button" v-if="project.source && project.source !== ''" :href="project.source" target="_blank" class="text-white source-code-pro py-2 px-4 text-xs w3-round-large">
                    Source
                  </NuxtLink>
                  </div>
                  <span class="px-1"></span>
                  <div>
                  <NuxtLink id = "button" v-if="project.download && project.download !== ''" :href="project.download" target="_blank" class="text-white source-code-pro py-2 px-4 text-xs w3-round-large">
                    Download
                  </NuxtLink>
                  </div>
                  <div style="margin-left: auto;">
                    <NuxtLink id = "button" v-if="project.url && project.url !== ''" :href="project.url" target="_self" class="text-white source-code-pro py-2 px-4 text-xs w3-round-large ">
                    Read more
                  </NuxtLink>
                  </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
#project {
  min-width: 400px;
  margin-bottom: 5px;
}

#project-card {
  border: 1px solid #1E2D3D;
  background-color: #011221;
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;
  max-width: 400px;
  z-index: -2;
}

#window {
  position: relative;
}

.container {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  z-index: 0;
}

.fadeIn-top{
  top: 20%;
}

.container:hover .image {
  opacity: v-bind(imageOpacity);
}

.container:hover .button {
  opacity: v-bind(imageOpacity);
}

.container:hover .content-overlay {
  opacity: v-bind(overlayOpacity);
}

.content .content-overlay {
  background: rgba(0,0,0,0.7);
  position: absolute;
  height: 99%;
  width: 100%;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
  opacity: 0;
  -webkit-transition: all 0.4s ease-in-out 0s;
  -moz-transition: all 0.4s ease-in-out 0s;
  transition: all 0.4s ease-in-out 0s;
}

.content-details {
  position: absolute;
  text-align: center;
  padding-left: 1em;
  padding-right: 1em;
  width: 100%;
  top: 50%;
  left: 50%;
  opacity: 0;
  -webkit-transform: translate(-50%, -50%);
  -moz-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  -webkit-transition: all 0.3s ease-in-out 0s;
  -moz-transition: all 0.3s ease-in-out 0s;
  transition: all 0.3s ease-in-out 0s;
}

.content:hover .content-details{
  top: 50%;
  left: 50%;
  opacity: 1;
}

.content-details h3{
  color: #fff;
  font-weight: 500;
  letter-spacing: 0.15em;
  margin-bottom: 0.5em;
  text-transform: uppercase;
}

.content-details p{
  color: #fff;
  font-size: 0.8em;
}

.Player {
  width: 100%;
  height: 100%;
}

.image{
  width: 100%;
  height: 100%;
  aspect-ratio: 16/9;
  object-fit: contain;
  opacity: 1;
  transition: 300ms ease;
}

.video{
  width: 100%;
  height: 100%;
  position: absolute;
  aspect-ratio: 16/9;
  object-fit: cover;
  inset: 0;
  z-index: -1;
}

#showcase {
  aspect-ratio: 16/9;
  object-fit: cover;
}

#button {
  background-color: #1C2B3A;
}

#button:hover {
  background-color: #263B50;
}

@media (max-width: 768px) {
  #project {
    min-width: 100%;
  }
}

@media (min-width: 768px) {
  #project {
    width: 100%;
    min-width: 100%;
    padding-inline: 5px;
  }
}

@media (min-width: 1350px) {
  #project {
    width: 100%;
    min-width: 100%;
    padding-inline: 20px;
  }
}

</style>