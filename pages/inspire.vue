<template>
<v-layout
    column
    justify-center
    align-center
  >
  <candidate-select />
  <!-- <hooper style="height: auto">
      <slide v-for="banner in ourBanners" :key="banner.imageUrl">
        <img class="imagesCarousel" :src="banner.imageUrl">
      </slide>
    </hooper>
    <button @click="method1">Set offline</button> -->
  </v-layout>
</template>

<script>
import Logo from '~/components/Logo.vue'
import VuetifyLogo from '~/components/VuetifyLogo.vue'
import CandidateSelect from '../components/CandidateSelect';

export default {
  components: {
    Logo,
    VuetifyLogo,
    'candidate-select': CandidateSelect
  }
}
</script>
