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
    if (window.innerWidth <= 1024) {
      this.isMobile = true
    }

    window.addEventListener('resize', this.handleResize)

    // When the component is mounted, we can remove the loader.
    this.highlights = this.config.public.dev.highlights
    this.loading = false
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
  }
}
</script>

<template>
    <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css">
  	<main v-if="!loading" id="hello" class="max-w-full h-full" style="overflow-y: scroll; overflow-x: hidden;">

    	<!-- gradients -->
    	<div class="css-blurry-gradient-blue"></div>
    	<div class="css-blurry-gradient-green"></div>

      <section class="hero" style="height: 100%;">
        <div style="height: 100%; justify-content: end;">
          
        </div>
        <div class="head" style="padding-bottom: 5vh; color: white;">
          <h1>{{ config.dev.name }}</h1>
          <h2>> {{ config.dev.role }}</h2>
        </div>

      </section>

      <section class="hero" style="height: fit-content;">
        <div style="justify-content: center; margin: 0; padding-right: 5vw;">
          <div class="w3-container w3-content w3-right" style="max-width:800px;">
            <h2 class="w3-wide" style="color: white;">WHO AM I</h2>
            <p class="box text-sm" style="color: white;">I'm a game developer and currently a Computer Game and Esport student at Rangsit University. 
              I've passion for both art and coding for games and interested in games with unique design and artstyle ( <b>Mostly Stylized</b> ).
              I like to solve problems and improve game quality, create tools for artists in my team.
              <br>
              <br>Most of my work often come from my personal interests, which sometimes become a challenging task I haven't experienced.
              That's why I'm aways strive for new experience and do my best in any given task.
            </p>
            <div style="display:flex; flex-direction: row-reverse;">
              <RouterLink 
              id="nav-link" 
              to="/about-me?topic=personal-info&folder=bio" 
              target="" 
              class="w3-round-large w3-dark-grey w3-padding-large w3-margin-top w3-right text-xs" 
              style="height: fit-content; text-align: center; text-wrap: nowrap;">
                See more On About Me
              </RouterLink>
              <span class="px-2"></span>
              <button 
              class="w3-round-large w3-dark-grey w3-padding-large w3-margin-top w3-right text-xs" 
              style="height: fit-content; width: fit-content; text-align: center;">
                <div style="display: flex; flex-direction: row; align-items: center">
                  <i class="fa fa-download" style="padding-top: .6px;"></i> 
                  <span class="px-1"></span>
                  <p style="text-wrap: nowrap;">Download CV</p>
                </div>
              </button>
            </div>
          </div>
        </div>
      </section>

      <section class="hero" style="height: fit-content; padding-top: 5vh;">
        <div style=" padding: 2vw; padding-right: 5vh;">
          <div class="box" style="padding: 2vh;">
            <h2 class="w3-wide">MY HIGHLIGHTS</h2>
            <p class="w3-opacity"><i>Create with Passion</i></p>
            <span class="px-1"></span>
            <div class="media-scroller snaps-inline" style="padding-top:1vh;">
              <div class="media-element container max-w-full" v-for="(highlights, key) in highlights.projects" :key="key">
                <div class="card" style="width: 100%;">
                  <div class="slide slide1" >
                    <div class="container h-auto">
                      <img :src="highlights.img" alt="" class="image">
                      <video :src="highlights.video" autoplay='true' loop muted class="video"></video>
                    </div>
                  </div>
                  <div class="slide slide2" style="padding: 1vh;">
                    <div style="width: 100%;">
                      <h3 v-if="index == null" class="font-fira_bold mr-3" style="font-size:smaller; text-wrap:wrap;">{{ highlights.name}}</h3>
                      <h3 v-else class="font-fira_bold mr-3" style="font-size:smaller; text-wrap:wrap;">{{ highlights.name}}</h3>
                      <p class="text-menu-text font-fira_retina text-sm mb-5">
                        {{ highlights.description }}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <RouterLink 
          id="nav-link" 
          to="/projects" 
          class="w3-button w3-round-large w3-dark-grey w3-padding-large w3-margin-top w3-margin-bottom w3-left text-xs">
            See more On My Journey
          </RouterLink>
        </div>
      </section>  
      
      <section class="hero">
        <div style="justify-content: center;">
          <div class="w3-container w3-content w3-right" style="max-width:800px; padding: 2vw; padding-right: 5vh;">
            <h2 class="w3-wide">WHAT I DO</h2>
              <section class="box skills" data-astro-cid-ab4ihpzs=""> 

                <div class="stack gap-2 lg:gap-4" data-astro-cid-ab4ihpzs=""> 
                  <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 256 256" aria-hidden="true" color="white" stroke="white" style="--size:2.5rem" class="astro-patnjmll" data-astro-cid-patnjmll=""> 
                    <g data-astro-cid-patnjmll="">
                      <path fill="none" color="white" stroke="white" stroke-linecap="round" stroke-linejoin="round" stroke-width="16" d="m80 96 40 32-40 32m56 0h40"></path>
                      <rect width="192" height="160" x="32" y="48" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="16.97" rx="8.5"></rect>
                    </g> 
                    <linearGradient id="icon-gradient-2iemuxwxn" x1="23" x2="235" y1="43" y2="202" gradientUnits="userSpaceOnUse" data-astro-cid-patnjmll=""> 
                      <stop stop-color="var(--gradient-stop-1)" data-astro-cid-patnjmll=""></stop> 
                      <stop offset=".5" stop-color="var(--gradient-stop-2)" data-astro-cid-patnjmll=""></stop> 
                      <stop offset="1" stop-color="var(--gradient-stop-3)" data-astro-cid-patnjmll=""></stop> 
                    </linearGradient> 
                  </svg>  
                  <h2 data-astro-cid-ab4ihpzs="">Design</h2> 
                  <p data-astro-cid-ab4ihpzs="" style="color: gray;">Ready to exploring new concepts, ideas and Craft creative designs with passion.</p> 
                </div> 

                <div class="stack gap-2 lg:gap-4" data-astro-cid-ab4ihpzs=""> 
                  <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 256 256" aria-hidden="true" color="white" stroke="white" style="--size:2.5rem" class="astro-patnjmll" data-astro-cid-patnjmll=""> 
                  <g data-astro-cid-patnjmll="">
                    <path fill="none" color="white" stroke="white" stroke-linecap="round" stroke-linejoin="round" stroke-width="16" d="m80 96 40 32-40 32m56 0h40"></path>
                    <rect width="192" height="160" x="32" y="48" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="16.97" rx="8.5"></rect>
                  </g> 
                  <linearGradient id="icon-gradient-5gd8gfvm" x1="23" x2="235" y1="43" y2="202" gradientUnits="userSpaceOnUse" data-astro-cid-patnjmll=""> 
                    <stop stop-color="var(--gradient-stop-1)" data-astro-cid-patnjmll=""></stop> <stop offset=".5" stop-color="var(--gradient-stop-2)" data-astro-cid-patnjmll=""></stop> 
                    <stop offset="1" stop-color="var(--gradient-stop-3)" data-astro-cid-patnjmll=""></stop> 
                  </linearGradient> 
                  </svg>  
                  <h2 data-astro-cid-ab4ihpzs="">Create</h2> 
                  <p data-astro-cid-ab4ihpzs="" style="color: gray;">Implement Features and script which easy to use and setup.</p> 
                </div> 

                <div class="stack gap-2 lg:gap-4" data-astro-cid-ab4ihpzs=""> 
                  <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 256 256" aria-hidden="true" color="white" stroke="white" style="--size:2.5rem" class="astro-patnjmll" data-astro-cid-patnjmll=""> 
                    <g data-astro-cid-patnjmll="">
                      <path fill="none" color="white" stroke="white" stroke-linecap="round" stroke-linejoin="round" stroke-width="16" d="m80 96 40 32-40 32m56 0h40"></path>
                      <rect width="192" height="160" x="32" y="48" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="16.97" rx="8.5"></rect>
                    </g> 
                    <linearGradient id="icon-gradient-2kj3qwynw" x1="23" x2="235" y1="43" y2="202" gradientUnits="userSpaceOnUse" data-astro-cid-patnjmll=""> 
                      <stop stop-color="var(--gradient-stop-1)" data-astro-cid-patnjmll=""></stop> <stop offset=".5" stop-color="var(--gradient-stop-2)" data-astro-cid-patnjmll=""></stop> 
                      <stop offset="1" stop-color="var(--gradient-stop-3)" data-astro-cid-patnjmll=""></stop> 
                    </linearGradient> 
                  </svg>  
                  <h2 data-astro-cid-ab4ihpzs="">Coding</h2> 
                  <p data-astro-cid-ab4ihpzs="" style="color: gray;">Ensured code quality for read and understand easily.</p>
                </div> 
              </section>
              <RouterLink 
              id="nav-link" 
              to="/about-me?topic=professional-info&folder=experience" 
              class="w3-button w3-round-large w3-dark-grey w3-padding-large w3-margin-top w3-margin-bottom w3-right text-xs">
                See more On My Experiences
              </RouterLink>
          </div>
        </div>
      </section>

      <section class="hero">
        <div>
          <div class="w3-container" style="max-width:800px; padding-right: 5vh;">
            <h2 class="w3-wide">WHAT I USE</h2>
            <span class="px-2"></span>

            <div class="w3-row-padding box" style="max-width:100%; height: fit-content; padding-right: 5vw; padding: 2vw;"> 
              <p class="w3-justify" style="padding: 2vh">These're software, I've ever use in my journey.</p>
              <div class="w3-quarter">
                <ul class="w3-ul w3-gray w3-center" style="min-width: 100px;">
                  <li class="w3-black w3-padding-16" style="font-size: 12px">Editing</li>    
                  <li class="w3-padding-16"> 
                    <a href="https://www.gimp.org/" target="_blank" class="w3-opacity w3-hover-opacity-off" style="font-size: 12px">Gimp</a> 
                  </li>
                  <li class="w3-padding-16"> 
                    <a href="https://kdenlive.org/en/" target="_blank" class="w3-opacity w3-hover-opacity-off" style="font-size: 12px">Kdenlive</a> 
                  </li>
                  <li class="w3-padding-16"> 
                    <a href="https://www.reaper.fm/" target="_blank" class="w3-opacity w3-hover-opacity-off" style="font-size: 12px">Reaper</a> 
                  </li>
                </ul>
              </div>  

              <div class="w3-quarter">
                <ul class="w3-ul w3-gray w3-center" style="min-width: 100px;">
                  <li class="w3-black w3-padding-16" style="font-size: 12px">Design</li>
                  <li class="w3-padding-16"> 
                    <a href="https://www.figma.com/" target="_blank" class="w3-opacity w3-hover-opacity-off" style="font-size: 12px">Figma</a> 
                  </li>
                  <li class="w3-padding-16"> 
                    <a href="https://procreate.com/" target="_blank" class="w3-opacity w3-hover-opacity-off" style="font-size: 12px">Procreate</a> 
                  </li>
                  <li class="w3-padding-16"> 
                    <a href="https://en.wikipedia.org/wiki/Autodesk_Maya" target="_blank" class="w3-opacity w3-hover-opacity-off" style="font-size: 12px">Autodesk Maya</a> 
                  </li>
                  <li class="w3-padding-16"> 
                    <a href="https://store.steampowered.com/app/2718190/Substance_3D_Painter_2024/" target="_blank" class="w3-opacity w3-hover-opacity-off" style="font-size: 12px">Subtance Painter</a> 
                  </li>
                </ul>
              </div>

              <div class="w3-quarter">
                <ul class="w3-ul w3-gray w3-center" >
                  <li class="w3-black w3-padding-16" style="font-size: 12px">Development</li>    
                  <li class="w3-padding-16"> 
                    <a href="https://code.visualstudio.com/" target="_blank" class="w3-opacity w3-hover-opacity-off" style="font-size: 12px">Visual Studio Code</a> 
                  </li>
                  <li class="w3-padding-16"> 
                    <a href="https://www.jetbrains.com/rider/" target="_blank" class="w3-opacity w3-hover-opacity-off" style="font-size: 12px">Jetbrain Rider</a> 
                  </li>
                  <li class="w3-padding-16"> 
                    <a href="https://unity.com/" target="_blank" class="w3-opacity w3-hover-opacity-off" style="font-size: 12px">UnityEngine C#</a> 
                  </li>
                  <li class="w3-padding-16"> 
                    <a href="https://www.fmod.com/unity" target="_blank" class="w3-opacity w3-hover-opacity-off" style="font-size: 10px">FMOD<br>Unity Plugin</a> 
                  </li>
                  <li class="w3-padding-16"> 
                    <a href="https://www.yarnspinner.dev/" target="_blank" class="w3-opacity w3-hover-opacity-off" style="font-size: 10px;">Yarn Spinner<br>Unity Plugin</a> 
                  </li>
                </ul>
              </div>

              <div class="w3-quarter">
                <ul class="w3-ul w3-gray w3-center">
                  <li class="w3-black w3-padding-16" style="font-size: 12px">Other</li>
                  <li class="w3-padding-16"> 
                    <a href="https://www.notion.so/" target="_blank" class="w3-opacity w3-hover-opacity-off" style="font-size: 12px">Notion</a> 
                  </li>
                  <li class="w3-padding-16"> 
                    <a href="https://www.notion.so/" target="_blank" class="w3-opacity w3-hover-opacity-off" style="font-size: 12px">Miro</a> 
                  </li>                 
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="hero">
        <div style="height: fit-content;">
          <div class="w3-container w3-content w3-right" style="max-width:1000px; padding: 2vw; padding-right: 5vh;">
            <h2 class="w3-wide">LANGUAGES</h2>
              <section class="box text-sm" data-astro-cid-ab4ihpzs=""> 
                <div style="box-shadow: var(--shadow-2); padding: 1vh;">
                  <p><b>THAI</b></p>
                  <span class="px-0.5"></span>
                  <div class="w3-light-grey w3-round-xlarge">
                    <div class="w3-round-xlarge w3-gray" style="height:24px;width:99%"></div>
                  </div>
                  <p style="color: gray; padding-top: 1vh;">Native Speaker</p>
                </div>
                <div style="box-shadow: var(--shadow-2); padding: 1vh;">
                  <p><b>ENGLISH</b></p>
                  <span class="px-0.5"></span>
                  <div class="w3-light-grey w3-round-xlarge">
                    <div class="w3-round-xlarge w3-gray" style="height:24px;width:65%"></div>
                  </div>
                  <p style="color: gray; padding-top: 1vh;">I understand well but my speaking and my grammar aren't so good.</p>
                </div>
              </section>

          </div>
        </div>
      </section>

      <section class="hero" style="height: fit-content; padding-top: 5vh;">
        <div style=" padding: 2vw; padding-right: 5vh;">
          <div class="box" style="padding: 2vh;">
            <h2 class="w3-wide">ACTIVITIES</h2>
            <span class="px-1"></span>
            <div class="media-scroller snaps-inline" style="padding-top:1vh;">
              <div class="media-element container" v-for="(activities, key) in highlights.activities" :key="key">
                <div class="card" style="width: 100%;">
                  <div class="slide slide1">
                    <NuxtLink>
                      <img id="h-auto" :src="activities.img" style="inline-size: 100%; aspect-ratio: 16 / 9; object-fit:cover; border-radius: 5px;">
                    </NuxtLink>
                  </div>
                  <div class="slide slide2" style="padding: 1vh;">
                    <div style="width: 100%;">
                      <h3 v-if="index == null" class="font-fira_bold mr-3" style="font-size:smaller; text-wrap:wrap;">{{ activities.name}}</h3>
                      <h3 v-else class="font-fira_bold mr-3" style="font-size:smaller; text-wrap:wrap;">{{ activities.name}}</h3>
                      <p class="text-menu-text font-fira_retina text-sm mb-5">
                        {{ activities.description }}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <RouterLink 
          id="nav-link" 
          to="/about-me?topic=hobbies-info&folder=Games" 
          class="w3-button w3-round-large w3-dark-grey w3-padding-large w3-margin-top w3-margin-bottom w3-left text-xs">
              See more On My Hobbies
          </RouterLink>
        </div>
      </section>

	  </main>
