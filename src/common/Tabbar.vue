<template>
  <div class="page-tabbar">
    <mt-tabbar v-model="selected" fixed>
      <mt-tab-item id="0"
        @click.native="goPage('/')">
        <img slot="icon" src="../assets/home.png">
        首页
      </mt-tab-item>
      <mt-tab-item id="1"
        @click.native="goPage('/order/')">
        <img slot="icon" src="../assets/order.png">
        订单
      </mt-tab-item>
      <mt-tab-item id="3"
        @click.native="goPage('/user/')">
        <img slot="icon" src="../assets/user.png">
        我的
      </mt-tab-item>
    </mt-tabbar>
  </div>
</template>

<script>
export default {
  name: 'MyTabbar',
  props: {
    page: {
      default: 0
    }
  },
  data() {
    return {
      selected: 0
    };
  },
  created() {
    this.selected = this.page;
  },
  methods: {
    goPage(url) {
            this.$router.replace(url);
          }
  },
};
</script>

<style style="scss" scoped>
  .page-tabbar {
    overflow: hidden;
  }

  .page-wrap {
    overflow: auto;
    height: 100%;
    padding-bottom: 100px;
  }
</style>
