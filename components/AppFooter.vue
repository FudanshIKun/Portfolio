<template>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
        <footer class='flex md:justify-between border-top  source-code-pro'>

            <!-- social icons -->
            <div class="w-full  flex justify-between md:justify-start" style="align-items: center;">
                <span id="social-title" class="h-full flex justify-center items-center border-right px-5 ">
                    <p class="text-gray-400">Find me:</p>
                </span>
                <div id="social-icons" class="flex" style="padding-left: 1vw;">
                    <NuxtLink :to="social.instagram.url + social.instagram.user" target="_blank" class="flex justify-center items-center">
                        <i class="fa fa-instagram text-gray-400" style="font-size: 20px;"></i>
                    </NuxtLink>
                    <NuxtLink :to="social.linkin.url + social.linkin.user" target="_blank" class="flex justify-center items-center ">
                        <i class="fa fa-linkedin-square text-gray-400" style="font-size: 20px;"></i>
                    </NuxtLink>
                </div>
            </div>

            <!-- github user -->
            <NuxtLink :to="social.github.url + social.github.user" target="_blank" class="hidden md:flex items-center px-5 border-left hover:text-white text-gray-400">
                @{{ social.github.user }}
                <i class="fa fa-github" style="font-size:20px;"></i>
            </NuxtLink>

        </footer>
</template>

<style>

footer {
    height: 40px;
    min-height: 40px;
    font-size: 13px;
    
}

#social-icons > a {
    height: 100%;
    width: 50px;
    
 }

#social-icons > a > i {
    width: 1.25rem; /* 20px */
    height: 1.25rem; /* 20px */
    margin: auto;
    
}

footer > a > i {
    width: 1.25rem; /* 20px */
    height: 1.25rem; /* 20px */
    margin-left: 0.5rem; /* 8px */
    
}

#social-icons > a:hover i {
    opacity: 1;
    color: white;
}

@media (max-width: 768px) {

    #social-title {
        border-right: none;
    }

    #social-icons > a {
        border-right: none;
    }

    #social-icons > a > i {
        width: 1.5rem; /* 20px */
        height: 1.5rem; /* 20px */
  }
}

</style>

<script>
export default {
    name: 'AppFooter',
    data() {
        return {
          route: this.$route.path,
        }
    },
    setup() {
        return {
            social: useRuntimeConfig().dev.contacts.social
        }
    },
}
</script>
