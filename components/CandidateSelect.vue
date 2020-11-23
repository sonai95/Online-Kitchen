<template>
  <div class="mainContainer">
    <div class="container">
      <div class="row">
        <div class="col-md-6">
          <div style="text-align: center">
            <div class="headerTau">
              Donald Trump
            </div>
            <div class="bodyBhaiyaTrump">
              <div class="row" style="display: inline-block">
                <div style="border-radius: 150px;overflow: hidden;">
                  <div class="votingForTrump" v-if="votes === ''">
                    Vote for Donald trump.
                    <div>
                      <span
                        @click="addVoteForTrump()"
                        class="material-icons"
                        style="cursor: pointer !important"
                      >
                        thumb_up
                      </span>
                    </div>
                  </div>
                  <div
                    class="votingForTrump"
                    style="margin-top: 108px;margin-left: 104px;"
                    v-else-if="votes === 'Trump'"
                  >
                    <span style="font-size: 100px" class="material-icons">
                      check
                    </span>
                  </div>
                  <div
                    class="votingForTrump"
                    style="margin-top: 108px;margin-left: 104px;"
                    v-else
                  >
                    <span style="font-size: 100px" class="material-icons">
                      close
                    </span>
                  </div>
                  <img class="trumpClass" src="../assets/trump.jpg" />
                </div>
              </div>
              <div class="trumpDetails">
                <div class="trumpVideos">
                  <span title="Trump's Videos" class="material-icons">
                    ondemand_video
                  </span>
                </div>
                <div class="trumpAgenda">
                  <span title="Trump's Agenda" class="material-icons">
                    view_agenda
                  </span>
                </div>
                <div class="trumpVice">
                  <img title="Mike Pence" style="width: 35px;border-radius: 32px;" src="../assets/pence.jpg" />
                </div>
              </div>
            </div>
            <div class="countForTrump">
              <div
                style="background-color: rgb(155 138 112);width: 50%;display: inline-block;padding: 10px"
              >
                <div class="trumpLikes" style="float: left; margin-left: 10px">
                  <span class="material-icons">
                    thumb_up
                  </span>
                </div>
                <div
                  class="trumpVotesCount"
                  style="float: left; margin-left: 10px"
                >
                  <span>{{ trumpCount }}</span> secured votes
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-6">
          <div style="text-align: center">
            <div class="headerTau">
              Joe Biden
            </div>
            <div class="bodyBhaiyaBiden">
              <div class="row" style="display: inline-block">
                <div style="border-radius: 150px;overflow: hidden;">
                  <div class="votingForBiden" v-if="votes === ''">
                    Vote for Joe Biden.
                    <div>
                      <span
                        @click="addVoteForBiden()"
                        class="material-icons"
                        style="cursor: pointer !important"
                      >
                        thumb_up
                      </span>
                    </div>
                  </div>
                  <div
                    class="votingForBiden"
                    style="margin-top: 108px;margin-left: 104px;"
                    v-else-if="votes === 'Biden'"
                  >
                    <span style="font-size: 100px" class="material-icons">
                      check
                    </span>
                  </div>
                  <div
                    class="votingForBiden"
                    style="margin-top: 108px;margin-left: 104px;"
                    v-else
                  >
                    <span style="font-size: 100px" class="material-icons">
                      close
                    </span>
                  </div>
                  <img class="bidenClass" src="../assets/biden.jpg" />
                </div>
              </div>
              <div class="bidenDetails">
                <div class="bidenVideos">
                  <span title="Biden's Videos" class="material-icons">
                    ondemand_video
                  </span>
                </div>
                <div class="bidenAgenda">
                  <span title="Biden's Agenda" class="material-icons">
                    view_agenda
                  </span>
                </div>
                <div class="bidenVice">
                  <img title="Kamala Harris" style="width: 35px;border-radius: 32px;" src="../assets/kamala.jpg" />
                </div>
              </div>
            </div>
            <div class="countForBiden">
              <div
                style="background-color: rgb(155 138 112);width: 50%;display: inline-block;padding: 10px"
              >
                <div class="bidenLikes" style="float: left; margin-left: 10px">
                  <span class="material-icons">
                    thumb_up
                  </span>
                </div>
                <div
                  class="bidenVotesCount"
                  style="float: left; margin-left: 10px"
                >
                  <span>{{ bidenCount }}</span> secured votes
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapState } from "vuex";

