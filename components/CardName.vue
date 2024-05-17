<template>
    <div id="shot">
              <div class="card">
                <img src="/Simple Profile.jpg">
                <div id="component"></div>
              </div>
              <div class="description">
                <h1 class="permanent-marker-regular">ToruKun</h1>
                <p class="source-code-pro text-xs" style="color: white;">Description</p>
              </div>
            </div>
</template>

<style scoped>
h1 {
  background-color: #f73d93;
  padding: 0 5px 3px 5px;
  color: #111111;
  letter-spacing: 1px;
  text-transform: uppercase;
  font-size: 32px;
  letter-spacing: 2px;
  margin: 20px 0 10px;
  border-radius: 5px;
}

h1,
p,
#shot .title::before {
  font-weight: 500;
}

p, #shot .title::before {
  opacity: 0.3;
  margin: 0 0 10px 0;
  letter-spacing: 1px;
}

a {
  color: #f5d546;
}
a:hover {
  background: #f5d546;
  color: #111;
  text-decoration: none;
}

#shot {
  padding: 10%;
  min-width: fit-content;
  width: 100%;
  max-width: 350px;
  margin: auto;
  position: relative;
}

#shot .card {
  width: 100%;
  aspect-ratio: 1/1;
  display: flex;
  background: linear-gradient(0deg, rgba(245, 70, 195, 0.1) 0%, rgba(17, 17, 17, 0) 100%);
  border: 3px #f73d93 solid;
  border-radius: 5px;
  -webkit-animation: entrance 400ms 800ms linear backwards 1;
          animation: entrance 400ms 800ms linear backwards 1;
}

#shot .card #component {
    margin: auto;
}
#shot .description {
  -webkit-animation: entrance 400ms 1000ms linear backwards 1;
          animation: entrance 400ms 1000ms linear backwards 1;
}

@-webkit-keyframes entrance {
  to, 20%, 40%, 60%, 80% {
    opacity: 1;
  }
  from, 10%, 30%, 50%, 70%, 90% {
    opacity: 0;
  }
}

/* tablet */
@media (min-width: 768px) and (max-width: 1024px) {
    #shot{
    @apply hidden
    }
}

</style>