<script>
export default {
  name: 'GistSnippet',
  props: {
    id: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      gist: null,
      monthsAgo: null,
      content: null,
      language: null,
      dataFetched: false,
    }
  },
  mounted() {
    fetch(`https://api.github.com/gists/${this.id}`)
      .then(response => response.json())
      .then(data => this.setValues(data));
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
        <pre class="snippet-container text-base" style="padding: 2rem; background-color: #141414;"><code style="display: inline-block; color: white;">{{ content}}</code></pre>
    </div>
</template>

<style>
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

</style>