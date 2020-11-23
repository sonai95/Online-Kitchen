<template>
    <div>
        <header-components @blurBackGround="blurBackGround" style="background: white" />
        <div class="container" :class="backGroundBlur===true?'blur':''">
            <div class="row" style="width: 100%">
                <div class="col-md-3 col-6">
                    <div class="chooseBy">
                        Choose by Hygiene
                    </div>
                </div>
                <div class="col-md-3 col-6">
                    <div class="chooseBy">
                        Choose by Ratings
                    </div>
                </div>
                <div class="col-md-3 col-6">
                    <div class="chooseBy">
                        Choose by Discount
                    </div>
                </div>
                <div class="col-md-3 col-6">
                    <div class="chooseBy">
                        Cusisine Category
                    </div>
                </div>
            </div>
        </div>
        <div class="kitchensNearby" :class="backGroundBlur===true?'blur':''">
            <div class="container">
                <div>
                    <div class="restCountWrap">
                        <h2 style="color: rgb(79 79 79)">
                            {{ restaurantCount }} {{restaurantCount>=0? 'Restautants': 'Restautant'}}
                        </h2>
                    </div>
                </div>
                <div class="container">
                    <div class="row">
                        <div v-for="kitchen in allKitchens.data" :key="kitchen" class="col-md-3 col-6">
                            <kitcheTile :kitchenDetail="kitchen"/>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    </div>
</template>
<script>
import HeaderComponent from '../components/HeaderComponent.vue'

import kitchenServerUtil from '../server/PharmaSSD.js'
import kitcheTile from '../components/kitcheTile.vue'
import axios from 'axios'
export default {
    components: { 'header-components':HeaderComponent, kitcheTile },
    data() {
        return {
            showSearchPanel: false,
            restaurantCount: 3,
            allKitchens: [],
            backGroundBlur: false
        }
    },
    async mounted () {
        this.allKitchens = await kitchenServerUtil.getKitchenDetails('826001')
        this.restaurantCount = this.allKitchens.data.length
    },
    methods: {
        closeSearchPanel(x) {
            this.showSearchPanel = x
        },
        openSearchPanel() {
            this.showSearchPanel = true
        },
        blurBackGround (e) {
            this.backGroundBlur = e
        }
    }
}
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
.blur {
    opacity: 0.3;
}
</style>