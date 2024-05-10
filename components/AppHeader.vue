<template>
    <header id="navbar" class="w-full hidden lg:flex flex-col jersey-15-regular ">
      <nav class="w-full flex justify-between" style="align-items: center; font-size: 23px;">

          <div class="flex text-gray-400" style="font-size: 18px;">
            <RouterLink id="nav-link" to="/" :class="{ active: isActive('/') }">
              Welcome!
            </RouterLink>

            <!-- <RouterLink id="nav-link" :to="{name: 'beatproject' }" :class="{ active: isActive('/beatproject') }">
              BEATPROJECT
            </RouterLink> -->
  
            <RouterLink id="nav-link" :to="{name: 'about' }" :class="{ active: isActive('/about') }">
              About Me
            </RouterLink>

            <RouterLink id="nav-link" :to="{name: 'experience' }" :class="{ active: isActive('/experience') }">
              Experience
            </RouterLink>
  
            <!-- <RouterLink id="nav-link" to="/myblogs" :class="{ active: isActive('/myblogs') }">
              Blogs
            </RouterLink> -->

            <RouterLink id="nav-link" to="/projects" :class="{ active: isActive('/projects') }">
              Journey
            </RouterLink>

          
          </div>
          <!-- Move Contact Me's div to Make it on the right -->
          <div class="text-gray-400">
            <RouterLink style="font-size: 18px;" id="nav-link" to="/contact-me" :class="{ active: isActive('/contact-me')}">
              Contact Me
            </RouterLink>
          </div>
      </nav>
      

    </header>

</template>

<style>

#nav-link {
  @apply px-6 h-full flex items-center;
}

#nav-link-contact {
  @apply px-6 h-full flex items-center;
}

#nav-link:hover, #nav-link-contact:hover {
  color: white;
}

#nav-logo {
  @apply px-6 h-full flex items-center;
}

#nav-logo:hover {
  color: white;
}

#nav-link.router-link-active, #nav-link-contact.router-link-active {
  color: white;
}

#nav-logo.router-link-active {
  border-bottom: none;
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
