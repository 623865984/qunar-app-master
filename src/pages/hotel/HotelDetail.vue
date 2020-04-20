<template>
  <div class="HotelDetail-page">
    <div class="header">
      <i class="iconfont qn-incon-zzarrow-left"
        @click="$router.go(-1)">
      </i>
      <div class="data-time"
        @click="popupVisible4 = true" size="large">
        <div class="time-top">
          <p>住</p>
          <span>{{this.nowDay[0]}}</span>
        </div>
        <div class="time-bottom">
          <p>离</p>
          <span>{{this.nowDay[this.nowDay.length-1]}}</span>
        </div>
      </div>
      <div class="search-box">
        <span class="city">南宁</span>
        <div class="search">
          <mt-search
            cancel-text="取消"
            placeholder="搜索">
          </mt-search>
        </div>
      </div>
      <i class="iconfont qn-incon-zzeye-o"></i>
    </div>
  	<div class="HotelDetail-content">
      <div class="hotel-list">
        <ul class="list">
          <li class="list-box"
            v-for="item of hotelInfo"
            @click="$router.push('/hotel/hotelInfo')"
            :key="item.id">
            <div class="list-left">
              <img :src="item.imagUrl" />
            </div>
            <div class="list-right">
              <p class="hotel-name">{{item.title}}</p>
              <div class="comment">
                <span class="commentScore">{{item.score}}分</span>
                <span class="commentDesc">{{item.desc}}</span>
                <span class="commentCount">{{item.count}}条评论</span>
                <span class="dangciText" v-if="item.dangciText">{{item.dangciText}}</span>
              </div>
              <div class="address">
                <p class="showAddr">距万象城直线{{item.distance}}公里</p>
              </div>
              <div class="tag">
                <span v-for="tagg of item.tag"
                  class="list-tag"
                  :class="tagg.border">
                {{tagg.tagText}}
                </span>
              </div>
              <div class="price-list">
                <p>{{item.describ}}</p>
                <div class="priceDetail">
                  <span>¥</span>
                  <span class="price">{{item.price}}</span>
                  <span>起</span>
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
      return{
        hotelInfo: [],
        popupVisible4: false,
      }
    },
    methods: {
      getHotelInfo () {
        axios.get('/api/hotel.json')
          .then(this.getHotelInfoSuccess)
      },
      getHotelInfoSuccess (res) {
        res = res.data
        if (res.ret && res.data) {
          const data = res.data
          this.hotelInfo = data.hotelInfo
          // console.log(this.hotelInfo)
        }
      }
    },
    mounted () {
      this.getHotelInfo()
    },
    computed: {
      ...mapState({
        nowDay: 'time'
      })
    }
  }
</script>

<style lang="scss" >
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
  .HotelDetail-page {
    background-color: #f7f7f7;
    height: 100vh;
    .header {
      box-sizing: border-box; //内边距不再影响盒子的大小
      display: flex;
      align-items: center;
      height: 0.88rem;
      background-color: #fff;
      padding: .12rem .32rem;
      i {
        font-size: 0.5rem;
        font-weight: 700;
        color: #616161;
        padding: 0.04rem;
      }
      .data-time {
        @include wh(90px, 32px);
        background-color: #f7f7f7;
        margin-right: 0.08rem;
        display: flex;
        box-sizing: border-box;
        flex-direction: column;
        padding: 0.08rem;
        font-size: .2rem;
        p {
          color: #616161;
        }
        .time-top {
          display: flex;
        }
        .time-bottom {
          display: flex;
        }
        span {
          color: #08b2cc;
          padding-left: 0.08rem;
        }
      }
      .search-box {
        @include wh(208px, 32px);
        background-color: #f7f7f7;
        display: flex;
        align-items: center;
        span {
          box-sizing: border-box;
          width: 30%;
          padding: 0 .16rem;
          color: #00BCD4;
          border-right: .01rem solid #e6e6e6;
        }
        .search {
          width: 70%;
          height: 0.64rem;
          .mint-search {
            height: 0.64rem;
            .mint-searchbar {
              height: 0.64rem;
              background-color: #f7f7f7;
              padding: unset;
              i {
                font-size: 0.32rem;
              }
              .mint-searchbar-inner {
                background-color: unset;
                input {
                  background-color: unset;
                }
              }
            }
          }
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
              .comment {
                display: flex;
                align-items: center;
                height: 0.56rem;
                .commentScore {
                  color: #00BCD4;
                  font-size: .4rem;
                  font-weight: 700;
                  margin-right: .08rem;
                }
                .commentDesc {
                  color: #00BCD4;
                  font-size: .32rem;
                  font-weight: 700;
                  margin-right: .08rem;
                }
                .commentCount {
                  margin-right: .08rem;
                }
                .dangciText {
                  color: #9e9e9e;
                  padding: .04rem .12rem;
                  background: #f7f7f7;
                  border-radius: .4rem;
                }
            }
              .address {
                .showAddr {
                  color: #9e9e9e;
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
          }
        }
      }
    }
   }
    .mint-popup-4 {
      width: 100%;
    }
}
</style>
