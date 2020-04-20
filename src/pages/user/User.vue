<template>
  <div class="page-user">
    <mt-header title="我的">
    </mt-header>
    <div class="user-content">
      <div class="user-info">
        <router-link class="user-infos"
          :to="userInfo&&userInfo.user_id? '/user/info' : '/login'">
          <div class="left">
            <img src="https://qcommons.qunar.com/headshot/headshotsById/315682540.png?l&ssl=true&_=1570592073630" />
          </div>
          <div class="right">
            <div class="left1">
              <p>{{username}}</p>
              <span><i class="iconfont qn-incon-zzphone-o"></i>{{mobile}}</span>
            </div>
            <div class="right1">
              <p>已签到</p>
            </div>
          </div>
        </router-link>
        <div class="user-other">
          <li>
            <span class="number">7</span>
            <span>代金券</span>
          </li>
          <li>
            <span class="number">0</span><span>收藏</span>
          </li>
          <li>
            <span class="number">2</span><span>足迹</span>
          </li>
          <li>
            <span class="number">0</span><span>常用信息</span>
          </li>
        </div>
      </div>
      <div class="box iconBar">
        <div class="item-top">
          <span class="item-fist">我的订单</span>
          <span class="item-last"
            @click="$router.push('/order/')">查看全部订单 ></span>
        </div>
        <div class="item-bottom"
          @click="test()">
          <li>
            <img src="../../assets/disc.png" class="icon"/>
            <span>待付款</span>
          </li>
          <li>
            <img src="../../assets/home.png" class="icon"/>
            <span>待出行</span>
          </li>
          <li>
            <img src="../../assets/order.png" class="icon"/>
            <span>待点评</span>
          </li>
          <li>
            <img src="../../assets/user.png" class="icon"/>
            <span>退款单</span>
          </li>
        </div>

      </div>
      <div class="box iconBar">
        <div class="item-top">
          <span class="item-fist">我的钱包</span>
          <span class="item-last">余额/银行卡等 ></span>
        </div>
        <div class="item-bottom">
          <li>
            <img src="../../assets/disc.png" class="icon"/>
            <span>闪游卡</span>
          </li>
          <li>
            <img src="../../assets/home.png" class="icon"/>
            <span>拿去花</span>
          </li>
          <li>
            <img src="../../assets/order.png" class="icon"/>
            <span>借去花</span>
          </li>
          <li>
            <img src="../../assets/user.png" class="icon"/>
            <span>白金卡</span>
          </li>
        </div>

      </div>
      <!-- <div class="box iconBar">
        <div class="item-bottom">
          <li v-for="item of uIconList" :key="item.id">
            <img src="../../assets/icon/uIcon/1.png" class="icon"/>
            <span>{{item.title}}</span>
          </li>
        </div>
      </div> -->
    </div>
    <MyTabbar page="3" />
  </div>
</template>

<script>
import MyTabbar from 'common/Tabbar'
import axios from 'axios'
import {
    mapGetters,
    mapActions
  } from "vuex";
  export default {
    components: {
      MyTabbar,
    },
    data() {
      return {
        profiletitle: "我的",
        username: "登录/注册", //用户名
        resetname: "",
        mobile: "登录后享受更多特权", //电话号码
        avatar: "" //头像地址
      }
    },
    methods: {
      initData() {
        if (this.userInfo && this.userInfo.user_id) {
          this.avatar = this.userInfo.avatar;
          this.username = this.userInfo.username;
          this.mobile = this.userInfo.mobile || "登录后享受更多特权";
        } else {
          this.username = "登录/注册";
          this.mobile = "登录后享受更多特权";
        }
      },
      test() {
        location.reload()
      }
    },
    watch: {
          userInfo: function (value) {
            this.initData();
          },
        },
    mounted() {
      this.initData();
    },
    computed: {
          ...mapGetters(["userInfo"])
        },


  }
</script>

<style lang="scss" scoped>
  .box {
    border-radius: 6px;
    margin-top: px2rem(20px);
    background-color: #fff;
    padding: .2rem;
  }
  .page-user {
    background: -webkit-gradient(linear, left top, right top, from(#dae9f0), to(#f6f7f9));
    .mint-header {
      background-color: $primary;
    }
    .user-content {
      margin: 0 px2rem(15px) px2rem(150px) px2rem(15px);
      .user-info {
        margin-top: px2rem(20px);
        border-radius: 6px;
        background: -webkit-gradient(linear, left top, right top, from(#dae9f0), to(#f6f7f9));
        @include wh(100%, 3rem)
        .user-infos {
          display: block;
          display: flex;
          -webkit-box-align: center;
          -ms-flex-align: center;
          align-items: center;
          .left {
            @include wh(2rem, 2rem);
            display:inline-block;
            img {
              background: $fc;
              border-radius: 50%;
              @include wh(1.5rem, 1.5rem);
              margin: px2rem(10px);
            }
          }
          .right {
            @include wh(70%, 80px)
            display:flex;
            align-items: center;
            justify-content: space-between;
            .left1 {
              @include wh(2.5rem, 1.5rem);
              color: #212121;
              box-sizing: border-box;
              padding-top: 0.3rem;
              p {
                font-size: 0.4rem;
                color: #212121;
                margin-bottom: 0.1rem;
              }

            }
            .right1 {
              background-color: #fac107;
              @include wh(1rem, 0.3rem);
              border-radius: 20px;
              padding: 0.2rem;
              p {
                text-align: center;
                color: #fff;
              }
            }
          }
        }
        .user-other {
          li {
            display: inline-block;
            width: calc(95% / 4);
            text-align: center;
            border-right: 1px solid #f1f1f1;
            .number {
              color: #212121;
            }
            span {
              display: block;
              margin-bottom: 10px;
              color: #b2b3b4;
            }
          }
        }
      }
      .iconBar {
        .item-top {
          display: flex;
          justify-content: space-between;
          .item-fist {
            font-size: 0.3rem;
            color: #212121;
          }
          .item-last {
            font-size: 0.2rem;
            color: #b2b3b4;
          }
        }
        .item-bottom {
          display: flex;
          flex-wrap: wrap;
          align-content: flex-start;
          li {
            margin-top: px2rem(20px);
            display: inline-block;
            text-align: center;
            width: 25%;
            .icon {
              padding: 0 22px;
              margin-bottom: px2rem(20px);
              display: block;
              align-items: center;
              @include wh(.8rem, .8rem);
            }
            span {
              font-size: .35rem;
              color: #424242;
            }
          }
        }
      }
    }
  }

</style>
