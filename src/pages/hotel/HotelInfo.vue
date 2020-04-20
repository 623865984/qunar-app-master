<template>
  <div class="HotelInfo-page">
    <mt-header
      @click.native="$router.back(-1)">
      <router-link to="" slot="left">
        <mt-button icon="back"></mt-button>
      </router-link>
    </mt-header>
  	<div class="base-info">
      <h1>香榭里酒店(南宁会展中心地铁站店)</h1>
      <div class="comment">
        <div class="score-box">
          <span class="num">4.5</span>
          <span class="desc">非常棒</span>
        </div>
        <div class="content-box">
          <span class="content-desc">有免费的早餐提供，很满意；提供接站这项服务，免去交通负担</span>
          <p class="sub-content">94%好评, 889条评论, 19条问答</p>
        </div>
        <i class="iconfont qn-incon-zzarrow"></i>
      </div>
    </div>
    <div class="filter-box"
      @click="popupVisible4 = true" size="large">
      <p class="date-btn">
        <span class="date-select">
          <span class="date">{{this.nowDay[0]}}</span>
          <span class="sub">周五</span>
        </span>
        <span class="date-sum">共<!-- -->{{this.nowDay.length}}<!-- -->晚</span>
        <span class="date-select t-right">
          <span class="date">{{this.nowDay[this.nowDay.length-1]}}</span>
          <span class="sub">周二</span>
        </span>
      </p>
    </div>
    <div class="HotelDetail-content">
      <div class="hotel-list">
        <ul class="list">
          <li class="list-box"
            v-for="item of houseInfo"
            :key="item.id">
            <div class="list-left">
              <img :src="item.imagUrl" />
            </div>
            <div class="list-right">
              <p class="hotel-name">{{item.title}}</p>
              <div class="address">
                <span class="showAddr"
                  v-for="des of item.descipe">{{des.text}}</span>
              </div>
              <div class="tag">
                <span v-for="tagg of item.tag"
                  class="list-tag"
                  :class="tagg.border">
                {{tagg.tagText}}
                </span>
              </div>
              <div class="price-list">
                <p></p>
                <div class="priceDetail">
                  <span>¥</span>
                  <span class="price">{{item.price}}</span>
                  <span>起</span>
                </div>
              </div>
              <div class="fBtn">
                <div class="book">
                  预定
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <mt-popup v-model="popupVisible4" position="bottom" class="mint-popup-4">
      <MyCalendar></MyCalendar>
    </mt-popup>
  </div>
</template>

<script>
  import axios from 'axios'
  import { mapState } from 'vuex'
  import MyCalendar from 'common/Calendar'
  export default {
    components: {
      MyCalendar,
    },
    data() {
        return {
          popupVisible4: false,
          houseInfo: [],
        };
      },
    methods: {
      getHouselInfo () {
        axios.get('/api/hotel.json')
          .then(this.getHouselInfoSuccess)
      },
      getHouselInfoSuccess (res) {
        res = res.data
        if (res.ret && res.data) {
          const data = res.data
          this.houseInfo = data.houseInfo
          // console.log(this.hotelInfo)
        }
      }
    },
    mounted () {
      this.getHouselInfo()
    },
    computed: {
      ...mapState({
        nowDay: 'time'
      })
    }
  }
</script>

