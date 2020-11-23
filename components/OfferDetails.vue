<template>
    <div class="offerTile">
        <span class="starss material-icons">
            star
        </span>
        <div class="offer">{{ offerPercent }}</div>
    </div>
</template>
<script>
export default {
    props: {
        offerPercent: {
            type: String,
            default: null
        }
    }
}
</script>
<style scoped lang="scss">
    .offerTile {
        background: #ffbb40;
        color: white;
        padding: 0px 5px;
    }
    .offer {
        float: right;
        font-size: 13px;
        margin-left:5px;
        @media screen and (max-width: 768px) {
            font-size: 10px;
        }
    }
    .starss {
        font-size: 15px;
        line-height: 1.2;
        @media screen and (max-width: 768px) {
            font-size: 10px;
        }
    }
</style>