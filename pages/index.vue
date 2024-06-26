<script>
export default {
  name: 'Hello',
  setup() {
    const config = useRuntimeConfig()
    return {
      config
    }
  },
  data() {
    return {
      highlights: '',
      isMobile: false,
      loading: true
    }
  },
  mounted() {
    this.$nextTick(() => {
      const downloadButton = document.getElementById('download-cv');
      if (downloadButton) {
        downloadButton.addEventListener('click', this.downloadCV);
      }
    });

    if (window.innerWidth <= 1024) {
      this.isMobile = true;
    }

    window.addEventListener('resize', this.handleResize);

    // When the component is mounted, we can remove the loader.
    this.highlights = this.config.public.dev.highlights;
    this.loading = false;
  },
  beforeDestroy() {
    // Remove the event listener when the component is destroyed.
    window.removeEventListener('resize', this.handleResize)
  },
  methods: {
    handleResize() {
      if (window.innerWidth <= 1024) {
        this.isMobile = true
      } else {
        this.isMobile = false
      }
    },
    downloadCV() {
      const cvUrl = '/cv.pdf';
      const link = document.createElement('a');
      link.href = cvUrl;
      link.download = 'panyawat-puengthamthanapoom.pdf';
      link.click();
    }
  }
}

</script>

<template>
  	<main v-if="!loading" id="hello" class="max-w-full h-full" style="overflow-y: scroll; overflow-x: hidden;">
      <button v-if="isMobile==false" id="download-cv" class="w3-round-large w3-padding-large w3-margin-top mr-6 w3-right text-xs" style="height: fit-content; text-align: center; text-wrap: nowrap; color: white; 
        background-image: linear-gradient(180deg, rgba(247,61,147,1) 0%, rgba(82,92,235,1) 0%);">
        <div style="display: flex; flex-direction: row; align-items: center">
          <i class="fa fa-download" style="padding-top: .6px;"></i>
          <span class="px-1"></span>
          <p style="text-wrap: nowrap;">Download CV</p>
        </div>
      </button>
      <section class="hero" style="height: 35vw; flex-direction: column;">
        
        <div style="height: 100%; justify-content: end;"></div>
        <div class="head" style="color: white; padding-left: 5vw; padding-top: 2vh;">
          <h1 class="permanent-marker-regular">{{ config.dev.name }}</h1>
          <h2 class="jersey-15-regular">> {{ config.dev.role }}</h2>
        </div>

      </section>

      <section class="hero source-code-pro" style="height: fit-content; margin-top: 5vw; margin-bottom: 5vw;">
        <div class="middle">
          <div class="w3-container w3-content" style="max-width:800px;">
            <h2 class="w3-wide text-3xl pl-6 pb-6 silkscreen-regular custom" style="color: white;">WHO AM I</h2>
            <div class="box">
              
              <p class="text-base p-4" style="color: white;">I'm a game developer and currently a Computer Game and Esport student at Rangsit University. 
                I've passion to create unique artstyle and refined mechanics for game ( <b>Mostly Stylized</b> ).
                I also enjoy creating tools for artists in my team and solve problems to improve quality in my game.
                <br>
                <br>Most of my work often come from my personal interests, Sometimes it's become a challenging task I never experienced.
                Which's why I'm always strive for new experience and do my best in any given task.
              </p>
              <div class="p-6 flex flex-row-reverse">
                <a class="pill">
                  <i class="fa-solid fa-code" style="font-size: 16px; color: white;"></i>
                  Developer
                </a>
                <span class="px-2"></span>
              </div>
            </div>
          
            
            <div class="source-code-pro" style="display:flex; flex-direction: row-reverse;">
              <RouterLink 
              id="nav-link" 
              to="/about" 
              target="" 
              class="w3-round-large w3-padding-large w3-margin-top w3-right text-xs" 
              style="height: fit-content; text-align: center; text-wrap: nowrap; color: white; 
              background-image: linear-gradient(180deg, rgba(247,61,147,1) 0%, rgba(82,92,235,1) 0%);">
                See More in About Me
              </RouterLink>
            </div>
          </div>
        </div>
      </section>

      <section class="hero" style="height: fit-content;  padding: 2vw; text-align: center; flex-direction: column;">
        <div>
          <h2 class="w3-wide text-3xl silkscreen-regular pb-6" style="color: white;">WHAT I DO</h2>
          <div class="w3-content box">
              <section class="skills" style="width: fit-content;"> 
                <div> 
                  <i class="fa-regular fa-pen-to-square" style="font-size: 36px; color: #F73D93;"></i>
                  <span class="px-1"></span>
                  <h2 class="rubik-mono-one-regular" style="font-size: 36px; color: #F73D93;">Design</h2> 
                  <span class="px-1"></span>
                  <p class="source-code-pro" style="color: gray;">Possess passion in game & graphic design with a focus on shaping experiences for players.</p>
                </div> 

                <div> 
                  <i class="fa-solid fa-laptop-file" style="font-size: 36px; color: #7547f3;"></i>
                  <span class="px-1"></span>
                  <h2 class="rubik-mono-one-regular" style="font-size: 36px; color: #7547f3;">Create</h2> 
                  <span class="px-1"></span>
                  <p class="source-code-pro" style="color: gray;">Implementing and Testing features to deliver immersive and engaging gameplay.</p>
                </div> 

                <div> 
                  <i class="fa-solid fa-code" style="font-size: 36px; color: #525CEB;"></i>
                  <span class="px-1"></span>
                  <h2 class="rubik-mono-one-regular" style="font-size: 36px; color: #525CEB;">Code</h2> 
                  <span class="px-1"></span>
                  <p class="source-code-pro" style="color: gray;">Maintaining code quality and efficiency, writing clean, reusable and optimized code to ensure smooth gaming experiences.</p>
                </div> 

                
              </section>
          </div>
        </div>
      </section>

      <section class="hero" style="width: fit-content; padding-top: 5vh;">
        <div style="padding: 2vw;">
          <div class="box" style="padding: 2vw;">
            <h2 class="w3-wide text-3xl pb-2 silkscreen-regular" style="color: white;">GAME DEVELOPMENT</h2>
            <p class="w3-opacity source-code-pro" style="color: white"><i>Create with Passion</i></p>
            <span class="px-1"></span>
            
            <div class="grid-container">
              <div class="container" v-for="(highlights, key) in highlights.projects" :key="key">
                <div class="card">
                  <div class="slide slide1" >
                    <div class="container h-auto">
                      <video :src="highlights.video" autoplay='true' loop muted class="video"></video>
                    </div>
                  </div>
                  <div style="width: 100%; padding: 2vh;">
                      <h3 v-if="index == null" class="source-code-pro mr-3" style="font-size:smaller; text-wrap:wrap; color: white;">{{ highlights.name}}</h3>
                      <h3 v-else class="font-fira_bold mr-3" style="font-size:smaller; text-wrap:wrap; color: white;">{{ highlights.name}}</h3>
                      <p class="text-menu-text source-code-pro text-sm mb-5 source-code-pro">
                        {{ highlights.description }}
                      </p>
                  </div>
                </div>
              </div>
            </div>

          </div>
          <RouterLink 
          id="nav-link" 
          to="/projects" 
          class="w3-round-large w3-dark-grey w3-padding-large w3-margin-top w3-margin-bottom w3-right text-xs source-code-pro"
          style="height: fit-content; text-align: center; text-wrap: nowrap; color: white; 
          background-image: linear-gradient(180deg, rgba(247,61,147,1) 0%, rgba(82,92,235,1) 0%);">
            See More in My Journey
          </RouterLink>
        </div>
      </section>  

      <section class="hero flex custom-flex" style="height: fit-content;">
        <div id="left" style="grid-template-columns: repeat(2, minmax(0, 1fr));">
            <div class="w3-container source-code-pro" style="max-width:850px; margin: auto; display: flex; flex-direction: column;">
              <h2 class="w3-wide text-3xl pl-6 pb-3 silkscreen-regular custom" style="color: white;">WHAT I USE</h2>
              <div class="w3-row-padding box" style="height: fit-content;"> 
                <p class="source-code-pro" style="padding: 1vh; color: white;">These are the software I've encountered throughout my journey. The ones highlighted in bold represent my areas of expertise, favourite or interest one.</p>
                <div class="w3-quarter">
                  <ul class="w3-ul w3-gray w3-center" >
                    <li class="w3-black w3-padding-16" style="font-size: 12px">TOOLS</li>    
                    <li class="w3-padding-16"> 
                      <a href="https://www.gimp.org/" target="_blank" class="w3-opacity w3-hover-opacity-off" style="font-size: 12px">Gimp</a> 
                    </li>
                    <li class="w3-padding-16"> 
                      <a href="https://www.darktable.org/" target="_blank" class="w3-opacity w3-hover-opacity-off" style="font-size: 12px">Darktable</a> 
                    </li>
                    <li class="w3-padding-16"> 
                      <a href="https://www.openshot.org/" target="_blank" class="w3-opacity w3-hover-opacity-off" style="font-size: 12px">OpenShot</a> 
                    </li>
                    <li class="w3-padding-16"> 
                      <a href="https://www.reaper.fm/" target="_blank" class="w3-opacity w3-hover-opacity-off" style="font-size: 12px">Reaper</a> 
                    </li>
                  </ul>
                </div>  

                <div class="w3-quarter">
                  <ul class="w3-ul w3-gray w3-center" style="min-width: 100px;">
                    <li class="w3-black w3-padding-16" style="font-size: 12px">DESIGN</li>
                    <li class="w3-padding-16"> 
                      <a href="https://www.figma.com/" target="_blank" class="w3-opacity w3-hover-opacity-off" style="font-size: 12px; font-style:italic ; font-weight: 1000;">Figma</a> 
                    </li>
                    <li class="w3-padding-16"> 
                      <a href="https://procreate.com/" target="_blank" class="w3-opacity w3-hover-opacity-off" style="font-size: 12px">Procreate</a> 
                    </li>
                    <li class="w3-padding-16"> 
                      <a href="https://www.blender.org/" target="_blank" class="w3-opacity w3-hover-opacity-off" style="font-size: 12px">Blender</a> 
                    </li>
                    <li class="w3-padding-16"> 
                      <a href="https://en.wikipedia.org/wiki/Autodesk_Maya" target="_blank" class="w3-opacity w3-hover-opacity-off" style="font-size: 12px; font-style:italic ; font-weight: 1000;">Autodesk Maya</a> 
                    </li>
                    <li class="w3-padding-16"> 
                      <a href="https://store.steampowered.com/app/2718190/Substance_3D_Painter_2024/" target="_blank" class="w3-opacity w3-hover-opacity-off" style="font-size: 12px">Subtance Painter</a> 
                    </li>
                  </ul>
                </div>

                <div class="w3-quarter">
                  <ul class="w3-ul w3-gray w3-center" >
                    <li class="w3-black w3-padding-16" style="font-size: 12px">DEVELOPMENT</li>
                    <li class="w3-padding-16"> 
                      <a class="w3-opacity w3-hover-opacity-off" style="font-size: 12px; font-style:italic ; font-weight: 1000;">C# Scripting</a> 
                    </li>
                    <li class="w3-padding-16"> 
                      <a class="w3-opacity w3-hover-opacity-off" style="font-size: 12px; font-style:italic ; font-weight: 1000;">Unity Development</a> 
                    </li>
                    <li class="w3-padding-16"> 
                      <a class="w3-opacity w3-hover-opacity-off" style="font-size: 12px;">HTML & CSS</a> 
                    </li> 
                    <li class="w3-padding-16"> 
                      <a class="w3-opacity w3-hover-opacity-off" style="font-size: 12px">Nuxt.js</a> 
                    </li> 
                    <li class="w3-padding-16"> 
                      <a href="https://firebase.google.com/docs/unity/setup" target="_blank" class="w3-opacity w3-hover-opacity-off" style="font-size: 12px; font-style:italic ; font-weight: 1000;">Firebase</a> 
                    </li>             
                    <li class="w3-padding-16"> 
                      <a href="https://docs.unity3d.com/Manual/Shaders.html" class="w3-opacity w3-hover-opacity-off" style="font-size: 12px; font-style:italic ; font-weight: 1000;">Shaders</a> 
                    </li>
                  </ul>
                </div>

                <div class="w3-quarter">
                  <ul class="w3-ul w3-gray w3-center">
                    <li class="w3-black w3-padding-16" style="font-size: 12px">SOFTWARES</li>
                    <li class="w3-padding-16"> 
                      <a href="https://cli.github.com/" target="_blank" class="w3-opacity w3-hover-opacity-off" style="font-size: 12px;">Git</a> 
                    </li>    
                    <li class="w3-padding-16"> 
                      <a href="https://code.visualstudio.com/" target="_blank" class="w3-opacity w3-hover-opacity-off" style="font-size: 12px">Visual Studio Code</a> 
                    </li>
                    <li class="w3-padding-16"> 
                      <a href="https://www.jetbrains.com/rider/" target="_blank" class="w3-opacity w3-hover-opacity-off" style="font-size: 12px; font-style:italic ; font-weight: 1000;">Jetbrain Rider</a> 
                    </li>
                    <li class="w3-padding-16"> 
                      <a href="https://unity.com/" target="_blank" class="w3-opacity w3-hover-opacity-off" style="font-size: 12px; font-style:italic ; font-weight: 1000;">Unity Engine</a> 
                    </li>
                    <li class="w3-padding-16"> 
                      <a href="https://www.fmod.com/unity" target="_blank" class="w3-opacity w3-hover-opacity-off" style="font-size: 10px;">FMOD Studio</a> 
                    </li>
                  </ul>
                </div>
              </div>
            </div>     
        </div>

        <div id="right" class="max-w-full flex flex-col">   
            <div style="height: fit-content;">
              <div class="w3-container w3-content" style="max-width:1000px; padding: 2vw;">
                <h2 class="w3-wide text-3xl pb-3 silkscreen-regular custom" style="color: white;">LANGUAGES</h2>
                <section class="box text-sm source-code-pro"> 
                    <div style="box-shadow: var(--shadow-2); padding: 1vh;">
                      <p style="color: white"><b>THAI</b></p>
                      <span class="px-0.5"></span>
                      <div class="w3-light-grey w3-round-xlarge">
                        <div class="w3-round-xlarge w3-gray" style="height:24px;width:99%"></div>
                      </div>
                      <p style="color: gray; padding-top: 1vh;">Native Speaker</p>
                    </div>
                    <div style="box-shadow: var(--shadow-2); padding: 1vh;">
                      <p style="color: white"><b>ENGLISH</b></p>
                      <span class="px-0.5"></span>
                      <div class="w3-light-grey w3-round-xlarge">
                        <div class="w3-round-xlarge w3-gray" style="height:24px;width:65%"></div>
                      </div>
                      <p style="color: gray; padding-top: 1vh;">I understand well but my speaking and my grammar aren't so good.</p>
                    </div>
                </section>
              </div>
            </div>
            

          </div>
      </section>
      
      <section class="hero" style="margin-top: 5vw; padding: 2vh; flex-direction: column;">
        <div>
          <div class="box">
            <h2 class="w3-wide text-2xl silkscreen-regular" style="color: white">RECENT EVENTS</h2>
            <span class="px-1"></span>
            <div class="media-scroller " style="padding:2vh;">
              <div class="media-element container" v-for="(activities, key) in highlights.activities" :key="key">
                <div class="card">
                  <div class="slide slide1">
                    <NuxtLink>
                      <img id="h-auto" :src="activities.img" >
                    </NuxtLink>
                  </div>
                  <div style="padding: 1vh;">
                    <div>
                      <h3 v-if="index == null" class="source-code-pro mr-3" style="font-size:smaller; text-wrap:wrap; color: white">{{ activities.name}}</h3>
                      <h3 v-else class="font-fira_bold mr-3" style="font-size:smaller; text-wrap:wrap; color: white">{{ activities.name}}</h3>
                      <p class="text-menu-text source-code-pro text-sm mb-5">
                        {{ activities.description }}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- <RouterLink 
          id="nav-link" 
          to="/about-me?topic=hobbies-info&folder=Game" 
          class="w3-round-large w3-dark-grey w3-padding-large w3-margin-top w3-margin-bottom w3-left text-xs source-code-pro"
          style="height: fit-content; text-align: center; text-wrap: nowrap; color: white; background-image: linear-gradient(rgba(173, 65, 253, .77), rgba(94, 65, 253, .97));">
              See More in My Hobbies
          </RouterLink> -->
        </div>
      </section>

	  </main>