</template>

<style>
/* Hide scrollbar for Chrome, Safari and Opera */
.example::-webkit-scrollbar {
  display: none;
}

/* Hide scrollbar for IE, Edge and Firefox */
.example {
  -ms-overflow-style: none;  /* IE and Edge */
  scrollbar-width: none;  /* Firefox */
}

@import "https://unpkg.com/open-props";
@import "https://unpkg.com/open-props/normalize.min.css";

.container {
  aspect-ratio: 16 / 9;
  border-radius: 12px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}

.image {
  object-fit:contain;
  border-radius: inherit;
  opacity: 1;
  transition: 300ms ease;
  border-radius: var(--radius-2);
}

.video {
  position: absolute;
  border-radius: inherit;
  inset: 0;
  z-index: -1;
}

.container:hover {
  .image {
    opacity: 0;
  }
}

.media-scroller {
  display: grid;
  column-gap: 40px;
  grid-template-columns: min-content;
  grid-auto-flow: column;
  overflow-x: auto;
  overflow-y: hidden;
  overscroll-behavior-inline: contain;
}

.media-element {
  display: grid;
  border-radius: var(--radius-2);
  box-shadow: var(--shadow-2);
  width: 70vw; 
  max-width: 350px; 
  min-height: 17.5rem;
}

