<template>
    <div>
        <button @click="getCategoryId">test</button>
        <GeoffFeatureHeroImage />
        <GeoffFeatureDetails />
        <GeoffFeatureMapImage />
        <GeoffFeatureMapIcons />
    </div>
</template>

<script>
import GeoffFeatureHeroImage from "./GeoffFeatureHeroImage.vue"
import GeoffFeatureDetails from "./GeoffFeatureDetails.vue"
import GeoffFeatureMapImage from "./GeoffFeatureMapImage.vue"
import GeoffFeatureMapIcons from "./GeoffFeatureMapIcons.vue"
import festivalData from "../constants/festivalData.json"

export default {
  name: "GeoffFeatureLanding",
  components: {
      GeoffFeatureHeroImage,
      GeoffFeatureDetails,
      GeoffFeatureMapImage,
      GeoffFeatureMapIcons
  },
  data: function() {
      return {
          categoryId: '',
          categoryData: [festivalData],
          selectedCategoryData: []
      }
  },
//   created: function() {
//       this.getCategoryData();
//   },
  methods: {
      getCategoryId() {
          this.categoryId = this.$route.params.categoryId;
      }
  },
  watch: {
      categoryId: function() {
          this.selectedCategoryData = this.categoryData[this.categoryId];
          ;
      }
  }
};
</script>

<style scoped>

</style>