</template>

<style scoped>
#nav-link {
  transition: all 0.3s ease; /* Add transition for smooth effect */
}

#nav-link:hover {
  transform: scale(1.05); /* Increase the scale on hover */
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3); /* Add a box shadow on hover */
}

button {
  transition: all 0.3s ease; /* Add transition for smooth effect */
}

button:hover {
  transform: scale(1.05); /* Increase the scale on hover */
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3); /* Add a box shadow on hover */
}

.pill {
  background-color: #F73D93;
  border-radius: 500px;
  border-width: 0;
  box-shadow: rgba(0,0,0,.25) 0 1px 3px,rgba(0,0,0,.12) 0 4px 10px;
  box-sizing: border-box;
  color: #fff;
  display: inline-block;
  line-height: 1.5;
  font-weight: 500;
  margin: 0;
  overflow: hidden;
  padding: .3em 1em;
  text-decoration: none;
  text-overflow: ellipsis;
  vertical-align: baseline;
  white-space: nowrap;
  cursor: default;
}

.grid-container {
  columns: 3 350px;
  column-gap: 3rem;
  margin: 0 auto;

  .card {
    display: inline-block;
    margin: 0 1.5rem 1.5rem 0;
    width: 100%;
    
    box-shadow: 15px 15px 15px rgba(0,0,0,0.5);
    border-radius: 15px;
    border-top-right-radius: 15px;
    border-top-left-radius: 15px;

    video {
      border-top-right-radius: 15px;
      border-top-left-radius: 15px;
      width: 100%;
    }
  }
}

