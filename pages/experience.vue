<script>
export default {
  data() {
    if (this.$route.query.topic && this.$route.query.folder) {
      console.log('topic:' + this.$route.query.topic + 'folder:' + this.$route.query.folder);

      return {
        currentSection: String(this.$route.query.topic),
        folder: String(this.$route.query.folder),
        loading: true,
      };
    }

    return {
      currentSection: 'professional-info',
      folder: 'Experience',
      loading: true,
    };
  },
  /**
   * In setup we can define the data we want to use in the component before the component is created.
   */
  setup() {
    const config = useRuntimeConfig()
    return {
      config
    }
  },
  computed: {
    // Set active class to current page link
    isActive() {
      return folder => this.folder === folder;
    },
    isSectionActive() {
      return section => this.currentSection === section;
    },
  },
  methods: {
    focusCurrentSection(section) {
      this.currentSection = section.title
      this.folder = Object.keys(section.info)[0]
    },
    focusCurrentFolder(folder) {
      this.folder = folder.title
      // handle if folder belongs to the current section. It happens when you click on a folder from a different section in mobile view.
      this.currentSection = this.config.dev.about.sections[this.currentSection].info[folder.title] ? this.currentSection : Object.keys(this.config.dev.about.sections).find(section => this.config.dev.about.sections[section].info[folder.title])
    }
  },
  mounted(){
    this.loading = false
  }
}
</script>

<template>
  <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css">
  <main v-if="!loading" id="about-me" class="page" style="height: 85%;">

    <div id="page-menu" class="w-full flex" style="height: 100%;">
      <!-- focused section content -->
      <div id="section-content" class="hidden lg:block w-full h-full border-right" style="height: 100%;">
        
        <div v-for="(section, index) in config.dev.about.sections" :key="index">
          <div class="border-top" v-if="section.title == 'Profession'">

            <div class="header">
                <p class="poetsen-one-regular" style="color: #7547f3; text-align: left; flex-direction: column-reverse;">Class :</p>
                <h3 class="permanent-marker-regular" style="color: #7547f3; font-size: 36px;">{{section.status}}</h3>
            </div>
            <!-- folders -->
            <div v-if="section.title == 'Profession'" v-for="(folder, key) in section.info" class="topic grid grid-cols-2 items-center text-menu-text pl-6 pr-2" @click="focusCurrentFolder(folder)">
                <div class="hover:text-white hover hover:cursor-pointer folder">
                    <img :src="'/icons/folder' + '.svg'" alt="" class="mr-3" style="width: 24px; filter: invert(25%) sepia(71%) saturate(6497%) hue-rotate(249deg) brightness(105%) contrast(91%);">
                  <div class="poetsen-one-regular" style="margin-top: auto; margin-bottom: auto; width: 100%;">
                    <p :id="folder.title" :key="key" :class="{ active: isActive(folder.title)}" style="font-size: medium;">{{ folder.title }}</p>
                  </div>
                </div>
                <div v-if="folder.files !== undefined" class="col-span-2 source-code-pro ">
                  <div v-for="(file, key) in folder.files" :key="key" class="hover:text-white hover:cursor-pointer flex my-2">
                    <img id="diple" src="/icons/diple.svg">
                    <p style="font-size: small;">{{ key }}</p>
                  </div> 
                </div>
            </div>
          </div>
        </div>

      </div>

      <!-- mobile -->
      <div id="section-content" class="lg:hidden w-full">
        <div v-for="(section, index) in config.dev.about.sections" :key="index">
          <div class="border-top pb-6" v-if="section.title == 'Profession'">

            <div class="header" style="padding:20px;">
                <p class="poetsen-one-regular" style="color: #7547f3; text-align: left">Status :</p>
                <h3 class="permanent-marker-regular" style="color: #7547f3;">{{section.status}}</h3>
            </div>
            <!-- folders -->
            <div v-if="section.title == 'Profession'" v-for="(folder, key) in section.info" class="grid grid-cols-2 items-center text-menu-text pl-6 pr-2" @click="focusCurrentFolder(folder)">
                <div class="hover:text-white hover hover:cursor-pointer folder">
                    <img :src="'/icons/folder' + '.svg'" alt="" class="mr-3" style="width: 24px; filter: invert(25%) sepia(71%) saturate(6497%) hue-rotate(249deg) brightness(105%) contrast(91%);">
                  <div class="poetsen-one-regular" style="margin-top: auto; margin-bottom: auto; width: 100%;">
                    <p :id="folder.title" :key="key" :class="{ active: isActive(folder.title)}" style="font-size: medium;">{{ folder.title }}</p>
                  </div>
                </div>
                <div v-if="folder.files !== undefined" class="col-span-2 source-code-pro ">
                  <div v-for="(file, key) in folder.files" :key="key" class="hover:text-white hover:cursor-pointer flex my-2">
                    <img id="diple" src="/icons/diple.svg">
                    <p style="font-size: small;">{{ key }}</p>
                  </div> 
                </div>
            </div>
          </div>
        </div>
      </div>

    </div>
    <!-- MENU END -->

    <!-- content -->
    <div class="flex flex-col lg:grid" style="grid-template-columns: repeat(2, minmax(0, 1fr)); border-top: 2px solid #454843;">
      <div id="left" class="w-full flex flex-col">
        <!-- text -->
        <div id="commented-text" class="flex h-full w-full">

          <div class="w-full h-full ml-5 mr-10 lg:my-5 text-base pt-5" style="overflow-x: hidden; overflow-y:auto;"> 
              <p><span class="head" v-if="currentSection == 'professional-info'" v-html="config.dev.about.sections[currentSection].info[folder].header" style="color: #7547f3; font-family: 'Lucida Console', sans-serif; display: inline-block;"></span></p>
              <CommentedText 
                :text="config.dev.about.sections[currentSection].info[folder].description"
              />
          </div>
        </div>

      </div>

      <div id="right" class="max-w-full flex flex-col">   

        <!-- windows tab -->
        <div class="tab-height w-full h-full hidden lg:flex items-center"></div>
        <!-- windows tab mobile -->
        <div class="tab-height w-full h-full flex-none lg:hidden items-center "></div>
          
          <div v-if="currentSection === 'personal-info'" class="flex flex-col lg:px-6 lg:py-4 w-full" style="overflow: auto; padding: 20px;">
          
          </div>

          <div id="gists" v-if="currentSection === 'professional-info'" class="flex flex-col lg:px-6 lg:py-4 w-full" style="overflow: hidden; ">
            <!-- title -->
            <p class="rubik-mono-one-regular" style="color: white; padding-left: 20px;">My Github Gists</p>
            <div class="flex flex-col p-3" style="overflow-x: hidden; border-top-left-radius: 10px; border-bottom-left-radius: 10px; margin-top: 20px;">
              <!-- snippets -->
              <GistSnippet
                v-for="(gist, key) in config.public.dev.about.sections['professional-info'].gist"
                :key="key"
                :id="gist"
              />
            </div>
          </div>

          <div id="posts" v-if="currentSection === 'hobbies-info'" class="flex flex-col lg:px-6 lg:py-4 w-full" style="overflow: auto; ">
            <!-- title -->
            <p class="rubik-mono-one-regular" style="color: white; padding-left: 20px;">Blogs</p>
            <div class="flex flex-col" style="overflow-x: hidden;">
              <BlogSnippet
                v-for="(blog, key) in config.public.dev.about.sections['hobbies-info'].blogs" 
                :key="key" 
                :blog="blog"
              />
            </div>
          </div>

        </div>
      </div>
  </main>
