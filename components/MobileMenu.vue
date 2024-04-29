<template>
  <div class="w-full z-10 lg:hidden text-gray-300 source-code-pro" style="border-bottom: 1px solid #454843;">
    <nav class="navigation">
      <ul>
        <li>
          <i class="fa-solid fa-house">
            <a href="/" :class="{ 'active': isActive('/') }" @click="toggleMobileMenu()">Welcome</a>
          </i>
        </li>
        <li>
          <i class="fa-solid fa-user">
            <a href="/beatproject" :class="{ 'active': isActive('/beatproject') }" @click="toggleMobileMenu()">BEATPROJECT</a>
          </i>
        </li>
        <li>
          <i class="fa-solid fa-rocket">
            <a href="/about-me" :class="{ 'active': isActive('/about-me') }" @click="toggleMobileMenu()">About</a>
          </i>
        </li>
        <li>
          <i class="fa-solid fa-people-group">
            <a href="/projects" :class="{ 'active': isActive('/projects') }" @click="toggleMobileMenu()">Journey</a>
          </i>
        </li>
        <li>
          <i class="fa-solid fa-cart-shopping">
            <a href="/contact-me" :class="{ 'active': isActive('/contact-me') }" @click="toggleMobileMenu()">Contact</a>
          </i>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
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
  margin: 0 auto;
  border-radius: 1.5rem;
  transform: translate(-50%, 0);
}

.navigation ul {
  list-style: none;
  display: flex;
  justify-content: space-around;
}

.navigation ul li {
  height: 35px;
  width: 35px;
  margin: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
}

.navigation ul li a {
  position: relative;
  padding-left: 10px;
  transition: color 0.3s ease;
  color: inherit;
  text-decoration: none;
}

.navigation ul li a.active {
  color: purple;
}

.navigation ul li a.active::after {
  content: '';
  position: absolute;
  left: 0;
  bottom: -5px;
  width: 100%;
  height: 2px;
  background-color: purple;
  transform: scaleX(0);
  transition: transform 0.3s ease;
}

.navigation ul li a.active:hover::after {
  transform: scaleX(1);
}
</style>