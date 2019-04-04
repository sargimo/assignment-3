<template>
  <div>
    <GeoffMapCategories
      @$categoryClickHandler="categoryClickHandler"
      @$radiusChanged="radiusChanged"
    />
    <GeoffPlaceInformation/>
    <div class="google-map" ref="googleMap"></div>
    <template v-if="Boolean(this.google) && Boolean(this.map)">
      <slot :google="google" :map="map"/>
    </template>
    <button
      @click="addMarkers([{position: {lat: -41.2855, lng: 174.7772}}, {position: {lat: -41.2875, lng: 174.7742}}, {position: {lat: -41.2871, lng: 174.7779}}])"
    >add</button>
    <button @click="deleteMarkers()">delete</button>
  </div>
</template>

<script>
import GoogleMapsApiLoader from "google-maps-api-loader";
import { API_KEY } from "../constants/config.js";
import { CLIENT_ID } from "../constants/config.js";
import { CLIENT_SECRET } from "../constants/config.js";
import GeoffMapCategories from "./GeoffMapCategories.vue";
import GeoffPlaceInformation from "./GeoffPlaceInformation.vue";

export default {
  name: "GeoffMapLoader",
  components: {
    GeoffMapCategories,
    GeoffPlaceInformation
  },

  props: {
    mapConfig: Object
  },

  data: function() {
    return {
      google: null,
      map: null,
      apiKey: API_KEY,
      clientId: CLIENT_ID,
      clientSecret: CLIENT_SECRET,
      markers: [],
      currentRadius: "1000",
      currentCategoryId: Number,
      currentCategoryName: "",
      currentSearchData: []
    };
  },

  async mounted() {
    const googleMapApi = await GoogleMapsApiLoader({
      apiKey: this.apiKey
    });
    this.google = googleMapApi;
    this.initializeMap();
  },

  methods: {
    initializeMap() {
      const mapContainer = this.$refs.googleMap;
      this.map = new this.google.maps.Map(mapContainer, this.mapConfig);
    },
    addMarkers(places) {
      let myMap = this.map;
      let gMarkers = this.markers;
      let gMap = this.google.maps;
      $.each(places, function(i, place) {
        let newGMarker = new gMap.Marker({
          position: place.position,
          id: place.id,
          map: myMap,
          name: place.name,
          description: place.description
        });
        gMarkers.push(newGMarker);
      });
      this.initMarkerClickListeners(gMarkers);
    },
    deleteMarkers() {
      let gMarkers = this.markers;
      $.each(gMarkers, function(i, gMarker) {
        gMarker.setMap(null);
      });
      gMarkers = [];
    },
    initMarkerClickListeners(markers) {
      let myMap = this.map;
      let that = this;
      // let gMarkers = this.markers;
      // let gMap = this.google.maps;
      $.each(markers, function(i, marker) {
        marker.addListener("click", function() {
          myMap.setZoom(15);
          myMap.setCenter(marker.getPosition());
          that.getPlaceDetails(marker.id);
        });
      });
    },
    categoryClickHandler: function(id, value) {
      this.getSearchData(id, this.currentRadius);
    },
    radiusChanged: function(radius) {
      this.currentRadius = radius;
    },
    getSearchData(categoryId, radius) {
      this.$http
        .get(
          "https://api.foursquare.com/v2/venues/search?ll=-41.2855,174.7772&categoryId=" +
            categoryId +
            "&radius=" +
            radius +
            "&client_id=" +
            this.clientId +
            "&client_secret=" +
            this.clientSecret +
            "&v=20190404"
        )
        .then(function(data) {
          this.deleteMarkers();
          this.currentSearchData = [];
          let addMarkers = this.addMarkers;
          let searchData = this.currentSearchData;
          $.each(data.body.response.venues, function(i, place) {
            let gMapMarkerInfo = {
              position: { lat: place.location.lat, lng: place.location.lng },
              id: place.id,
              address: place.location.formattedAddress[0],
              addressLoc: place.location.formattedAddress[2],
              name: place.name,
              distance: place.location.distance
            };
            searchData.push(gMapMarkerInfo);
          });
          this.addMarkers(this.currentSearchData);
        });
    },
    getPlaceDetails(id) {
      this.$http
        .get(
          "https://api.foursquare.com/v2/venues/" +
            id +
            "&client_id=" +
            this.clientId +
            "&client_secret=" +
            this.clientSecret +
            "&v=20190404"
        )
        .then(function(data) {
          console.log(data);
        });
    }
  }
};
</script>

<style scoped>
.google-map {
  width: 100vw;
  min-height: 100vh;
}
</style>
