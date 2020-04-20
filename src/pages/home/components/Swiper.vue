<!-- 首页banner轮播组件 -->
<template>
  <div class="wrapper">
    <a href="https://touch.piao.qunar.com/touch/detail.htm?id=31980&cat=from_index%3D3%26dist_city%3D南宁%26from_value%3DPOI-31980%26from_area%3Dts_topic">
      <swiper :options="swiperOption" v-if="list.length">
        <swiper-slide v-for = "item of list" :key = "item.id">
          <img class="swiper-img" :src="item.imgUrl">
        </swiper-slide>
        <div class="swiper-pagination"  slot="pagination"></div>
      </swiper>
    </a>
  </div>
</template>

<script>
export default {
  name: 'HomeSwiper',
  props: {
    list: Array
  },
  data () {
    return {
      swiperOption: {
        pagination: '.swiper-pagination',
        loop: true,
        autoplay: 3000,
        autoplayDisableOnInteraction: false
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.wrapper /deep/ .swiper-pagination-bullet-active {
  background: #fff;
}
.swiper-pagination-bullet-active {
  background: #fff;
}
.wrapper {
  overflow: hidden;
  width: 100%;
  height: 0;
  padding-bottom: 31.25%;
  background: #eee;
  .swiper-img{
    width: 100%;
  }
}
</style>
