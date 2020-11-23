<template>
  <v-card class="mx-auto row kitchenCard" max-width="90%">
      <!-- {{cartDatas.foodsAdded}} -->
    <div class="col-md-6 col-5">
      <div class="kitchenName" v-if="typeIs === 'Dish'">
        {{ kitchenDetail.dishName }}
      </div>
      <div class="kitchenName" v-else>
        {{ kitchenDetail.kichenName }}
      </div>
      <div class="cuisines">
        <!-- <span v-for="(cuisine, index) in kitchenDetail.restaurant" :key="cuisine">
                {{ cuisine }} {{index===kitchenDetail.cuisines.length-1? '': ', '}} 
            </span> -->
        <span> In {{ typeIs }} </span>
      </div>
    </div>
    <div class="col-md-3 col-3">
      <div class="priceTwo" v-if="typeIs === 'Restaurant'">
        Price for two: {{ kitchenDetail.priceForTwo }}
      </div>
      <div class="priceTwo" v-else>
        {{ kitchenDetail.restaurant }}
      </div>
    </div>
    <div class="col-md-3 col-3" style="text-align: center">
      <div
        class="Buy"
        @click="goToRestaurantPage(kitchenDetail.kichenName)"
        v-if="typeIs === 'Restaurant'"
      >
        Check for Dishes
      </div>
      <div
      class="container"
      style="width: 168px;"
        v-else-if="foodIncluded"
      >
          <select v-model="qty" class="select-css" style="padding: 15px 15px;">
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
            <option>6</option>
            <option>7</option>
            <option>8</option>
            <option>9</option>
            <option>10</option>
        </select>
      </div>
      <div
        class="Buy"
        v-else
        @click="addToCart(kitchenDetail)"
      >
        Head to Order
      </div>
    </div>
  </v-card>
</template>
<script>
import { mapState } from 'vuex'

