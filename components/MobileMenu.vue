<template>
  <div id="mobile-menu" class="w-full z-10 lg:hidden">

    <!-- header -->
    <div id="mobile-header" class="w-full h-16 flex justify-between items-center">
      
    </div>

    <!-- mobile menu -->
      <div id="menu" class="bg-mobile-menu-blue flex" style="flex-direction: column;">
        <RouterLink id="nav-link-mobile" to="/" :class="{ active: isActive('/') }" @click="toggleMobileMenu()">
          <p style="padding-left: 20px;">Home</p>
        </RouterLink>
  
        <RouterLink id="nav-link-mobile" to="/about-me" :class="{ active: isActive('/about-me') }">
          <p style="padding-left: 20px;">About me</p>
        </RouterLink>
  
        <RouterLink id="nav-link-mobile" to="/projects" :class="{ active: isActive('/projects') }">
          <p style="padding-left: 20px;">My Journey</p>
        </RouterLink>

        <RouterLink id="nav-link-mobile" to="/contact-me" :class="{ active: isActive('/contact-me') }">
          <p style="padding-left: 20px;">Contact me</p>
        </RouterLink>
    </div>

  </div>
</template>

<script>
export default {
  data(){
    return {
      menuOpen: false
    }
  },
  setup() {
    const config = useRuntimeConfig()

    return {
      config
    }
  },

  methods: {

    
  },
  computed: {
    // Set active class to current page link
    isActive() {
      return route => this.$route.path === route;
    },
  },
}

</script>

<style>

#mobile-header {
  border-bottom: 1px solid #1E2D3D;
}

#nav-link-mobile {
  border-bottom: 1px solid #1E2D3D;
  @apply text-menu-text font-fira_retina px-6 py-4 flex items-center;
}

#nav-link-mobile.active {
  color: white
}

</style>