<template>
  <div>
    <div class="filters">
      <button>back</button>
      <div class="filters-container">
        <div class="row">
          <div class="col-2">
            <select @change="radiusChanged">
              <option value="1000">WITHIN 1KM</option>
              <option value="5000">WITHIN 5KM</option>
              <option value="10000">WITHIN 10KM</option>
              <option value="20000">WITHIN 20K</option>
            </select>
          </div>
          <div class="col-2">
            <select>
              <option value="all">All</option>
              <option value="recommended">Recommended</option>
            </select>
          </div>
          <div class="col-2">
            <button
              @click.prevent="categoryClickHandler"
              id="4bf58dd8d48988d1e5931735"
              value="music venues"
              class="category-btn"
            >MUSIC VENUES</button>
          </div>
          <div class="col-2">
            <button @click.prevent="categoryClickHandler" id="4bf58dd8d48988d10d951735" value="record stores" class="category-btn active">RECORD STORES</button>
          </div>
          <div class="col-2">
            <button @click.prevent="categoryClickHandler" id="4bf58dd8d48988d1fe941735" value="music stores" class="category-btn">MUSIC STORES</button>
          </div>
          <div class="col-2">
            <button @click.prevent="categoryClickHandler" id="4f04b10d2fb6e1c99f3db0be" value="music schools" class="category-btn">MUSIC SCHOOLS</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "GeoffMapCategories",

  methods: {
    categoryClickHandler: function(evt) {
      this.$emit("$categoryClickHandler", evt.target.id, evt.target.value);
    },
    radiusChanged: function(evt) {
      this.$emit("$radiusChanged", evt.target.value);
    }
  }
};
</script>

<style scoped>
.filters-container {
  max-width: 75%;
  margin: 0 auto;
}
.filters {
  position: absolute;
  z-index: 2;
  top: 0;
  width: 100vw;
  height: 100px;
  background-color: #fff;
}

.category-btn {
  border-radius: 10px;
  background-color: transparent;
  padding: 5px 30px;
  border: 1px solid lightgray;
}

.category-btn.active {
  background-color: #ffe96b;
}
</style>
