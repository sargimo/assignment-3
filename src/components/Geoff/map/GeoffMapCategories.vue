<template>
  <div>
    <div class="filters">
      <button>back</button>
      <div class="filters-container">
        <div class="row">
          <div class="col">
            <select class="dropdown" @change="radiusChanged">
              <option value="1000">WITHIN 1KM</option>
              <option value="5000">WITHIN 5KM</option>
              <option value="10000">WITHIN 10KM</option>
              <option value="20000">WITHIN 20K</option>
            </select>
          </div>
          <div class="col">
            <button
              @click.prevent="categoryClickHandler"
              :class="{active: buttonIsActive[0]}"
              id="4bf58dd8d48988d1e5931735"
              ref="0"
              value="music venues"
              class="category-btn"
            >MUSIC VENUES</button>
          </div>
          <div class="col">
            <button 
            @click.prevent="categoryClickHandler" 
            :class="{active: buttonIsActive[1]}"
            id="4bf58dd8d48988d10d951735" 
            ref="1"
            value="record stores" 
            class="category-btn"
            >RECORD STORES</button>
          </div>
          <div class="col">
            <button 
            @click.prevent="categoryClickHandler" 
            :class="{active: buttonIsActive[2]}"
            id="4bf58dd8d48988d1fe941735"
            ref="2" 
            value="music stores" 
            class="category-btn"
            >MUSIC STORES</button>
          </div>
          <div class="col">
            <button 
            @click.prevent="categoryClickHandler" 
            :class="{active: buttonIsActive[3]}"
            id="4f04b10d2fb6e1c99f3db0be"
            ref="3" 
            value="music schools" 
            class="category-btn"
            >MUSIC SCHOOLS</button>
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
      console.log(evt)
      this.$emit("$categoryClickHandler", evt.target.id, evt.target.value, evt.target.ref);
      this.setActive(evt);
    },
    radiusChanged: function(evt) {
      this.$emit("$radiusChanged", evt.target.value,);
    },
    setActive(evt) {
      let value = evt.target.value;
      switch (value) {
        case "music venues":
          this.buttonIsActive = [true, false, false, false];
          break;
        case "record stores":
          this.buttonIsActive = [false, true, false, false];
          break;
        case "music stores":
          this.buttonIsActive = [false, false, true, false];
          break;
        case "music schools":
          this.buttonIsActive = [false, false, false, true];
          break;
      }
    }
  },
  data: function() {
    return {
      buttonIsActive: [false, false, false, false]
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

.dropdown {
  font-family: 'Hind Madurai', sans-serif;
}

.category-btn {
  font-family: "Oswald", sans-serif;
  font-size: 15px;
  border-radius: 10px;
  background-color: transparent;
  padding: 5px 30px;
  border: 1px solid lightgray;
}

.category-btn:focus {
  outline: none;
}

.category-btn.active {
  background-color: #ffe96b;
}
</style>
