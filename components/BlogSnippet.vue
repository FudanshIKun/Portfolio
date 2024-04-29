<script setup>
const { blog, key } = defineProps(['blog', 'key'])
</script>

<template>
  <div style="border-top: 2px solid #454843; margin-top: 15px; padding-left: 10px;">
    <div class="card">
        <div class="post" style="display: flex;">
            <div class="post-content">
                <p class="post-header source-code-pro text-gray-200">
                <a :href="blog.continue" class="source-code-pro text-gray-200" style="font-size: 16px;">{{ blog.title }}</a>
                </p>
                <p v-html="blog.content" class="post-text text-gray-300 source-code-pro" style="font-size: 12px;"></p>
            </div>
            <img class="post-image" :src="blog.img"/>
            </div>
            <div class="author-wrapper">
            <div class="author">
                <img :src="blog.avatar" alt="" class="author-image w-8 h-8 rounded-full">
                <div class="author-content">
                <p class="author-name source-code-pro text-gray-300">by {{ blog.username }}</p>
                <p class="date source-code-pro text-gray-600">{{ blog.date }}</p>
                </div>
            </div>
        </div>
    </div>
  </div>
</template>

<style scoped>
.card {
  width: 525px;
  height: fit-content;
  margin-top: 30px;

  border-radius: 10px;
  transition: background-color .5s, box-shadow .5s, margin-left .5s;
  display: flex;
  flex-direction: column;
}

.card:hover {
  margin-left: 8%;
  box-shadow: 0 30px 30px rgba(0, 0, 0, 0.3);
  transition: background-color .5s, box-shadow .5s, margin-left .5s;
}

.post-image {
  width: 220px;
  height: 220px;
  margin: 15px;
  border-radius: 10px 10px 10px;
  float: left;
  object-fit: cover;
}

.post-content {
  width: 50%;
  margin-left: 5px;
}

a:link {
  font-size: 18px;
  text-decoration: none;
}

.post-header {
  margin-left: 10px;
  margin-top: 10px;
  line-height: 20px;
}

.post-text {
  font-size: 15px;
  margin-top: 10px;
  padding-left: 10px;
}

.author-wrapper {
  margin-top: auto;
  width: 38%;
  padding-bottom: 10px;
}

.author {
  width: 100%;
  height: 60px;
  margin-left: 5px;
  display: flex;
  align-items: center;
}

.author-content {
  width: 60%;
  height: 60px;
  margin-left: 10px;
  float: left;
}

.author-image {
  width: 35px;
  height: 35px;
  border-radius: 100%;
  float: left;
  margin-left: 10px;
  margin-top: 5px;
}

.author-name {
  font-size: 15px;
  font-family: 'Roboto', sans-serif;
  font-weight: bold;
  margin-top: 10px;
}

.date {
  font-size: 13px;
}

/* mobile */
@media (max-width: 768px) {
	.post{
    flex-direction: column;
  }
}

/* tablet */
@media (min-width: 768px) and (max-width: 1024px) {
	.post{
    flex-direction: row;
  }
}

/* desktop */
@media (min-width: 1025px){
	.post{
    flex-direction: row;
  }
}

</style>