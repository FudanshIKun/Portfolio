<template>
  <div class="w-full z-10 lg:hidden text-gray-300 source-code-pro" style="border-bottom: 1px solid #454843;">
    <nav class="navigation">
      <ul>
        <li>
          <i class="fa-solid fa-house">
            <RouterLink to="/" :class="{ active: isActive('/') }" @click="toggleMobileMenu()">Welcome</RouterLink>
          </i>
        </li>
        <!-- <li>
          <i class="fa-solid fa-hand-fist">
            <RouterLink to="/beatproject"  :to="{name: 'beatproject' }" :class="{ active: isActive('/beatproject') }" @click="toggleMobileMenu()">BEATPROJECT</RouterLink>
          </i>
        </li> -->
        <li>
          <i class="fa-solid fa-user">
            <RouterLink :to="{name: 'about' }" :class="{ active: isActive('/about') }" @click="toggleMobileMenu()">About</RouterLink>
          </i>
        </li>
        <li>
          <i class="fa-solid fa-user">
            <RouterLink :to="{name: 'experience' }" :class="{ active: isActive('/experience') }" @click="toggleMobileMenu()">Experience</RouterLink>
          </i>
        </li>
        <li>
          <i class="fa-solid fa-file">
            <RouterLink to="/projects" :class="{ active: isActive('/projects') }" @click="toggleMobileMenu()">Journey</RouterLink>
          </i>
        </li>
        <li>
          <i class="fa-solid fa-address-book">
            <RouterLink to="/contact-me" :class="{ active: isActive('/contact-me')}" @click="toggleMobileMenu()">Contact</RouterLink>
          </i>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
import { RouterLink } from 'vue-router'

export default {
  components: {
    RouterLink
  },
  data() {
    return {
      menuOpen: false,
    };
  },
  setup() {
    const config = useRuntimeConfig();
    return { config };
  },
  methods: {},
  computed: {
    // Set active class to current page link
    isActive() {
      return (route) => this.$route.path === route;
    },
  },
};
</script>

<style>
.navigation {
  position: relative;
  left: 50%;
  display: block;
  margin-top: 10px;
  margin-bottom: 10px;
  transform: translate(-50%, 0);
}

.navigation ul {
  list-style: none;
  display: flex;
  justify-content: space-around;
}

.navigation ul li {
  height: 35px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.navigation ul li a {
  position: relative;
  padding-left: 10px;
  transition: color 0.3s ease;
  color: inherit;
}

.navigation ul li a.active {
  color: purple;
}

.navigation ul li a.active::after {
  content: '';
  position: absolute;
  
  width: 100%;
  height: 2px;
  transition: transform 0.3s ease;
}

/* mobile */
@media (max-width: 768px) {
  .navigation {
    ransform: translate(-50%, 0);
  }

  .navigation ul li a {
    padding-left: none;
  }

  .navigation ul {
    flex-direction: column;
  }

  .navigation ul li {
    margin: 0.5rem;
  }
}



</style>