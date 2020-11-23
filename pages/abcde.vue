<template>
    <div>
        <searchPage v-if="showSearchPanel" @closeSearchPanel="closeSearchPanel()"  />
    </div>
</template>
<script>
import searchPage from '../components/searchPage.vue'

export default {
    components: { 'searchPage': searchPage},
    data() {
        return {
            showSearchPanel: true
        }
    },
    methods: {
        closeSearchPanel(x) {
            this.showSearchPanel = x
        }
    }
}
</script>