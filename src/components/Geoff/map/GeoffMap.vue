<template>
  <div>
    <GeoffMapLoader :mapConfig="mapConfig"/>
  </div>
</template>

<script>
import GeoffMapLoader from "./GeoffMapLoader.vue";
import { mapSettings } from "../constants/mapSettings.js";

export default {
  components: {
    GeoffMapLoader
  },
  //   data: function(){
  //       return {
  //           API_KEY: API_KEY
  //       }
  //   },
  computed: {
    mapConfig() {
      return {
        ...mapSettings,
        center: { lat: -41.2865, lng: 174.7762 }
      };
    }
  }
};
</script>
