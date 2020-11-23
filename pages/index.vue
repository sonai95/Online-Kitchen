<template>
  <div>
    <div>
      <div class="logInModal" :class="showModal?'show':'hide'">
        <modal @closeTheModal="closeModal()" />
      </div>
    </div>
    <div class="container" :class="showModal?'blur':''">
      <div class="row">
        <div class="col-md-6 col-xs-12">
          <div class="locationHead" style="padding: 50px 0px">
            <button @click="getLoginModal()" class="allBtns" style="margin-right: 10px">Log In</button>
            <button class="allBtns">Sign Up</button>
          </div>
          <div class="locationBody py10">
            <div class="attractives">
              <h1>Hungry क्या?</h1>
            </div>
            <div class="locateCustomer py50" style="position: relative">
              <input type="text" maxlength="6" class="inputOption px20" />
              <button @click="getLocation()" class="gpsLocator">
                <span class="material-icons">gps_fixed</span>
              </button>
              <button @click="getNearestFood()" class="allBtns gettingStarted">
                Get started
              </button>
            </div>
          </div>
        </div>
        <div class="col-md-6 col-xs-12">
          <div class="metrosHeader TACenter">
            <h2>Order in Metros</h2>
          </div>
          <div class="container">
            <div class="row">
              <div class="col-md-6 col-xs-6">
                  <cityTile :cityTitle="'Kolkata'" :imgSrc="'../assets/Kolkata.png'" />
              </div>
              <div class="col-md-6 col-xs-6">
                  <cityTile :cityTitle="'New Delhi'" :imgSrc="'../assets/NewDelhi.png'" />
              </div>
              <div class="col-md-6 col-xs-6">
                  <cityTile :cityTitle="'Mumbai'" :imgSrc="'../assets/Mumbai.png'" />
              </div>
              <div class="col-md-6 col-xs-6">
                  <cityTile :cityTitle="'Chennai'" :imgSrc="'../assets/Chennai.png'" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Modal from "../components/modal.vue";
import cityTile from "../components/cityTile.vue";
export default {
  components: { modal: Modal, cityTile },
  data() {
    return {
      geocoder: "",
      showModal: false
    };
  },
  methods: {
    getNearestFood () {
      this.$router.push('/kitchens')
    },
    closeModal(x) {
        this.showModal = x
    },
    getLoginModal () {
        this.showModal = true
    },
    getLocation() {
      if (navigator.geolocation) {
        // timeout at 60000 milliseconds (60 seconds)
        var options = { timeout: 60000 };
        navigator.geolocation.getCurrentPosition(
          this.showLocation,
          this.errorHandler
        );
      } else {
        alert("Sorry, browser does not support geolocation!");
      }
    },
    showLocation(position) {
      var pos = {
        lat: position.coords.latitude,
        lng: position.coords.longitude
      };
      this.geocoder.geocode({ latLng: pos }, response => {
        if (response && response.length > 0) {
          this.place = response[0];
        } else {
          this.place = null;
        }
        console.log("Position", response[0]);
      });
    },
    errorHandler(err) {
      if (err.code === 1) {
        alert("Error: Access is denied!");
      } else if (err.code === 2) {
        alert("Error: Position is unavailable!");
      }
    }
  }
};
</script>
<style scoped lang="scss">
.inputOption {
  border: 1px solid #8d8d8d;
  width: 100%;
  height: 50px;
}
.gpsLocator {
  position: absolute;
  float: right;
  margin-top: 13px;
  cursor: pointer;
  z-index: 999;
  right: 120px;
}
.cities {
  border: 1px solid #8d8d8d;
  text-align: center;
  padding: 100px 0px;
  border-radius: 10px;
}
.logInModal {
  position: absolute;
  left: 35%;
  top: 25%;
  z-index: 1000;
}
.hide {
  display: none;
}
.show {
    display: block;
}
.blur {
    opacity: 0.3;
}
.gettingStarted {
  position: absolute;
  top: 6px;
  padding: 7px;
  right: 5px;
  background: #2b2b2b;
  color: rgb(221, 221, 221);
}
</style>