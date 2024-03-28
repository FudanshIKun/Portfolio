<template>
    <div id="project" :key="key" class="lg:mx-5">

        <span class="flex text-sm my-3">
            <div style="display: flex; flex-direction: column;">
              <h3 v-if="index == null" class="text-purplefy font-fira_bold">{{ project.name }}</h3>
              <h3 v-else class="text-purplefy font-fira_bold">{{ project.name }}</h3>
              <h4 class="font-fira_retina text-menu-text">{{ project.title }}</h4>
            </div>
        </span>

        <div id="project-card" class="flex flex-col">
            <div id="window">
                <div class="absolute flex right-3 top-3">
                <img v-for="tech in project.tech" :key="tech" :src="'/icons/techs/filled/' + tech + '.svg'" alt="" class="w-6 h-6 mx-1 hover:opacity-75">
                </div>
                <img id="showcase" :src="project.img" alt="" class="">
            </div>

            <div class="pb-8 pt-8 px-6">
                <p class="text-menu-text font-fira_retina text-sm mb-5">
                {{ project.description }}
                </p>
                <NuxtLink id="view-button" :href="project.url" target="_self" class="text-white font-fira_retina py-2 px-4 w-fit text-xs rounded-lg">
                  view-project
                </NuxtLink>
                <span class="px-2"></span>
                <NuxtLink id = "view-button" v-if="project.download && project.download !== ''" :href="project.download" target="_blank" class="text-white font-fira_retina py-2 px-4 w-fit text-xs rounded-lg">
                  download
                </NuxtLink>
            </div>
        </div>
    </div>
</template>

<script setup>
const { project, key, index } = defineProps(['project', 'key', 'index'])
</script>

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
}

#window {
  position: relative;
}

#showcase {
  border-top-right-radius: 15px;
  border-top-left-radius: 15px;
  aspect-ratio: 16/9;
  object-fit: cover;
}

#view-button {
  background-color: #1C2B3A;
}

#view-button:hover {
  background-color: #263B50;
}

#download-button {
  background-color: #1C2B3A;
}

#download-button:hover {
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