export default {
  data() {
    return {
      qty: 1
    };
  },
  props: {
    kitchenDetail: {
      type: Object,
      default: null,
      required: true
    },
    typeIs: {
      type: String,
      default: "",
      required: true
    }
  },
  mounted () {
    this.qty = this.foodIncluded ? this.foodIncluded.foodQty : 1
  },
  computed: {
    ...mapState({
      cartDatas: state => state.cartDetails
    }),
    foodIncluded () {
      return this.cartDatas.cartFoodIds.find(this.foodIncludedUtil)
    }
  },
  methods: {
    goToRestaurantPage(kitchenId) {
      this.$router.push("/kitchen/" + kitchenId);
    },
    addToCart(payload) {
      payload.quantity = this.qty
      this.$store.dispatch("addToCart", payload);
      console.log("Cart Details", this.$store.state.cartDetails);
    },
    updateCart (payload) {
      console.log('AAAAA', this.qty)
      payload.quantity = this.qty
      this.$store.dispatch("UpdateCart", payload);
      console.log("Cart Details", this.$store.state.cartDetails);
    },
    foodIncludedUtil (food) {
      return food.foodId === this.kitchenDetail.dishKID;
    }  
  },
  watch: {
    qty (oldVal, newVal) {
      if(oldVal != newVal) {
        this.updateCart(this.kitchenDetail)
      }
    }
  }
};
</script>
<style scoped lang="scss">
.kitchenCard {
  margin: 30px 0px;
}
.kitchenName {
  padding: 20px 0px 0px 20px;
  font-size: 20px;
  @media screen and (max-width: 768px) {
    padding: 0px;
    font-size: 12px;
  }
}
.cuisines {
  font-size: 10px;
  padding: 0px 0px 20px 20px;
  @media screen and (max-width: 768px) {
    font-size: 6px;
    padding: 0;
  }
}
.priceTwo {
  padding: 30px;
  font-size: 15px;
  font-weight: 600;
  @media screen and (max-width: 768px) {
    padding: 7px 0px;
    font-size: 8px;
    font-weight: 600;
  }
}
.Buy {
  display: inline-block;
  margin: 15px;
  padding: 15px 25px;
  font-weight: 600;
  background: #ffd17d;
  color: #828282;
  cursor: pointer;
  @media screen and (max-width: 768px) {
    display: inline-block;
    margin: 0px;
    padding: 2px 6px;
    font-weight: 600;
    background: #ffd16d;
    color: #828282;
    font-size: 8px;
  }
}
.select-css {
    display: block;
    font-size: 16px;
    font-family: sans-serif;
    font-weight: 700;
    color: #444;
    line-height: 1.3;
    padding: .6em 1.4em .5em .8em;
    width: 100%;
    max-width: 100%; /* useful when width is set to anything other than 100% */
    box-sizing: border-box;
    margin: 0;
    border: 1px solid #aaa;
    box-shadow: 0 1px 0 1px rgba(0,0,0,.04);
    border-radius: .5em;
    -moz-appearance: none;
    -webkit-appearance: none;
    appearance: none;
    background-color: #fff;
    /* note: bg image below uses 2 urls. The first is an svg data uri for the arrow icon, and the second is the gradient. 
        for the icon, if you want to change the color, be sure to use `%23` instead of `#`, since it's a url. You can also swap in a different svg icon or an external image reference
        
    */
    background-image: url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22292.4%22%20height%3D%22292.4%22%3E%3Cpath%20fill%3D%22%23007CB2%22%20d%3D%22M287%2069.4a17.6%2017.6%200%200%200-13-5.4H18.4c-5%200-9.3%201.8-12.9%205.4A17.6%2017.6%200%200%200%200%2082.2c0%205%201.8%209.3%205.4%2012.9l128%20127.9c3.6%203.6%207.8%205.4%2012.8%205.4s9.2-1.8%2012.8-5.4L287%2095c3.5-3.5%205.4-7.8%205.4-12.8%200-5-1.9-9.2-5.5-12.8z%22%2F%3E%3C%2Fsvg%3E'),
      linear-gradient(to bottom, #ffffff 0%,#e5e5e5 100%);
    background-repeat: no-repeat, repeat;
    /* arrow icon position (1em from the right, 50% vertical) , then gradient position*/
    background-position: right .7em top 50%, 0 0;
    /* icon size, then gradient */
    background-size: .65em auto, 100%;
}
/* Hide arrow icon in IE browsers */
.select-css::-ms-expand {
    display: none;
}
/* Hover style */
.select-css:hover {
    border-color: #888;
}
/* Focus style */
.select-css:focus {
    border-color: #aaa;
    /* It'd be nice to use -webkit-focus-ring-color here but it doesn't work on box-shadow */
    box-shadow: 0 0 1px 3px rgba(59, 153, 252, .7);
    box-shadow: 0 0 0 3px -moz-mac-focusring;
    color: #222; 
    outline: none;
}

/* Set options to normal weight */
.select-css option {
    font-weight:normal;
}

/* Support for rtl text, explicit support for Arabic and Hebrew */
*[dir="rtl"] .select-css, :root:lang(ar) .select-css, :root:lang(iw) .select-css {
    background-position: left .7em top 50%, 0 0;
    padding: .6em .8em .5em 1.4em;
}

/* Disabled styles */
.select-css:disabled, .select-css[aria-disabled=true] {
    color: graytext;
    background-image: url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22292.4%22%20height%3D%22292.4%22%3E%3Cpath%20fill%3D%22graytext%22%20d%3D%22M287%2069.4a17.6%2017.6%200%200%200-13-5.4H18.4c-5%200-9.3%201.8-12.9%205.4A17.6%2017.6%200%200%200%200%2082.2c0%205%201.8%209.3%205.4%2012.9l128%20127.9c3.6%203.6%207.8%205.4%2012.8%205.4s9.2-1.8%2012.8-5.4L287%2095c3.5-3.5%205.4-7.8%205.4-12.8%200-5-1.9-9.2-5.5-12.8z%22%2F%3E%3C%2Fsvg%3E'),
      linear-gradient(to bottom, #ffffff 0%,#e5e5e5 100%);
}

.select-css:disabled:hover, .select-css[aria-disabled=true] {
    border-color: #aaa;
}


body {
  margin: 2rem;
}
</style>