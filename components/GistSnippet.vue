<script>
import hljsVuePlugin from "@highlightjs/vue-plugin";
import 'highlight.js';

export default {
    name: 'GistSnippet',
    props: {
        id: {
            type: String,
            required: true
        }
    },
    data(){
        return {
            gist: null,
            monthsAgo: null,
            content: null,
            language: null,
            dataFetched: false,
        }
    },
    mounted(){
        fetch(`https://api.github.com/gists/${this.id}`)
            .then(response => response.json())
            .then(data => this.setValues(data))
            
    },
    components: {
        highlightjs: hljsVuePlugin.component
    },
    methods: {
        async setValues(gist) {
        this.gist = gist
        this.monthsAgo = this.setMonths(gist.created_at)
        this.content = this.setSnippet(gist)
        this.language = Object.values(gist.files)[0].language
        this.dataFetched = true
        },
        setMonths(date) {
            let now = new Date()
            let gistDate = new Date(date)
            let diff = now.getTime() - gistDate.getTime()
            let days = Math.floor(diff / (1000 * 3600 * 24))
            let months = Math.floor(days / 30)
            return months
        },
        setSnippet(gist) {
            let snippet = Object.values(gist.files)[0].content
            return snippet
        },
    }
}
</script>

<template>
    <div class="gist mb-5" v-if="dataFetched">
        
        <!-- head info -->
        <div class="flex justify-between my-2" style="overflow: hidden;">

            <div class="flex">
                <!-- avatar -->
                <img :src="gist.owner.avatar_url" alt="" class="w-8 h-8 rounded-full mr-2">
    
                <!-- username & gist date info -->
                <div class="flex flex-col" >
                    <a id="username" :href="'https://github.com/' + gist.owner.login" target="_blank" class="font-fira_bold text-purple-text text-xs pb-1 hover:cursor-pointer">
                        @{{ gist.owner.login }}
                    </a>
                    <p class="font-fira_retina text-xs text-menu-text">Created {{ monthsAgo }} months ago</p>
                </div>
            </div>
            
        </div>

        <highlightjs class="snippet-container" :language="this.language" :code="content" style="overflow: hidden; font-size: 1vh;"/>
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

pre code.hljs{
    display:block;
    padding:1.5em
}

code.hljs{
    padding:3px 5px
}

#comment {
    font-size: 14px;
}

#username:hover {
    color: #5e6ef2;
}

.hljs{color:#607B96;background:#011221}.hljs-doctag,.hljs-keyword,.hljs-meta .hljs-keyword,.hljs-template-tag,.hljs-template-variable,.hljs-type,.hljs-variable.language_{color:#ff7b72}.hljs-title,.hljs-title.class_,.hljs-title.class_.inherited__,.hljs-title.function_{color:#d2a8ff}.hljs-attr,.hljs-attribute,.hljs-literal,.hljs-meta,.hljs-number,.hljs-operator,.hljs-selector-attr,.hljs-selector-class,.hljs-selector-id,.hljs-variable{color:#79c0ff}.hljs-meta .hljs-string,.hljs-regexp,.hljs-string{color:#a5d6ff}.hljs-built_in,.hljs-symbol{color:#ffa657}.hljs-code,.hljs-comment,.hljs-formula{color:#8b949e}.hljs-name,.hljs-quote,.hljs-selector-pseudo,.hljs-selector-tag{color:#7ee787}.hljs-subst{color:#c9d1d9}.hljs-section{color:#1f6feb;font-weight:700}.hljs-bullet{color:#f2cc60}.hljs-emphasis{color:#c9d1d9;font-style:italic}.hljs-strong{color:#c9d1d9;font-weight:700}.hljs-addition{color:#aff5b4;background-color:#033a16}.hljs-deletion{color:#ffdcd7;background-color:#67060c}

</style>