<template>
    <div class="place-container active">
        <button>X</button>
        <div class="title-text">
            <h1 class="name-text">Filler title</h1>
            <p class="category-text">Filler cat</p>
        </div>
        <div class="description-text">
            <p>Filler desc</p>
        </div>
        <div class="details-text">
            <p>ADDRESS: filler address</p>
            <p>CONTACT: filler contact</p>
            <p>WEBSITE: filler website</p>
            <p>HOURS: filler hours</p>
        </div>
        <button class="directions">GET DIRECTIONS</button>
    </div>
</template>

<script>
export default {
  name: "GeoffPlaceInformation",
  components: {}
};
</script>

<style>
.place-container {
    position: absolute;
    z-index: 1;
    right: -500px;
    top: 0;
    height: 100vh;
    width: 500px;
    background-color: #222;
    color: #fff;
    padding-top: 150px;
}

.place-container.active {
    right: 0;
}
</style>
