<!-- 跟团 -->
<template>
  <div class="page-group">
    <div class="page-popup-wrapper">
      <mt-button @click.native="popupVisible4 = true" size="large">下侧弹出 popup</mt-button>
    </div>
    <mt-popup v-model="popupVisible4" position="bottom" class="mint-popup-4">
      <Calendar></Calendar>
    </mt-popup>
  </div>

</template>

<script>
  import {
    Toast
  } from "mint-ui";
  import Calendar from 'vue-calendar-component';

  export default {
    components: {
      Calendar,
    },
    data() {
      return {
        popupVisible4: false,
        buttonBottom: 0,
      };
    },
    methods: {
    },
  }
</script>

<style lang="scss">
  .mint-popup-4 {
    width: 100%;
  }
</style>
