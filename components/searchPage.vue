<template>
    <div class="searchPage">
        <div class="searchBarSection">
            <div class="searchBar container">
                <input placeholder="Search for Food or Restaurant" v-model="searchKey" @keyup="getRestrauntDetails()" class="searchPanel" />
            </div>
            <div class="closeOption">
                <span @click="closeSearchPanel()" class="material-icons closeModal">
                    close
                </span>
            </div>
        </div>
        <div>
            <div v-if="allKitchensFound.data && allKitchensFound.data.dishes">
                <div v-for="kitchen in allKitchensFound.data.dishes" :key="kitchen">
                    <kitchens-card :kitchenDetail="kitchen._source":typeIs="'Dish'" />
                </div>
            </div>
            <div v-if="allKitchensFound.data && allKitchensFound.data.restaurant">
                <div v-for="kitchen1 in allKitchensFound.data.restaurant" :key="kitchen1">
                    <kitchens-card :kitchenDetail="kitchen1._source"  :typeIs="'Restaurant'" />
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import serverUtil from '../server/PharmaSSD.js';
import KitchensCard from './KitchensCard.vue'
export default {
    components: { 'kitchens-card': KitchensCard },
    data() {
        return {
            searchKey: '',
            allKitchensFound: []
        }
    },
    methods: {
        closeSearchPanel () {
            this.$emit('closeSearchPanel', false)
        },
        async getRestrauntDetails () {
            console.log('AAAAAAAAAAAAAAAA', this.searchKey)
            this.allKitchensFound = await serverUtil.getSearchedKitchenDetails(this.searchKey)
            console.log('All kitchens found are', this.allKitchensFound)
        }
    }
}
</script>
<style scoped lang="scss">
.searchPanel {
    width: 100%;
    height: 50px;
    padding: 0px 20px;
    border-radius: 5px;
    background: white;
}
.searchBar {
    padding: 25px 0px;
    @media screen and (max-width: 768px) {
        padding: 25px 5px;
    }
}
.searchBarSection {
    background: #ffd17d;
}
.searchPage {
    position: relative;
    background: white;
    height: 100%;
}
.closeOption {
    position: absolute;
    top: 8px;
    right: 20px;
    color: white;
    @media screen and (max-width: 768px) {
        top: 2px;
        right: 5px;
    }
}
.closeModal {
    @media screen and (max-width: 768px) {
        font-size: 15px;
    }
}
</style>