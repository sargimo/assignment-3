<template>
  <div :style="{ 'backgroundImage': 'url(' + url + ')' }" class="jumbotron">

  </div>
</template>

<script>
export default {
  name: "GeoffFeatureHeroImage",
  components: {},
  props: ['source', 'index'],
  data: function() {
    return {
      url: String,
      currentIndex: Number
    }
  },
  watch: {
    source: function() {
      this.currentIndex = this.index;
      this.url = this.source[this.currentIndex].imageUrl;
    }
  }
};
</script>

<style scoped>
  .jumbotron {
    color: white;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    height: 50vh;
  }
</style>