.flow {
  display: grid;
}

.container .card .slide.slide1 {
position: relative;
display: flex;
justify-content: center;
align-items: center;
z-index: 1;
transition: .7s;
}

.container .card:hover .slide.slide1{
transform: translateY(0px);

}

.container .card .slide.slide2 {
position: relative;
display: flex;
justify-content: center;
align-items: center;
box-sizing: border-box;
transition: .8s;
transform: translateY(-100px);
}

.container .card:hover .slide.slide2{
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
  height: 100%;
  width: 100%;
  padding-left: 5vh;
}

.hero {
	width: 100%;
}

#hello .hero {
	display: flex;
	flex-direction: column;
	margin: 0rem;
}


#hello .head span {
  font-size: 18px;
  line-height: 1;
  color: #E5E9F0;
  font-family: 'Fira Code Retina';
}

#hello .head h1 {
  font-size: 58px;
  line-height: 1;
  color: #E5E9F0;
  font-family: 'Fira Code Regular';
}

#hello .head h2 {
  font-size: 32px;
  line-height: 1;
  font-family: 'Fira Code Retina';
}

.css-blurry-gradient-blue {
  bottom: 25%;
  right: 5%;
  width: 300px;
  height: 300px;
	border-radius: 0% 0% 50% 50%;
  rotate: 10deg;
	filter: blur(70px);
  background: radial-gradient(circle at 50% 50%,rgba(77, 91, 206, 1), rgba(76, 0, 255, 0));
  opacity: 0.5;
  z-index: 10;
  pointer-events: none
}

