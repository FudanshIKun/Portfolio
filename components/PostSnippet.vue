<script setup>
const { blog, key } = defineProps(['blog', 'key'])
</script>

<template>
    <div id="posts">

        <!-- head info -->
        <div class="flex justify-between my-5">
            <div class="flex">
            <!-- avatar -->
            <img :src="blog.avatar" alt="" class="w-8 h-8 rounded-full mr-2">
                <!-- username & gist date info -->
                <div class="flex flex-col" >
                    <a id="username" class="font-fira_bold text-purple-text text-xs pb-1">
                        @{{ blog.username }}
                    </a>
                </div>
            </div>
        </div>

        <div class="snippet-container">
            <div class="py-4 px-6 font-fira_retina ">
                <div class="flex items-center mb-2">
                    <h4 class="text-green-300 text-lg font-semibold leading-tight">How to be effective at working remotely?</h4>
                </div>
                <p class="mb-4 text-gray-600 text-base">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
                <img src="https://images.pexels.com/photos/461077/pexels-photo-461077.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" class="w-full rounded-md mb-4">
                <div class="flex items-center mt-4">
                    <div class="ml-auto">
                        <a v-if="blog.continue !== ''" :href="blog.continue" class="text-blue-500 hover:underline">
                        Read more <i class="fas fa-arrow-right ml-1"></i>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>

</template>

<style>
.snippet-container {
    background-color: #011221;
    padding: 5px;
    border-radius: 15px;
    border: 1px solid #1E2D3D;
    font-size: 12px;
    overflow-y: scroll;
    min-height: fit-content;
}

.snippet-container pre {
    margin: 0;
    width: 100%;
    max-height: 220px;
}

.snippet-container code {
    white-space: pre-wrap;
    min-height: fit-content;
    width: max-content;

}

.snippet-container::-webkit-scrollbar {
    display: none;  /* Safari and Chrome */
}

#username:hover {
    color: #5e6ef2;
}

</style>