<template>
    <main id="contact-me" class="page" style="border-top: 2px solid #454843;">

        <div id="mobile-page-title">
            <h2>Contact Me</h2>
        </div>

        <div id="page-menu" class="w-fullflex flex-col" style="height: 100%; border-right: 2px solid #454843;">

            <!-- contacts -->
            <div id="contacts" class="submenu">
                <div class="title">
                    <img class="arrow" src="/icons/arrow.svg">
                    <h3 class="source-code-pro">contacts</h3>
                </div>
                <div id="links">
                    <div v-for="(source, key) in contact.direct.sources" :key="key" class="link">
                        <img :src="'/icons/' + key + '.svg'">
                        <a v-html="source" class="source-code-pro text-menu-text hover:text-white"></a>
                    </div>
                </div>
            </div>

            <!-- find me also in -->
            <div id="find-me-in" class="submenu border-top">
                <div class="title">
                    <img class="arrow" src="/icons/arrow.svg">
                    <h3 class="source-code-pro" style="font-size: 12px;">You can also find me in...</h3>
                </div>
                <div id="links">
                    <div v-for="(source, key) in contact.find_me_also_in.sources" :key="key" class="link">
                        <img src="/icons/link.svg">
                        <a :href="source.url + source.user" class="source-code-pro text-menu-text hover:text-white" target="_blank">{{ source.title }}</a>
                    </div>
                </div>
            </div>

        </div>
            
        <div class="flex flex-col w-full">
            <!-- main -->
            <div class="flex lg:grid lg:grid-cols-2 w-full" style="min-height: 550px;">
                <div id="left" class="h-full w-full flex flex-col items-center">
                    <ContactForm :name="name" :subject="subject" :email="email" :message="message" />
                </div>

                <div id="right" class="h-full w-full hidden lg:flex">
                    
                
                </div>
            </div>

        </div>
    </main>
</template>

<script>
export default {
    setup() {
        const contact = useRuntimeConfig().dev.contacts

        return {
            contact
        }
    },
}
</script>

<style>

.arrow {
    transition: 0.1s;
    margin-right: 10px;
    width: 9px;
    height: 9px;
    transform: rotate(90deg);
}

.submenu {
    display: flex;
    flex-direction: column;
}

.submenu .title h3 {
    color: white;
    font-size: 16px;
}

.link {
    display: flex;
    align-items: center;
    padding: 4px 25px;
}

.link img {
    width: 16px;
    height: 16px;
    margin-right: 10px;
}

#links {
    padding: 10px 0px;
}

.form-content {
    padding: 75px 50px 0px 75px;
    width: 100%;
    height: 100%;
    overflow-y: auto;
    font-size: 15px;
}
@media (min-width: 1024px) {
    
    .submenu .title {
        display: flex;
        align-items: center;
        border-bottom: 2px solid #454843;
        padding: 0px 25px;
        height: 35px;
        padding: 0px 25px;
    }
    .submenu .title:hover {
        cursor: pointer;
    }
    .submenu .title h3 {
        font-size: 14px;
    }
}

</style>