<template>
<div>
    <GeoffMapLoader :mapConfig="mapConfig" />
    <GeoffMapCategories />
    <GeoffPlaceInformation />
</div>
</template>

<script>
import GeoffMapLoader from "./GeoffMapLoader.vue";
import GeoffMapCategories from "./GeoffMapCategories.vue"
import GeoffPlaceInformation from "./GeoffPlaceInformation.vue"
import { mapSettings } from "./constants/mapSettings.js";

export default {
  components: {
    GeoffMapLoader,
    GeoffMapCategories,
    GeoffPlaceInformation
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
