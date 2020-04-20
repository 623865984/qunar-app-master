<!-- 景点详情页 -->
<template>
  <div class="detail-page">
    <detail-banner :sightName="sightName" :bannerImg="bannerImg" :gallaryImgs="gallaryImgs"></detail-banner>
    <detail-header :sightName="sightName"></detail-header>
    <div class="content">
      <!-- <detail-list :list="list"></detail-list> -->
      <div class="baseinfo">
        <div class="filter-box">
          <div class="flexbox-item">
            <div class="item-top">
              <span class="mp-commentcard-score">4.9</span>
              <span class="mp-commentcard-text">分</span>
              <span class="mp-commentcard-desc">很棒</span>
            </div>
            <div class="item-bottom">
              <span class="mp-totalcommentnum">4032条评论</span>
              <span class="mp-totalcommentnum">3条攻略</span>
              <i class="iconfont qn-incon-zzarrow"></i>
            </div>
          </div>
          <div class="flexbox-item hright">
            <div class="item-top">
              <span class="mp-sightcard-title">景点简介</span>
            </div>
            <div class="item-bottom">
              <span class="mp-sightcard-text">开放时间、贴士</span>
              <i class="iconfont qn-incon-zzarrow"></i>
            </div>
          </div>
        </div>
        <div class="address">
          <i class="iconfont qn-incon-zzflag-o"></i>
          <p>广西省南宁市兴宁区民主路6-8号人民公园后门</p>
          <i class="iconfont qn-incon-zzarrow"></i>
        </div>
      </div>
      <div class="promote">
        <h3><i class="iconfont qn-incon-zzthumb-circle-o"></i>去哪儿推荐</h3>
        <div class="ticket-box">
          <div class="left">
            <h6>南宁海底世界成人票</h6>
            <span class="mp-ticket-desctag">
              <img class="mp-ticket-tagicon" src="https://img1.qunarzz.com/piao/fusion/1804/94/3537f6969acc0c02.png">
              17:00前随买随用
            </span>
            <div class="icon">
              <span>自营</span>
              <span>随时退</span>
            </div>
          </div>
          <div class="right">
            <div class="btnTop">
              <span>¥</span>
              <span class="price">40</span>
            </div>
            <div class="btnBot">
              预定
            </div>
          </div>
        </div>
      <div class="ticket-box">
        <div class="left">
          <h6>南宁海底世界学生票</h6>
          <span class="mp-ticket-desctag">
            <img class="mp-ticket-tagicon" src="https://img1.qunarzz.com/piao/fusion/1804/94/3537f6969acc0c02.png">
            17:00前随买随用
          </span>
          <div class="icon">
            <span>自营</span>
            <span>随时退</span>
          </div>
        </div>
        <div class="right">
          <div class="btnTop">
            <span>¥</span>
            <span class="price">30</span>
          </div>
          <div class="btnBot">
            预定
          </div>
        </div>
      </div>
      <div class="ticket-box">
        <div class="left">
          <h6>南宁海底世界老人票</h6>
          <span class="mp-ticket-desctag">
            <img class="mp-ticket-tagicon" src="https://img1.qunarzz.com/piao/fusion/1804/94/3537f6969acc0c02.png">
            17:00前随买随用
          </span>
          <div class="icon">
            <span>自营</span>
            <span>随时退</span>
          </div>
        </div>
        <div class="right">
          <div class="btnTop">
            <span>¥</span>
            <span class="price">30</span>
          </div>
          <div class="btnBot">
            预定
          </div>
        </div>
      </div>
      </div>
    </div>
  </div>
</template>

<script>
import DetailBanner from './components/Banner'
import DetailHeader from './components/Header'
// import DetailList from './components/List'
import axios from 'axios'

