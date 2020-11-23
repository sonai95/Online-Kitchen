<template>
    <div class="kitchenTile" @click="goToRestaurantPage(kitchenDetail.kichenName)">
        <div class="kitchenImg">
            <!-- {{kitchenDetail}} -->
            <div class="imageFit">
                <img style="width: 100%; margin: 17px" src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/mwbxudffzs7gtdihovgn" >
            </div>
        </div>
        <div>
            <div style="margin-left: 10px; color: rgb(79, 79, 79)">
                <b style="font-size:20px">
                    {{kitchenDetail.kichenName}}
                </b>
                <div style="font-size:10px">
                    <span v-for="(cuisine, index) in kitchenDetail.cuisines" :key="cuisine">
                        {{ cuisine }} {{index===kitchenDetail.cuisines.length-1? '': ', '}} 
                    </span>
                </div>
            </div>
            <div style="margin-top: 10px">
                <div style="float:left; margin-left: 10px;font-size:10px"> <offer-details :offerPercent="kitchenDetail.rating" /> </div>
                <div class="priceTwo"> Price for Two: {{ kitchenDetail.priceForTwo }}</div>
            </div>
        </div>
    </div>
</template>
<script>
import OfferDetails from './OfferDetails.vue'
export default {
    components: { OfferDetails },
    props: {
        kitchenDetail: {
            type: Object,
            default: null
        }
    },
    methods: {
        goToRestaurantPage (kitchenId) {
            this.$router.push('/kitchen/'+kitchenId)
        }
    }
}
</script>
<style scoped lang="scss">
    .kitchenTile {
        height: 330px;
        border-radius: 5px;
        border: 1px solid #b6b6b6;
        @media screen and (max-width: 768px) {
            height: 250px;
        }
    }
    .kitchenImg {
        position: relative;
        @media screen and (max-width: 768px) {
            height: 130px;
        }
        height: 220px;
        border-bottom: 1px solid #b6b6b6;
    }
    .imageFit {
        position: absolute;
        margin: 10px;
        width: 80%;
        @media screen and (max-width: 768px) {
            width: 65%;
        }
    }
    .kitchenTile:hover {
        box-shadow: 0 0 5px #aa9d9d;
    }
    .priceTwo {
        float:right;
        margin-right: 25px;
        font-size:13px;
        @media screen and (max-width: 768px) {
            margin-right: 15px;
            font-size:9px;
        }
    }
</style>