<style lang="scss" scoped>
  .borderD {
    border: 0.02rem solid #f24848;
    color: #f24848;
  }
  .borderL {
    border: 0.02rem solid #4caf50;
    color: #4caf50;
  }
  .borderH {
    border: 0.02rem solid #df9164;
    color: #df9164;
  }
  .HotelInfo-page {
    background-image: url(//himg1.qunarzz.com/imgs/201908/17/C.Dwh-xgv0LOmdZKdkg1024.jpg);
    background-repeat:no-repeat;
    background-size:100%;
    background-color: rgb(237,242,245);
    height: 100vh;
    .mint-header {
      background-color:unset;
    }
    .base-info {
      @include wh(343px, 142px);
      background: #fff;
      margin: 2.8rem auto 0;
      display: flex;
      flex-direction: column;
      box-sizing: border-box;
      padding: .32rem .22rem .32rem .28rem;
      border-radius: .04rem;
      box-shadow: 0 0.04rem 0.10rem 0 #e0e0e0;
      // align-items: center;
      h1 {
        height: 40%;
        text-align: center;
        font-size: .4rem;
        font-weight: 700;
        white-space: nowrap;
        word-wrap: normal;
        overflow: hidden;
        border-bottom: 0.02rem solid #f7f7f7;
      }
      .comment {
        height: 60%;
        display: flex;
        align-items: center;
        .score-box {
          @include wh(48px, 56px);
          background: #f2fdff;
          text-align: center;
          margin-right: .26rem;
          .num {
            width: 0.96rem;
            background: #3fc4dd;
            color: #FFFFFF;
            font-size: .5rem;
            display: block;
            height: .72rem;
            line-height: .72rem;
          }
          .desc {
            color: #08b2cc;
            line-height: .4rem;
          }
        }
        .content-box {
          padding-right: .34rem;
          .content-desc {
            font-size: 0.24rem;
          }
          .sub-content {
            margin-top: .08rem;
            font-size: .2rem;
            color: #9e9e9e;
          }
        }
      }
    }
  }
    .filter-box {
      padding: .24rem .32rem .16rem;
      background: #FFFFFF;
      box-shadow: 0 0.04rem 0.10rem 0 #e0e0e0;
      margin-top: 0.4rem;
      .date-btn {
        padding: .16rem .24rem;
        align-items: center;
        background: #f7f7f7;
        border-radius: .08rem;
        display: flex;
        justify-content: space-between;
        .date-select {
          .date {
            color: #03bed8;
            font-size: .34rem;
          }
          .sub {
            color: #9e9e9e;
            font-size: .2rem;
          }
        }
        .date-sum {
          background: #fff;
          color: #03bed8;
          border-radius: .4rem;
          font-size: .2rem;
          height: .36rem;
          padding: 0 .2rem;
          line-height: .36rem;
        }
      }
    }
    .HotelDetail-content {
       margin-top: 0.2rem;
       .hotel-list{
         background: #fff;
         .list {
           .list-box {
             box-sizing: border-box;
             height: 2.84rem;
             border-bottom: .01rem solid #e6e6e6;
             padding: 0.24rem;
             display: flex;
             .list-left {
               margin-right: 0.16rem;
               img {
                 @include wh(90px, 120px)
               }
             }
             .list-right {
               width: 70%;
               display: flex;
               flex-direction: column;
               .hotel-name {
                 padding-top: 0.1rem;
                 font-size: .32rem;
                 font-weight: 700;
                 color: #212121;
                 text-overflow: ellipsis;
                 white-space: nowrap;
                 overflow: hidden;
               }
               .address {
                 margin-top: 0.1rem;
                 .showAddr {
                   color: #9e9e9e;
                   margin-right: 0.1rem;
                 }
               }
               .tag {
                 margin: 0.16rem 0;
                 .list-tag {
                   font-size: .18rem;
                   padding: 0.02rem;
                 }
               }
               .price-list {
                 display: flex;
                 justify-content: space-between;
                 align-items: center;
                 p {
                   color: #00BCD4;
                 }
                 span {
                   color: #ff714a;
                   font-weight: 700;
                 }
                 .price {
                   font-size: .44rem;
                 }
               }
               .fBtn {
                 @include fj(flex-end);
                 .book {
                   background-color: #ff704a;
                   color: #fff;
                   @include wh(50px, 27px);
                   border-radius: 0.08rem;
                   text-align: center;
                   line-height: 0.54rem;
                 }
               }
           }
         }
       }
     }
    }
    .mint-popup-4 {
      width: 100%;
    }
</style>
