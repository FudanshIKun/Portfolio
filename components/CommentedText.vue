<template>
  <div class="code-container flex font-fira_retina text-menu-text">
    <!-- text -->
    <div class="text-container">
      <p v-html="text" class="text-gray-300 source-code-pro"></p>
    </div>
  </div>
</template>

<script>

export default {
  props: {
    text: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      lines: 0
    };
  },
  mounted() {
    this.updateLines();
    window.addEventListener("resize", this.updateLines);
    window.addEventListener("click", this.updateLines);
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.updateLines);
    window.removeEventListener("click", this.updateLines);
  },
  methods: {
    updateLines() {
      const textContainer = this.$el.querySelector(".text-container");
      const style = window.getComputedStyle(textContainer);
      const fontSize = parseInt(style.fontSize);
      const lineHeight = parseInt(style.lineHeight);
      const maxHeight = textContainer.offsetHeight;
      this.lines = Math.ceil(maxHeight / lineHeight) + 1;
    }
  }
};
</script>

<style>
.code-container {
  display: flex;
  align-items: flex-start;
}

.line-numbers {
  text-align: right;
}

.text-container {
  width: 100%;
  padding-top: 10px;
  padding-left: 10px;
  word-wrap: break-word;
}

.text-container span{

}

.text-container p{

}
</style>