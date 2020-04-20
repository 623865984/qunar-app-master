<template>
  <div class="page-hotel">
    <mt-header title="酒店住宿">
      <router-link to="/" slot="left">
        <mt-button icon="back"></mt-button>
      </router-link>
    </mt-header>
    <div class="hotel-content">
      <div class="search-box">
        <div class="box box1">
          <div class="in"
            @click="getItem()">
            <p>国内·港澳台</p>
            <div :class="activeClass == key ? 'itemon':''">

            </div>
          </div>
          <div class="out"
            @click="getItem()">
            <p>海外</p>
            <div :class="activeClass == key ? '':'itemon'">

            </div>
          </div>
        </div>
        <div class="box boxIcon box2">
          <i class="iconfont qn-incon-zzflag-o"></i>
          <div class="city-selected"
            @click="$router.push('/city/in')">
          {{currentCity}}
          </div>
          <i class="iconfont qn-incon-zzarrow"></i>
          <div class="mylocation">
            <i class="iconfont qn-incon-zzaim"></i>
            <p>我的位置</p>
          </div>
        </div>
        <div class="box boxIcon box3">
          <i class="iconfont qn-incon-zznotes-o"></i>
          <div class="day-selected"
            @click="popupVisible4 = true" size="large">
            <li>
              <span class="month">{{this.nowDay[0]}}</span>
              <span class="grey-color">入住</span>
            </li>
            <li>
              <span class="month">{{this.nowDay[this.nowDay.length-1]}}</span>
              <span class="grey-color">离店</span>
              <span class="grey-color">共{{this.nowDay.length}}晚</span>
            </li>
          </div>
          <i class="iconfont qn-incon-zzarrow"></i>
        </div>
        <div class="box boxIcon box4">
          <i class="iconfont qn-incon-zzsearch"></i>
          <div class="key-word">搜索酒店名、地名、地标</div>
          <i class="iconfont qn-incon-zzarrow"></i>
        </div>
        <div class="box box5">
          <mt-button type="default"
            @click="$router.push('/hotel/hotelDetail')">
            搜索
          </mt-button>
        </div>
        <div class="box box6">
            <p>最近浏览</p>
            <p class="myorder"
              @click="$router.push('/order')">
              我的订单
            </p>
        </div>
      </div>
    </div>
    <mt-popup v-model="popupVisible4" position="bottom" class="mint-popup-4">
      <MyCalendar></MyCalendar>
    </mt-popup>
  </div>
</template>

<script>
  import { mapState } from 'vuex'
  import MyCalendar from 'common/Calendar'
  export default {
    components: {
      MyCalendar,
    },
    data() {
        return {
          activeClass: 1,
          key: 1,
          popupVisible4: false,
        };
      },
    computed: {
      ...mapState({
        currentCity: 'city',
        nowDay: 'time'
      })
    },
    methods: {
      getItem() {
          this.key = -(this.key);  // 把当前点击元素的index，赋值给activeClass
          // console.log(this.key)
        },
    },
    mounted() {

    },


  }
</script>

<style lang="scss" >
  @import "../../assets/styles/mixins";
  .box {
    border-bottom: 1px solid #eeeeee;
    display: flex;
    flex: 1;
  }
  .boxIcon {
    margin-left: 1.1rem;
    align-items: center;
    i {
      margin-left: -0.7rem;
      margin-right: 0.5rem;
      color: #bdbdbd;
    }
    .qn-incon-zzarrow {
      margin-right: unset;
      margin-left: unset;
    }
  }
  .itemon {
      margin: .32rem auto 0;
      border-bottom: 0.06rem solid #00BCD4;
      width: 60%;
  }
  .page-hotel {
    background-image: url(//simg1.qunarzz.com/site/images/wap/home/recommend/20160509_banner_750x376.jpg);
    background-repeat:no-repeat;
    background-size:100%;
    background-color: rgb(237,242,245);
    height: 100vh;
    .mint-header {
      background-color:unset;
    }
    .hotel-content {
      .search-box {
        background-color: #fff;
        @include wh(352px, 350px);
        margin: 1.9rem auto 0;
        border-radius: 0.06rem;
        display: flex;
        flex-direction: column;
      }
      .box1 {
        .in {
          flex: 1;
        }
        .out {
          flex: 1;
        }
        p {
          margin-top: 0.4rem;
          display: block;
          border-right: 1px solid #eee;
          text-align: center;
          font-size: .36rem;
        }
      }
      .box2 {
        .city-selected {
          width: 65%;
          font-size: .48rem;
        }
        .mylocation {
          text-align: center;
          height: 70%;
          margin-left: 0.25rem;
          color: #607d8b;
          display: flex;
          flex-direction: column;
          i {
            flex: 1;
            margin: 0;
            color: #607d8b;
          }
          p {
            flex: 1;
          }
        }
      }
      .box3 {
        .day-selected {
          width: 90%;
          font-size: .38rem;
          height: 80%;
          display: flex;
          flex-direction: column;
          li {
            display: block;
            flex: 1;
            .grey-color {
              color: #8c8c8c;
              font-size: .24rem;
            }
          }
        }

      }
      .box4 {
        .key-word {
          width: 90%;
          color: #bdbdbd;
        }
      }
      .box5 {
        .mint-button {
          @include wh(90%, 60%)
          margin: auto;
        }
        .mint-button--default{
          background-color: #ff9800;
          color: #fff;
          font-weight: 700;
          font-size: .35rem;
          font-style: normal;
          font-variant-ligatures: normal;
          font-variant-caps: normal;
          font-variant-numeric: normal;
          font-variant-east-asian: normal;
          font-stretch: normal;
          font-family: Arial;
        }
      }
      .box6 {
        .myorder {
          border-right:unset;
        }
        p {
          color: #607d8b;
          line-height: 1.1rem;
          display: block;
          flex: 1;
          text-align: center;
          border-right: 1px solid #eee;
        }
      }

    }
    .mint-popup-4 {
      width: 100%;
    }
  }

</style>
