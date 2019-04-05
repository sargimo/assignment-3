<template>
  <div class="place-container">
    <button>X</button>
    <div class="title-text">
      <h1 class="name-text">{{placeData.name}}</h1>
      <p class="category-text">{{placeData.category}}</p>
    </div>
    <div class="details-text">
      <p>ADDRESS: {{placeData.address }}</p>
      <p>DISTANCE: {{placeData.distance}}m</p>
    </div>
    <button class="directions">GET DIRECTIONS</button>
  </div>
</template>

<script>
export default {
  name: "GeoffPlaceInformation",
  components: {},
  props: ['placeData']
};
</script>

<style scoped>
.place-container {
  position: absolute;
  z-index: 1;
  right: 0;
  top: 0;
  height: 100vh;
  width: 500px;
  background-color: #222;
  color: #fff;
  padding-top: 150px;
}
</style>