@import "https://unpkg.com/open-props";
@import "https://unpkg.com/open-props/normalize.min.css";

.media-scroller {
  display: flex;
  flex-wrap: nowrap;
  overflow-x: auto;
  overflow-y: hidden;
  scroll-behavior: smooth;
  scroll-snap-type: x mandatory;
  scrollbar-width: thin;
  -ms-overflow-style: none; /* Hide scrollbar for IE and Edge */
}

.media-element {
  scroll-snap-align: start;
  flex: 0 0 auto;
  width: 70vw;
  max-width: 350px;
  min-height: 17.5rem;
  margin-right: 1rem; /* Add some spacing between elements */
}

.container .card {
  box-shadow: 15px 15px 15px rgba(0,0,0,0.5);
  border-radius: 15px;
}

.container .card .slide.slide1 {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;
  transition: .7s;
}

.container .card .slide.slide2 {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;

}

.container .card:hover .slide .slide2{
  transform: translateY(0);
}

.container .card .slide.slide2::after{
  content: "";
  bottom: 15px;
  transform: translateX(-50%);
}

.container .card .slide.slide2 .content p {
  margin: 0;
  padding: 0;
  text-align: center;
}

.container .card .slide.slide2 .content h3 {
  margin: 0 0 10px 0;
  padding: 0;
  font-size: 24px;
  text-align: center;
} 

