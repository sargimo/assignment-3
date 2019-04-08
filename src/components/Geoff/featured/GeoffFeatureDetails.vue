<template>
  <div class="container">
    <h1>{{source[index].name}}</h1>
    <p>{{source[index].month}} - {{source[index].location}}</p>
    <p>{{source[index].description}}</p>
  </div>
</template>

<script>
export default {
  name: "GeoffFeatureDetails",
  components: {},
  props: ['source', 'index'],
};
</script>

<style scoped>

</style>
