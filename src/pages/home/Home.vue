<!-- 主页 -->
<template>
  <div class="home-page">
    <home-header></home-header>
    <div class="home-content">
      <home-swiper :list="swiperList"></home-swiper>
      <home-icons :list="iconList"></home-icons>
      <home-recommend :list="recommendList"></home-recommend>
      <home-weekend :list="weekendList"></home-weekend>
    </div>

    <MyTabbar page="0" />
    <div class="app-bottom"></div>

  </div>

</template>

<script>
import HomeHeader from './components/Header'
import HomeSwiper from './components/Swiper'
import HomeIcons from './components/Icons'
import HomeRecommend from './components/Recommend'
import HomeWeekend from './components/Weekend'
import MyTabbar from 'common/Tabbar'
import axios from 'axios'
import { mapState } from 'vuex'

export default {
  name: 'Home',
  components: {
    HomeHeader,
    HomeSwiper,
    HomeIcons,
    HomeRecommend,
    HomeWeekend,
    MyTabbar,
  },
  data () {
    return {
      lastCity: '',
      swiperList: [],
      iconList: [],
      recommendList: [],
      weekendList: []
    }
  },
  computed: {
    ...mapState({
      currentCity: 'city'
    })
  },
  methods: {
    getHomeInfo () {
      axios.get('/api/index.json?city=' + this.currentCity)
        .then(this.getHomeInfoSuccess)
    },
    getHomeInfoSuccess (res) {
      res = res.data
      if (res.ret && res.data) {
        const data = res.data
        this.swiperList = data.swiperList
        this.iconList = data.iconList
        this.recommendList = data.recommendList
        this.weekendList = data.weekendList
      }
    }
  },
  mounted () {
    this.lastCity = this.currentCity
    this.getHomeInfo()
  },
  activated () {
    if (this.lastCity !== this.currentCity) {
      this.lastCity = this.currentCity
      this.getHomeInfo()
    }
  }
}
</script>

<style lang="scss" scoped>
@import "~styles/variable.scss";
.home-page {
  background: $homeBgColor;
  .home-content {
    margin-top: 0.8rem;
  }
}
.app-bottom {
  color: $descTextColor;
  padding: .2rem;
  text-align: center;
}
</style>