export default {
  data() {
    return {
      trumpCount: 0,
      bidenCount: 0
    };
  },
  methods: {
    addVoteForBiden() {
      this.bidenCount++;
      this.$store.dispatch("addVote", { name: "Biden" });
    },
    addVoteForTrump() {
      this.trumpCount++;
      this.$store.dispatch("addVote", { name: "Trump" });
    }
  },
  computed: {
    ...mapState({
      votes: state => state.Votes.voteDetails.yourVote
    })
  }
};
</script>
<style scoped lang="scss">
.mainContainer {
  width: 100%;
}
.trumpClass {
  transition: 200ms;
  width: 100%;
}
.bidenClass {
  transition: 200ms;
  width: 100%;
}
.bodyBhaiyaTrump {
  transition: 200ms;
  &:hover {
    .trumpDetails > .trumpVideos {
      position: absolute;
      left: -158px;
      top: -85px;
      transition: 200ms;
      opacity: 1;
    }
    .trumpDetails > .trumpAgenda {
      position: absolute;
      left: -200px;
      top: 10px;
      transition: 200ms;
      opacity: 1;
    }
    .trumpDetails > .trumpVice {
      opacity: 1;
      position: absolute;
      top: 120px;
      left: -170px;
      width: 60px;
      transition: 200ms;
      opacity: 1;
    }
    .votingForTrump {
      margin-top: 150px;
      position: absolute;
      opacity: 1;
      margin-left: 64px;
      z-index: 999;
    }
    .trumpClass {
      transition: 200ms;
      width: 102%;
      opacity: 0.2;
    }
  }
}
.votingForTrump {
  transition: 200ms;
  margin-top: 0;
  position: absolute;
  opacity: 0;
  margin-left: 64px;
}
.bidenDetails > .bidenVideos {
  top: 25px;
  left: 0px;
  position: absolute;
  opacity: 0;
}
.bidenDetails > .bidenAgenda {
  top: 25px;
  left: 0px;
  position: absolute;
  opacity: 0;
}
.bidenDetails > .bidenVice {
  top: 25px;
  left: 0px;
  position: absolute;
  opacity: 0;
}
.trumpDetails > .trumpVideos {
  top: 25px;
  left: 0px;
  position: absolute;
  opacity: 0;
}
.trumpDetails > .trumpAgenda {
  top: 25px;
  left: 0px;
  position: absolute;
  opacity: 0;
}
.trumpDetails > .trumpVice {
  top: 25px;
  left: 0px;
  position: absolute;
  opacity: 0;
}
.bodyBhaiyaBiden {
  &:hover {
    .bidenDetails > .bidenVideos {
      position: absolute;
      left: 158px;
      top: -85px;
      transition: 200ms;
      opacity: 1;
    }
    .bidenDetails > .bidenAgenda {
      position: absolute;
      left: 200px;
      top: 10px;
      transition: 200ms;
      opacity: 1;
    }
    .bidenDetails > .bidenVice {
      opacity: 1;
      position: absolute;
      top: 120px;
      left: 170px;
      width: 60px;
      transition: 200ms;
      opacity: 1;
    }
    transition: 200ms;
    .votingForBiden {
      margin-top: 143px;
      position: absolute;
      opacity: 1;
      margin-left: 81px;
      z-index: 999;
    }
    .bidenClass {
      transition: 200ms;
      width: 102%;
      opacity: 0.2;
    }
  }
}
.votingForBiden {
  transition: 200ms;
  margin-top: 0;
  position: absolute;
  opacity: 0;
  margin-left: 64px;
}
.trumpVotesCount {
  animation-name: floating;
  animation-duration: 1s;
  animation-iteration-count: infinite;
  animation-timing-function: ease-in-out;
}
@keyframes floating {
  from {
    transform: translate(0, 0px);
  }
  65% {
    transform: translate(0, 2px);
  }
  to {
    transform: translate(0, 0px);
  }
}
.trumpLikes {
  animation-name: rotate;
  animation-duration: 1s;
  animation-iteration-count: infinite;
  animation-timing-function: ease-in-out;
}
@keyframes rotate {
  from {
    transform: rotate(0deg);
  }
  65% {
    transform: rotate(18deg);
  }
  to {
    transform: rotate(0deg);
  }
}

.bidenVotesCount {
  animation-name: floating;
  animation-duration: 1s;
  animation-iteration-count: infinite;
  animation-timing-function: ease-in-out;
}
@keyframes floating {
  from {
    transform: translate(0, 0px);
  }
  65% {
    transform: translate(0, 2px);
  }
  to {
    transform: translate(0, 0px);
  }
}
.bidenLikes {
  animation-name: rotate;
  animation-duration: 1s;
  animation-iteration-count: infinite;
  animation-timing-function: ease-in-out;
}
@keyframes rotate {
  from {
    transform: rotate(0deg);
  }
  65% {
    transform: rotate(18deg);
  }
  to {
    transform: rotate(0deg);
  }
}
.bidenDetails {
  position: absolute;
  top: 180px;
  margin-left: 250px;
}
.trumpDetails {
  position: absolute;
  top: 180px;
  margin-left: 250px;
}
// .mainContainer {
//     background-image: url('../assets/unites-states-white-house-building-doodle-illustration-68853573.jpg');
//     background-size: 1500px 100px;
// }
</style>