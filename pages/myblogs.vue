<script>
export default{

}

</script>

<template>
    <main v-if="!loading" id="hello" style="overflow-y: scroll; overflow-x: hidden;">
      <div class="flex flex-col source-code-pro text-menu-text my-5 h-full justify-center items-center">
        <span class="flex justify-center text-4xl pb-3">
          X_X
        </span>
        <span class="text-white flex justify-center text-xl">
          This Part Is Still In Progress
        </span>
        <a href="/contact-me" class="hover:text-green-600"> Come back later!</a>
      </div>
    </main>
</template>

<style scoped>
main {
  
  border-top: 2px solid #454843;
}

/* Hide scrollbar for Chrome, Safari and Opera */
::-webkit-scrollbar {
  display: none;

}

#hello { 
  min-height: 350px;
  height: 100%;
  width: 100%;
  
}

/* tablet */
@media (min-width: 768px) and (max-width: 1024px) {
  main {
    border: none;
  }

	#hello {
		padding-left: 0;
	}

	#hello .hero {
		display: flex;
    min-height: 400px;
		flex-direction: column;
	}

  #hello .hero .head{
    padding-top: 5vh;
  }
}

/* mobile */
@media (max-width: 768px) {
  main {
    border: none;
  }

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
		color: purple;
	}
}



</style>