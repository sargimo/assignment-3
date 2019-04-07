<template>
  <transition name="panel-transition" mode="in-out">
    <div class="place-container">
      <button class="back-btn" @click="emitBack">X</button>
      <div class="details">
        <div class="title-text">
          <h1 class="name-text">{{placeData.name}}</h1>
          <p class="category-text">{{placeData.category}}</p>
            <hr class="hrule ">
        </div>
        <div class="details-text">
          <p v-if="gPlaceData.address"><span class="detail-title">ADDRESS:</span> {{placeData.address }}</p>
          <p v-if="gPlaceData.distance"><span class="detail-title">DISTANCE:</span> {{placeData.distance}}m</p>
          <p v-if="gPlaceData.phoneNumber"><span class="detail-title">PHONE NUMBER:</span> {{gPlaceData.phoneNumber}}</p>
          <p v-if="gPlaceData.openNow"><span class="detail-title">OPEN NOW:</span> {{gPlaceData.openNow}}</p>
          <p v-if="gPlaceData.openTimes"><span class="detail-title">OPEN TIMES:</span> <br>{{gPlaceData.openTimes[0]}}<br>{{gPlaceData.openTimes[1]}}<br>{{gPlaceData.openTimes[2]}}<br>{{gPlaceData.openTimes[3]}}<br>{{gPlaceData.openTimes[4]}}<br>{{gPlaceData.openTimes[5]}}<br>{{gPlaceData.openTimes[6]}} <br></p>
          <p v-if="gPlaceData.userRatings"><span class="detail-title">USER RATINGS:</span> {{gPlaceData.userRatings}}</p>
          <p v-if="gPlaceData.website"><span class="detail-title">WEBSITE:</span> {{gPlaceData.website}}</p>
          <!-- <p v-if="gPlaceData.photos">PHOTOS: {{gPlaceData.photos}}</p> -->
          <p v-if="gPlaceData.rating"><span class="detail-title">RATING:</span> <span class="stars-outer">
              <span :style="{ width: width + '%' }" class="stars-inner"></span>
            </span>
          </p>
          <!-- <p v-if="gPlaceData.reviews">REVIEWS: {{gPlaceData.reviews}}</p> -->
        </div>
      </div>
      <div class="directions">
        <button>GET DIRECTIONS</button>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: "GeoffPlaceInformation",
  components: {},
  props: ['placeData', 'gPlaceData'],
  methods: {
    convertRating() {
      let starPercentage = (this.gPlaceData.rating / this.starTotal ) * 100;
      let starPercentRounded = `${Math.round(starPercentage / 10) * 10}`;
      this.width = starPercentRounded;
    },
    emitBack() {
      this.$emit("$closeInfoPanel");
    }
  },
  data: function(){
    return {
      starTotal: 5,
      width: Number
    }
  },
  watch: {
    gPlaceData: function() {
      this.convertRating();
      // console.log(this.gPlaceData);
    }
  }
};
</script>

<style scoped>
.place-container {
  position: absolute;
  display: flex;
  flex-direction: column;
  font-family: 'Hind Madurai', sans-serif;
  justify-content: center;
  align-items: center;
  z-index: 1;
  right: 0;
  top: 0;
  height: 100vh;
  width: 500px;
  background-color: #222;
  color: #fff;
  padding-top: 150px;
}

.panel-transition-enter-active,
.panel-transition-leave-active {
  transition: width .5s ease-in-out, transform .5s ease-in-out;
}

.panel-transition-enter,
.panel-transition-leave-to {
  width: 0%;
}

.details {
  /* padding: 20px 20px 20px 40px; */
  /* justify-content: center; */
  /* align-items: center; */
  width: 70%;
}

.title-text {
  /* margin: 0;
  width: 80%; */
}

.name-text {
  font-family: "Oswald", sans-serif;
  text-align: right;
}

.category-text {
  width: 100%;
  text-align: right;
  color: #ffe96b;
}

.hrule {
  width: 100%;
  border-top: 3px solid #383838;
  padding-bottom: 20px;
}

.detail-title {
  font-family: "Oswald", sans-serif;
  font-weight: bold;
  font-size: 14px;
  padding-right: 20px;
}

.stars-outer {
  display: inline-block;
  position: relative;
  font-family: "Font Awesome 5 Free";
  font-weight: 200;
  color: #233;
}

.stars-outer:before {
  content: "\f005 \f005 \f005 \f005 \f005";
}

.stars-inner {
  position: absolute;
  top: 0;
  left: 0;
  white-space: nowrap;
  overflow: hidden;
  width: 0;
}

.stars-inner:before {
  content: "\f005 \f005 \f005 \f005 \f005";
  color: #ffe96b;
  font-weight: 900;
}

.directions {
  display: flex;
  justify-content: center;
  align-items: center;
}

.directions button {
  font-family: "Oswald", sans-serif;
  color: #222;
  background-color: #ffe96b;
  text-align: center;
  padding: 10px 60px 10px 60px;
  margin-top: 50px;
  border: none;
  border-radius: 10px;
}

.back-btn {
  position: absolute;
  top: 130px;
  left: 30px;
}

</style>
