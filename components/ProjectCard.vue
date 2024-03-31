<script setup>
const { project, key, index } = defineProps(['project', 'key', 'index'])
</script>

<template>
    <div id="project" :key="key" class="lg:mx-5">

        <span class="flex text-sm my-3">
            <div style="display: flex; flex-direction: column;">
              <h3 v-if="index == null" class="text-purplefy font-fira_bold">{{ project.name }}</h3>
              <h3 v-else class="text-purplefy font-fira_bold">{{ project.name }}</h3>
              <h4 class="font-fira_retina text-menu-text">{{ project.title }}</h4>
            </div>
        </span>

        <div id="project-card" class="flex flex-col" style="width: 100%;">
            <div id="window">
                <div class="container">
                  <NuxtLink :href="project.url" target="_self">
                    <img :src="project.img" alt="" class="image">
                    <video :src="project.video" autoplay='true' loop muted class="video"></video>
                  </NuxtLink>
                </div>
            </div>

            <div style="position: relative; padding: 2vh;">
                <div style="display: flex; flex-direction: row-reverse;">
                  <img v-for="tech in project.tech" :key="tech" :src="'/icons/techs/filled/' + tech + '.svg'" alt="" class="w-6 h-6 mx-1">
                </div>
                <span class="px-2"></span>
                <p class="text-menu-text font-fira_retina mb-5" style="text-wrap: wrap; font-size: 1.25vh;">
                {{ project.description }}
                </p>
                <div style="display: flex;">
                  <div>
                  <NuxtLink id = "button" v-if="project.source && project.source !== ''" :href="project.source" target="_blank" class="text-white font-fira_retina py-2 px-4 text-xs w3-round-large">
                    Github
                  </NuxtLink>
                  </div>
                  <span class="px-2"></span>
                  <div>
                    <NuxtLink id = "button" v-if="project.download && project.download !== ''" :href="project.download" target="_blank" class="text-white font-fira_retina py-2 px-4 text-xs w3-round-large">
                      download
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
  border-radius: 15px;
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

.container:hover .image {
  opacity: v-bind(project.video && project.video !== '' ? 0 : 1);
}

.image{
  border-top-right-radius: 15px;
  border-top-left-radius: 15px;
  opacity: 1;
  object-fit: contain;
  transition: 300ms ease;
}

.video{
  height: 100%;
  position: absolute;
  border-top-right-radius: 15px;
  border-top-left-radius: 15px;
  aspect-ratio: 16/9;
  object-fit: cover;
  inset: 0;
  z-index: -1;
}

#showcase {
  border-top-right-radius: 15px;
  border-top-left-radius: 15px;
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