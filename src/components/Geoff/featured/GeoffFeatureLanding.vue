<template>
    <div>
        <button @click="getCategoryId">test</button>
        <GeoffFeatureHeroImage :index="selectedIndex" :source="selectedCategoryData" />
        <GeoffFeatureDetails :index="selectedIndex" :source="selectedCategoryData" />
        <GeoffFeatureMapImage :source="selectedCategoryData" />
        <GeoffFeatureMapIcons :source="selectedCategoryData" />
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
          categoryData: [festivalData.festivals],
          selectedCategoryData: '',
          selectedIndex: 0
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
      }
  }
};
</script>

<style scoped>

</style>