export default {
  name: 'Detail',
  components: {
    DetailBanner,
    DetailHeader,
    // DetailList
  },
  data () {
    return {
      sightName: '',
      bannerImg: '',
      gallaryImgs: [],
      // list: [],
      pageId: 0
    }
  },
  methods: {
    getDetailInfo () {
      axios.get('/api/detail.json', {
        params: {
          id: this.$route.params.id
        }
      }).then(this.getDetailInfoSuccess)
    },
    getDetailInfoSuccess (res) {
      res = res.data
      if (res.ret && res.data) {
        const data = res.data
        this.sightName = data[this.pageId].sightName
        this.bannerImg = data[this.pageId].bannerImg
        this.gallaryImgs = data[this.pageId].gallaryImgs
        // this.list = data[this.pageId].priceType
      }
    }
  },
  mounted () {
    this.getDetailInfo()
  },
  activated () {
    this.getDetailInfo()
    this.pageId = Number(this.$route.params.id) - 1
  }
}
</script>

<style lang="scss" scoped>
  .hright {
    border: unset;
    padding-left: 0.2rem;
    .item-bottom {
      margin-top: .15rem;
    }
  }
  .detail-page {
    .content {
      height: 100vh;
      background-color: #F7F7F7;
      .baseinfo {
        box-sizing: border-box;
        width: 100%;
        height: 2rem;
        background: #fff;
        border-radius: 0.2rem;
        display: flex;
        flex-direction: column;
        padding: .2rem .2rem 0 .2rem;
        .filter-box {
          position: relative;
          display: flex;
          padding-top: .1rem;
          padding-bottom: .2rem;
          height: 60%;
          border-bottom: 0.04rem solid #F7F7F7;
          .flexbox-item {
            flex: 1;
            border-right: 0.04rem solid #F7F7F7;

            .item-top {
              color: #ff8300;
              .mp-commentcard-score {
                font-size: .44rem;
                line-height: .44rem;
              }
              .mp-sightcard-title {
                color: #212121;
              }
            }
            .item-bottom {
              color: #9e9e9e;
              font-size: .24rem;
              display: flex;
              justify-content: space-between;
              .mp-totalcommentnum {
                line-height: .32rem;
                margin-right: .2rem;
              }
            }
          }
        }
        .address {
          height: 40%;
          display: flex;
          align-items: center;
          justify-content: space-between;
          color: #9e9e9e;
          p {
            color: #212121;
          }
        }
      }
      .promote {
        margin-top: 0.2rem;
        width: 100%;
        height: 5.9rem;
        background: #fff;
        display: flex;
        flex-direction: column;
        padding-left: .2rem;
        h3 {
          flex: 1.6;
          border-bottom: 0.04rem solid #F7F7F7;
          font-size: .32rem;
          line-height: 0.94rem;
          .qn-incon-zzthumb-circle-o {
            background: #ff6e6e;
            font-size: .5rem;
            margin: 0.08rem 0.2rem 0;
          }
        }
        .ticket-box {
          flex: 2.8;
          border-bottom: 0.04rem solid #F7F7F7;
          padding: .3rem .2rem .24rem 0;
          display: flex;
          .left {
            flex: 8;
            display: flex;
            flex-direction: column;
            color: #616161;
            h6 {
              font-size: .3rem;
            }
            .mp-ticket-desctag {
              font-size: .24rem;
              margin-top: 0.1rem;
              .mp-ticket-tagicon {
                @include wh(.2rem, .2rem);
              }
            }
            .icon {
              margin-top: 0.1rem;
              span {
                border: 0.02rem solid #00BCD4;
                color: #00BCD4;
                font-size: .2rem;
              }
            }

          }
          .right {
            flex: 2;
            margin-right: 0.2rem;
            .btnTop {
              text-align: center;
              span {
                color: #ff9800;
              }
              .price {
                font-size: .4rem;
              }
            }
            .btnBot {
              background: #ff9800;
              color: #fff;
              width: 1.6rem;
              height: 0.6rem;
              border-radius: .08rem;
              text-align: center;
              line-height: 0.6rem;
            }
          }
        }
      }
    }
  }
</style>
