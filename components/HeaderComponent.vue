<template>
  <div class="">
    <div v-if="showSearchPanel" class="searchModal">
      <searchPage @closeSearchPanel="closeSearchPanel()" />
    </div>
    <div class="kitchenHeader container">
      <div style="float: left; padding: 10px">
        Logo
      </div>
      <div style="float: left; padding: 10px">
        Address
      </div>
      <div style="float: right; padding: 10px;">
        <div style="position: relative">
          <span class="material-icons" @click="showCartDetails()">
            shopping_cart
          </span>
          <div class="numberAdded" v-if="cartDatas.foodsAdded.length>0">
            {{ cartDatas.foodsAdded.length }}
          </div>
        </div>
        <div>
          <transition
            name="fade"
          >
            <div
              v-if="show"
              style="position: absolute;right: -2px;width: 400px;background: #ffd17d;; min-height: 100%; border: 1px solid rgb(204 204 204); z-index: 999"
            >
              <h3 style="text-align: center; padding: 5px 0px; color: #828282">
                Heres your Cart
              </h3>
              <div>
                <!-- <ul style="list-style-type:none;"> -->
                <v-card class="mx-auto" style="width: 90%">
                  <v-card-text>
                    <div
                      class="col-md-12 row"
                      v-for="(cartdata, index) in cartDatas.foodsAdded"
                      :key="index"
                      style="padding: 0px"
                    >
                      <div class="col-md-6">
                        <div style="padding: 5px">{{ cartdata.dishName }}</div>
                      </div>
                      <div class="col-md-6">
                        <select
                          id="cars"
                          name="cars"
                          v-model="cartdata.quantity"
                          style="border: 1px solid;border: 1px solid #b6b6b6;padding: 3px;border-radius: 4px;float: right;"
                        >
                          <option value="1">1</option>
                          <option value="2">2</option>
                          <option value="3">3</option>
                          <option value="4">4</option>
                          <option value="5">5</option>
                          <option value="6">6</option>
                          <option value="7">7</option>
                          <option value="8">8</option>
                          <option value="9">9</option>
                          <option value="10">10</option>
                        </select>
                      </div>
                    </div>
                  </v-card-text>
                </v-card>

                <!-- </ul> -->
              </div>
            </div>
          </transition>
        </div>
      </div>
      <div style="float: right; padding: 10px">
        <span class="material-icons" @click="openSearchPanel()">
          search
        </span>
      </div>
    </div>
  </div>
</template>
<script>
import searchPage from "../components/searchPage.vue";
import { mapState } from "vuex";

export default {
  components: { searchPage },
  data() {
    return {
      showSearchPanel: false,
      show: false
    };
  },
  methods: {
    closeSearchPanel(x) {
      this.showSearchPanel = x;
    },
    openSearchPanel() {
      this.showSearchPanel = true;
    },
    showCartDetails() {
      this.show = !this.show;
      this.$emit("blurBackGround", this.show);
    }
  },
  computed: {
    ...mapState({
      cartDatas: state => state.cartDetails
    })
  }
};
</script>
<style scoped lang="scss">
.chooseBy {
  border: 1px solid #b6b6b6;
  width: 90%;
  text-align: center;
  margin-left: 20px;
  padding: 75px 0px;
  border-radius: 10px;
  @media screen and (max-width: 768px) {
    width: 100%;
    margin-left: 10px;
    padding: 35px 0px;
  }
}
.kitchenHeader {
  @media screen and (min-width: 768px) {
    height: 70px;
  }
}
.kitchenHeaderWrap {
  width: 50px;
}
.searchModal {
  position: absolute;
  width: 100%;
  z-index: 1000;
  height: 100%;
}
.restCountWrap {
  padding: 30px 0px;
}
.numberAdded {
  position: absolute;
  top: -8px;
  right: -8px;
  font-size: 13px;
  color: white;
  background: #ffd17d;
  width: 20px;
  border-radius: 10px;
  /* padding: 6px; */
  padding: 0px 6px;
}
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}

</style>