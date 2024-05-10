<script setup>
import { ref } from 'vue'
const config = useRuntimeConfig()
const techs = ['Illustration', 'Modeling', 'Game', 'Shader']
const filters = ref(['all'])
const showFilters = ref(true)
const projects = ref(config.public.dev.projects)

function filterProjects(tech) {
  document.getElementById('icon-tech-' + tech).classList.toggle('active')
  document.getElementById('title-tech-' + tech).classList.toggle('active')

  const check = document.getElementById(tech)
  if (check.checked) {
    filters.value = filters.value.filter((item) => item !== 'all')
    filters.value.push(tech)
  } else {
    filters.value = filters.value.filter((item) => item !== tech)
    filters.value.length === 0 ? filters.value.push('all') : null
  }
  filters.value[0] == 'all' ? projects.value = config.public.dev.projects : projects.value = filterProjectsBy(filters.value)

  if (projects.value.length === 0) {
    document.getElementById('projects-case').classList.remove('grid')
    document.getElementById('not-found').classList.remove('hidden')
  } else {
    document.getElementById('projects-case').classList.add('grid')
    document.getElementById('not-found').classList.add('hidden')
  }
}

function filterProjectsBy(filters) {
  const projectArray = Object.values(config.public.dev.projects)
  return projectArray.filter(project => {
    return filters.some(filter => project.tech.includes(filter))
  })
}

</script>

<template>
  <main class="flex flex-col flex-auto lg:flex-row" style="height: 100%; overflow: hidden; border-top: 2px solid #454843;">
    
    <div v-if="showFilters" id="filter-menu" class="w-full flex-col border-right font-fira_regular text-menu-text lg:flex">

      <!-- filter menu -->
      <nav id="filters" class="w-full flex-col" style="max-height: 100%;">
        <div v-for="tech in techs" :key="tech" class="flex items-center py-2 source-code-pro">
          <input type="checkbox" :id="tech" @click="filterProjects(tech)">
          <img :id="'icon-tech-' + tech" :src="'/icons/techs/' + tech + '.svg'" alt="" class="tech-icon w-8 h-8 mx-4">
          <span :id="'title-tech-' + tech">{{ tech }}</span>
        </div>
      </nav>

    </div>

    <!-- content -->

    <div class="flex flex-col w-full overflow-hidden">

      <!-- projects -->
      <div id="projects-case" class="grid grid-cols-1 lg:grid-cols-2 max-w-full h-full lg:self-center" style="overflow-y: scroll;">
        <div id="not-found" class="hidden flex flex-col source-code-pro text-menu-text my-5 h-full justify-center items-center">
          <span class="flex justify-center text-4xl pb-3">
            X_X
          </span>
          <span class="text-white flex justify-center text-xl">
            No matching projects
          </span>
          <a href="/contact-me" class="hover:text-green-600"> Come back later!</a>
        </div>
        
        <project-card
          v-for="(project, key, index) in projects" 
          :key="key" 
          :index="index"
          :project="project"
        />

      </div>
      
  </div>
</main>
</template>

<style scoped>
/* Hide scrollbar for Chrome, Safari and Opera */
::-webkit-scrollbar {
  display: none;

}

#section-content-title{
  background-color: #1f1f1f;
}

#filter-menu{
  background-color: #1f1f1f;
}

#filters {
  padding: 10px 25px;
}

#tab {
  padding: 25px 25px 5px;
  flex-wrap: wrap;
}

.tech-icon {
  opacity: 0.4;
}

.tech-icon.active {
  opacity: 1;
}

#title-tech.active {
  color: white;
}

input[type="checkbox"] {
  appearance: none;
  background-color: transparent;
  width: 1.15em;
  height: 1.15em;
  border: 2px solid currentColor;
  border-radius: 0.15em;
  margin-top: 1px;
}

input[type="checkbox"]:checked {
  background-color: currentColor;
  background-image: url("data:image/svg+xml;utf8,<svg width='13' height='10' viewBox='0 0 13 10' fill='none' xmlns='http://www.w3.org/2000/svg'><path d='M5.38587 7.2802L11.9718 0.693573L12.9856 1.70668L5.38587 9.30641L0.826172 4.74671L1.83928 3.73361L5.38587 7.2802Z' fill='white'/></svg>");
  background-repeat: no-repeat;
  background-position: center;
}

input[type="checkbox"]:checked:hover {
  box-shadow: #607b968b 0px 0px 0px 2px;
}

input[type="checkbox"]:not(:checked) {
  border-color: currentColor;
}

input[type="checkbox"]:hover {
  cursor: pointer;
  background-color: currentColor;
  background-image: url("data:image/svg+xml;utf8,<svg width='13' height='10' viewBox='0 0 13 10' fill='none' xmlns='http://www.w3.org/2000/svg'><path d='M5.38587 7.2802L11.9718 0.693573L12.9856 1.70668L5.38587 9.30641L0.826172 4.74671L1.83928 3.73361L5.38587 7.2802Z' fill='white'/></svg>");
  background-repeat: no-repeat;
  background-position: center;
  box-shadow: #607b968b 0px 0px 0px 2px;
}

input[type="checkbox"]:hover:not(:checked) {
  cursor: pointer;
  background-color: rgba(0, 0, 0, 0.1);
  background-image: none;
  box-shadow: #607b968b 0px 0px 0px 2px;
}

input[type="checkbox"]:focus {
  box-shadow: none;
}

@media (max-width: 768px) {
  #projects-case {
    padding: 0px 25px 40px;
  }

}

@media (min-width: 768px) {
  #projects-case {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    padding: 50px 50px 40px;
  }
}

@media (min-width: 1350px) {
  #projects-case {
    grid-template-columns: repeat(3, minmax(0, 1fr));
    padding: 50px 80px 40px;
    /* padding: 100px 100px 40px; */
  }
}

@keyframes animateToBottom {
  from {
    transform: translate3d(0, -200px, 0);
  }
  to {
    transform: translate3d(0, 10px, 0);
  }
}
</style>
