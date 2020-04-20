<template>
  <div class="page-order">
    <mt-header title="全部订单">
    </mt-header>
    <div class="order-content">
      <mt-navbar class="page-part" v-model="selected">
        <mt-tab-item id="1">全部</mt-tab-item>
        <mt-tab-item id="2">待出行</mt-tab-item>
        <mt-tab-item id="3">待付款</mt-tab-item>
        <mt-tab-item id="4">待点评</mt-tab-item>
        <mt-tab-item id="5">退款单</mt-tab-item>
      </mt-navbar>
      <div class="no-data">
        <img src="../../assets/images/gowhere.png" class="nodata"/>
        <p>没有查询到相关订单</p>
      </div>
    </div>
    <MyTabbar page="1" />
  </div>
</template>

<script>
import MyTabbar from 'common/Tabbar'
  export default {
    components: {
      MyTabbar,
    },
    mounted() {
    },
    data() {
      return {
        selected: '1'
      };
    },
  }
</script>


<style lang="scss">
  @import "../../assets/styles/mixins";
  .page-order {
    height: 100vh;
    background-color: #f0f2f4;
    .mint-header {
      background-color: $primary;
    }
    .order-content {
      .no-data {
        text-align: center;
        .nodata {
          width: 3.6rem;
          height: 3rem;
          margin: 15vh auto px2rem(10px) auto;
        }
      }
    }
  }


</style>
