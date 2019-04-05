<template>
    <div>
        <button @click="getCategoryData">test</button>
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
          categoryId: ''
      }
  },
//   created: function() {
//       this.getCategoryData();
//   },
  methods: {
      getCategoryData(){
          let category = this.$route.params.categoryId;
          console.log(category)
      }
  }
};
</script>

<style scoped>

</style>
