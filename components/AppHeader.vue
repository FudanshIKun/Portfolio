<template>
    <header id="navbar" class="w-full hidden lg:flex flex-col">
      <nav class="w-full flex justify-between" style="align-items: center;">

          <div class="flex">
            <RouterLink id="nav-link" to="/" :class="{ active: isActive('/') }">
              Home
            </RouterLink>
  
            <RouterLink id="nav-link" :to="{name: 'about-me' }" :class="{ active: isActive('/about-me') }">
              About Me
            </RouterLink>
  
            <RouterLink id="nav-link" to="/projects" :class="{ active: isActive('/projects') }">
              My Journey
            </RouterLink>
          </div>

          <RouterLink id="nav-link-contact" to="/contact-me" :class="{ active: isActive('/contact-me')}">
           Contact me
          </RouterLink>
      
      </nav>

    </header>

</template>

<style>

#nav-link {
  @apply text-menu-text font-fira_retina px-6 h-full flex items-center;
}

#nav-link-contact {
  @apply text-menu-text font-fira_retina px-6 h-full flex items-center;
}

#nav-link:hover, #nav-link-contact:hover {
  color: white;
}

#nav-logo {
  @apply text-menu-text font-fira_retina px-6 h-full flex items-center;
}

#nav-logo:hover {
  color: white;
}

#nav-link.router-link-active, #nav-link-contact.router-link-active {
  color: white;
}

#nav-logo.router-link-active {
  border-bottom: none;
  @apply text-menu-text;
}

#navbar > nav {
  height: 45px;
  font-size: 13px;
}

</style>

<script>

export default {
  computed: {
    // Set active class to current page link
    isActive() {
      return route => this.$route.path === route;
    }
  },
  setup() {
    const config = useRuntimeConfig()

    return {
      config
    }
  },
};

</script>