.css-blurry-gradient-green {
  top: 20%;
  right: 30%;
  width: 300px;
  height: 300px;
	border-radius: 0% 50% 0% 50%;
	filter: blur(70px);
  background: radial-gradient(circle at 50% 50%,rgba(67, 217, 173, 1), rgba(76, 0, 255, 0));
  opacity: 0.5;
  z-index: 10;
  pointer-events: none
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


@media (min-width: 50em){
  .skills{
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 5rem;
  }

  .box{
    border-radius: 1.5rem;
    padding: 2.5rem;
  }
}

/* mobile */
@media (max-width: 768px) {
	#hello {
		padding-left: 0;
	}

	#hello .hero {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		margin: 1.75rem;
	}

	#hello .head h2 {
		font-size: 20px;
		color: #43D9AD;
	}
}

/* tablet */
@media (min-width: 768px) and (max-width: 1024px) {
	#hello {
		padding-left: 0;
	}

	#hello .hero {
		display: flex;
		flex-direction: column;
		justify-content: center;
		margin: 1.75rem;
	}

  .w3-row-padding .box {
    display: flex;
		flex-direction: column;
    justify-content: center;
  }
}

@media (min-width: 1024px) and (max-width: 1320px) {
	#hello {
		padding-left: 135px;
	}
}


/* LG */
@media (min-width: 1024px) {
  .css-blurry-gradient-blue {
    position: fixed;
    bottom: 10%;
    right: 10%;
    width: 500px;
    height: 500px;
    opacity: 0.7;
    border-radius: 100% 50% 100% 0%;
  }

  .css-blurry-gradient-green {
    position: fixed;
    top: 10%;
    right: 35%;
    filter: blur(100px);
    rotate: 10deg;
    width: 400px;
    height: 400px;
    opacity: 0.5;
    border-radius: 100% 0% 0% 0%;
    rotate: 20deg;
  }
}

@media (min-width: 1920px){
	#hello {
		padding-left: 310px;
	}
	#hello .head h1 {
		font-size: 62px;
	}
}

</style>

