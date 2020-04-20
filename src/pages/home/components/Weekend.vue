<!-- 主页推荐(周末去哪儿)组件 -->
<template>
  <div class="weekend">
    <div class="weekend-header">周末去哪儿</div>
    <ul class="weekend-list">
      <a href="http://touch.piao.qunar.com/touch/toSku.htm?skuId=300&skuName=爱上大自然&cat=from_area%3Dts_sku%26from_index%3D0%26from_value%3D%25E7%2588%25B1%25E4%25B8%258A%25E5%25A4%25A7%25E8%2587%25AA%25E7%2584%25B6%26dist_city%3D%25E5%258D%2597%25E5%25AE%2581">
        <li class="weekend-item" v-for="item of list" :key="item.id"><a></a>
          <img class="item-img" :src="item.imgUrl" alt="景点">
          <div class="item-info">
            <p class="item-title">{{item.title}}</p>
            <p class="item-desc">{{item.desc}}</p>
          </div>
        </li>
      </a>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HomeWeekend',
  props: {
    list: Array,
  }
}
</script>

<style lang="scss" scoped>
@import "~styles/variable.scss";
@import "~styles/mixins.scss";
.weekend {
  background: #fff;
  .weekend-header {
    padding-left: .2rem;
    height: .8rem;
    line-height: .8rem;
    background: $homeBgColor;
  }
  .weekend-list {
    .weekend-item {
      .item-img {
        display: block;
        width:100%;
      }
      .item-info {
        padding: .14rem .2rem .2rem .2rem;
        .item-title {
          height: .48rem;
          line-height: .48rem;
          padding-right: 1.4rem;
          font-size: .28rem;
          @include ellipsis;
        }
        .item-desc {
          height: .42rem;
          line-height: .42rem;
          padding-right: 1.4rem;
          font-size: .24rem;
          color: $descTextColor;
          @include ellipsis;
        }
      }
    }
  }
}
</style>
