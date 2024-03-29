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
                <div class="flex right-3 top-3" style="position: absolute; z-index: 2;">
                <img v-for="tech in project.tech" :key="tech" :src="'/icons/techs/filled/' + tech + '.svg'" alt="" class="w-6 h-6 mx-1">
                </div>
                <div class="container">
                  <NuxtLink to="/">
                    <img :src="project.img" alt="" class="image">
                    <video :src="project.video" autoplay='true' loop muted class="video"></video>
                  </NuxtLink>
                </div>
            </div>

            <div class="pb-8 pt-8 px-6">
                <p class="text-menu-text font-fira_retina text-sm mb-5">
                {{ project.description }}
                </p>
                <span class="px-2"></span>
                <NuxtLink id = "button" v-if="project.download && project.download !== ''" :href="project.download" target="_blank" class="text-white font-fira_retina py-2 px-4 w-fit text-xs rounded-lg">
                  download
                </NuxtLink>
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

.container:hover {
  .image {
    opacity: 0;
  }
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