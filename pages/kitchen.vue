<template>
  <div class="container">
    <v-card class="mx-auto">
      <v-img
        class="white--text align-end"
        height="200px"
        src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
      >
        <v-card-title>{{ restaurantName }}</v-card-title>
      </v-img>

      <v-container style="width: 90%">
        <v-row v-for="dishItem in this.allItems.data" :key="dishItem" dense>
          <v-col cols="12">
            <v-card color="#385F73" class="row">
              <v-card-title class="headline col-12">
                {{ dishItem._source.dishName }}
              </v-card-title>

              <v-card-subtitle
                class="col-6"
                style="padding: 15px;"
                >{{ dishItem._source.dishEthnicity }} <span><rating-tile style="width: 50px" :offerPercent="dishItem._source.dishRating" /></span>
              </v-card-subtitle>
              <v-card-actions class="col-6" style="position: relative">
              <v-btn text class="orderOption" style="background: #ffd17d; color: #828282">
                Order Now
              </v-btn>
            </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-card>
  </div>
</template>
<script>
import serverUtil from '../server/PharmaSSD.js';
import ratingTile from '../components/OfferDetails.vue'
export default {
    components: { 'rating-tile': ratingTile },
  data() {
    return {
      restaurantName: "",
      allItems: []
    };
  },
  async mounted() {
    this.restaurantName = this.$route.params.search;
    this.allItems = await serverUtil.getAllDishes(this.restaurantName)
    console.log('ALL ITEMS ARE', this.allItems)
  }
};
</script>
<style scoped lang="scss">
.orderOption {
    position: absolute;
    right: 35px;
    @media screen and (max-width: 768px) {
        position: absolute;
        right: 15px;
    }
}
</style>