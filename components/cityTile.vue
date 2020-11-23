<template>
    <div class="cities" style="position: relative">
        <div style="position: relative">
            <img v-if="cityTitle=='Kolkata'" class="cityImg" src="../assets/Kolkata.png" />
            <img v-if="cityTitle=='New Delhi'" class="cityImg" src="../assets/NewDelhi.png" />
            <img v-if="cityTitle=='Mumbai'" class="cityImg" src="../assets/Mumbai.png" />
            <img v-if="cityTitle=='Chennai'" class="cityImg" src="../assets/Chennai.png" />
        </div>
        <div class="cityTitle"><b>{{ cityTitle }}</b></div>
    </div>
</template>
<script>
export default {
    props: {
        cityTitle: {
            type: String,
            default: ''
        },
        imgSrc: {
            type: String,
            default: ''
        }
    }
}
</script>
<style scoped lang="scss">
.cities {
  border: 1px solid #8d8d8d;
  text-align: center;
  padding: 100px 0px;
  border-radius: 10px;
}
.cityImg {
    position: absolute;
    width: 100%;
    top: -45px;
    left: 1px;
}
.cityTitle {
    position: absolute;
    bottom: 10px;
    left: 100px;
}
</style>