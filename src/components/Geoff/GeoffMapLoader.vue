<template>
  <div>
    <GeoffMapCategories @$musicVenueHandler="musicVenueHandler"/>
    <GeoffPlaceInformation />
    <div
      class="google-map"
      ref="googleMap"
    ></div>
    <template v-if="Boolean(this.google) && Boolean(this.map)">
      <slot
        :google="google"
        :map="map"
      />
    </template>
        <button @click="addMarkers([{position: {lat: -41.2855, lng: 174.7772}}, {position: {lat: -41.2875, lng: 174.7742}}, {position: {lat: -41.2871, lng: 174.7779}}])">add</button>
        <button @click="deleteMarkers()">delete</button>

  </div>
</template>

<script>
import GoogleMapsApiLoader from "google-maps-api-loader";
import { API_KEY } from "./constants/config.js";
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
      markers: []
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
    initMarkerClickListeners(markers){
      let myMap = this.map;
      let gMarkers = this.markers;
      let gMap = this.google.maps;
      $.each(markers, function (i, marker) {
        marker.addListener('click', function(evt){
          myMap.setZoom(15);
          myMap.setCenter(marker.getPosition());
          console.log("id = " + marker.id + ". name = " + marker.name + ". description = " + marker.description);
        });
      });
    },
    musicVenueHandler: function(id) {
      this.addMarkers([
        { position: { lat: -41.2855, lng: 174.7772 }, id: 1, name: "Marker 1", description: "This is marker 1" },
        { position: { lat: -41.2875, lng: 174.7742 }, id: 2, name: "Marker 2", description: "This is marker 2" },
        { position: { lat: -41.2871, lng: 174.7779 }, id: 3, name: "Marker 3", description: "This is marker 3" }
      ]);
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