</template>

<style scoped>
@import url('https://fonts.cdnfonts.com/css/lucida-console');
@import url('https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700;900&display=swap');
/* Hide scrollbar for Chrome, Safari and Opera */
::-webkit-scrollbar {
  display: none;

}

.header{
  display: flex;
  padding: 1vw;
  margin: auto;
  justify-content: center;
  text-align: center;
}

.header h3{
  font-size: 50px;
}

.section-arrow {
  transform: rotate(90deg);
}

#sections {
  width: 5rem;
  height: 100%;
  display: none;
  border-right: 1px solid #454843;
}

#section-icon{
  max-height: fit-content;
}

#section-content{
  background-color: #1f1f1f;
}


@media (min-width: 1024px) {
  #sections {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
}

#section-icon {
  @apply my-6 hover:cursor-pointer flex justify-center;
  opacity: 0.4;
}

.folder {
  width: 200%;
  height: 50px;
  display: flex;
  padding: 1vh;
}

.folder:hover {
  background-color: rgba(155, 155, 155, .1);
  border-radius: 8px;
}

#section-icon.active {
  opacity: 1;
}

#section-icon:hover {
  opacity: 1;
}

.tab-height {
  min-height: 35px;
  max-height: 35px;
}

#tab-mobile {
  padding: 25px 20px 0px 25px;
  align-items: flex-end;
}

#diple {
  @apply mx-3 w-2 max-w-fit;
}

.open {
  transform: rotate(90deg);
}

.active {
  color:white;
}

#right, #left {
  height: 100%;
  overflow: hidden;
}


@media (max-width: 1024px) {
  #about {
    min-height: stretch;
  }
}

.section-arrow {
  transition: 0.1s;
}

/* mobile */
@media (max-width: 768px) {
    .head{
     line-height: 1.25vw; 
        font-size: 1.5vw;
    }
}

/* tablet */
@media (min-width: 768px) and (max-width: 1024px) {
	.head{
    line-height: 1.25vw; 
    font-size: 1.25vw;
  }
}

/* desktop */
@media (min-width: 1025px){
	.head{
    line-height: .75rem; 
    font-size: .65rem;
  }
}



</style>