#hello { 
  width: 100%;
  border-top: 2px solid #454843;
}

.hero {
	width: 100%;
}

#hello .hero {
	display: flex;
	margin: 0rem;
}


#hello .head span {
  line-height: 1;
  color: #E5E9F0;
}

#hello .head h1 {
  line-height: 1;
  color: #E5E9F0;
}

#hello .head h2 {
  font-size: 48px;
  line-height: 1;
  color: #F73D93;
}

.box{
  border: 1px solid white;
  border-radius: 0.75rem;
  padding: 1.5rem;
  background-color: var(--gray-999_40);
  box-shadow: var(--shadow-sm);
  
  
}

.skills{
  display: flex;
  flex-direction: column;
  gap: 3rem;
}

.skills div{
  width: 100%;
}

@media (min-width: 50em){
  .middle {
    margin-left: auto;
  }

  .skills{
    display: grid;
    grid-template-columns: repeat(3, 10fr);
  }

  .skills div{
    max-width: 500px;
  }

  .box{
    border-radius: 1.5rem;
    padding: 2.5rem;
    min-height: 350px;
  }

  .custom-flex{
    display: flex;
    flex-direction: row
  }

  #left{
  width: 65%;

  }

  #right{
    width: 45%;

  }
}

/* mobile */
@media (max-width: 768px) {
  ::-webkit-scrollbar {
  display: none;

  } 

	#hello {
		padding-left: 0;
	}

	#hello .hero {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
	}

  #hello .head h1 {
		font-size: 30px;
	}

	#hello .head h2 {
		font-size: 20px;
	}

  .custom{
    text-align: center;
    margin: auto;
  }

  #left{
  width: 100%;

  }

  #right{
    width: 100%;

  }
}

/* tablet */
@media (min-width: 768px) and (max-width: 1024px) {
  ::-webkit-scrollbar {
  display: none;

  }

  #left{
  width: 100%;

  }

  #right{
    width: 100%;

  }

	#hello {
		padding-left: 0;
	}

	#hello .hero {
		display: flex;
    min-height: 400px;
		flex-direction: column;
    margin: auto;
	}

  #hello .hero .head{
    padding-top: 5vh;
  }

  .w3-row-padding .box {
    display: flex;
		flex-direction: column;
    justify-content: center;
  }

  #hello .head h1 {
		font-size: 50px;
	}

	#hello .head h2 {
		font-size: 60px;
	}

  .custom{
    text-align: center;
    margin: auto;
  }
}

@media (min-width: 1025px){
	#hello .head h1 {
		font-size: 100px;
	}

  
}

</style>

