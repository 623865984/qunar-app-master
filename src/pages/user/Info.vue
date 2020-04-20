<template>
  <div class="userInfo-page">
    <mt-header
      fixed
      title="账户信息">
      <div
        slot="left"
        @click="$router.go(-1)">
        <mt-button icon="back"/>
      </div>
    </mt-header>
    <section class="profile-info">
      <section
        class="headportrait"
        style="margin-top: 0;">
        <!-- <input type="file" class="profileinfopanel-upload" @change="uploadAvatar"> -->
        <h2>头像</h2>
        <div class="headportrait-div">
          <img
            v-if="userInfo&&userInfo.user_id&&userInfo.avatar"
            :src="userInfo.avatar"
            class="headportrait-div-top">
          <img
            v-else
            class="headportrait-div-top"
            src="https://qcommons.qunar.com/headshot/headshotsById/315682540.png?l&ssl=true&_=1570592073630">
          <span class="headportrait-div-bottom">
            <i class="iconfont qn-incon-zzarrow"></i>
          </span>
        </div>
      </section>
      <router-link
        to="/user/userName"
        class="info-router">
        <section class="headportrait headportraitwo">
          <h2>用户名</h2>
          <div class="headportrait-div">
            <p>{{ userInfo.username }}</p>
            <span class="headportrait-div-bottom">
              <i class="iconfont qn-incon-zzarrow"></i>
            </span>
          </div>
        </section>
      </router-link>
      <section class="bind-phone">
        账号绑定
      </section>
      <section class="info-router">
        <section class="headportrait headportraitwo headportraithree">
          <h2>
            <i class="iconfont qn-incon-zzphone-o"></i>
            手机
          </h2>
          <div class="headportrait-div">
            <p v-if="userInfo.mobile">{{ userInfo.mobile.replace(/(\d{3})\d{4}(\d{4})/, '$1****$2') }}</p>
            <span class="headportrait-div-bottom">
              <i class="iconfont qn-incon-zzarrow"></i>
            </span>
          </div>
        </section>
      </section>
      <section class="bind-phone">
        安全设置
      </section>
      <router-link
        to="/user/forget"
        class="info-router">
        <section class="headportrait headportraitwo headportraithree">
          <h2>登录密码</h2>
          <div class="headportrait-div">
            <p class="blue">修改</p>
            <span class="headportrait-div-bottom">
              <i class="iconfont qn-incon-zzarrow"></i>
            </span>
          </div>
        </section>
      </router-link>
      <section
        class="exitlogin"
        @click="outlogin()">退出登录</section>
    </section>
  </div>
</template>

<script>
  import {
    mapGetters,
    mapActions
  } from "vuex";

  export default {
    head: {
      title: "账户信息"
    },
    computed: {
      ...mapGetters(["userInfo"])
    },
    methods: {
      ...mapActions(["outLogin"]),
      outlogin() {
        this.outLogin();
        this.$router.go(-1);
      }
    }
  };

</script>

<style lang="scss">
html{font-size:1.5rem !important;}
  .userInfo-page {
    padding: px2rem(82px) 0 0 0;
    background-color: #f5f5f5;
    height: 100vh;
    .rating_page {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background-color: #f2f2f2;
      z-index: 202;
      padding-top: 1.95rem;

      p,
      span {
        font-family: Helvetica Neue, Tahoma, Arial;
      }
    }

    .profile-info {
      @include wh(100%, 3.1rem);

      .profileinfopanel-upload {
        display: block;
        position: absolute;
        opacity: 0;
        top: 2.35rem;
        left: 0;
        @include wh(100%, 3.1rem);
      }

      .headportrait {
        margin-top: 0.4rem;
        padding: 0.5rem 0.4rem;
        @include fj(space-between);
        align-items: center;
        border-top: 1px solid #ddd;
        background: #fff;

        h2 {
          @include sc(0.6rem, #333);
          font-weight: 500;
          display: flex;
          align-items: center;

          svg {
            width: px2rem(32px);
            height: px2rem(32px);
            margin-right: 5px;
          }
        }

        .headportrait-div {
          display: flex;
          align-items: center;
          span {
            display: inline-block;

            svg {
              @include wh(100%, 100%);
            }
          }

          .headportrait-div-top {
            @include wh(2.5rem, 2.5rem);
            border-radius: 50%;
            vertical-align: middle;
            margin-right: 5px;

          }

          .headportrait-div-bottom {
            @include wh(0.66667rem, 1.4rem);
            display: flex;
            align-items: center;
            top: 1rem;
            color: rgb(216, 216, 216);
          }
        }
      }

      .headportraitwo {
        margin-top: 0;
        padding: 0.3rem 0.4rem;

        .headportrait-div {
          @include fj(left);

          p {
            text-align: left;
            line-height: 1.39rem;
            @include sc(0.7rem, #666);
            margin-right: 0.2rem;
            font-family: Arial;
          }

          .blue {
            color: #0097ff;
          }

          .headportrait-div-bottom {
            top: 0;
          }
        }
      }

      .headportraithree {
        border-bottom: 1px solid #ddd;
      }

      .bind-phone {
        padding: 0.4rem 0.4rem;
        @include sc(0.5rem, #666);
      }

      .exitlogin {
        width: 100%;
        margin: 1.3rem auto 0;
        line-height: px2rem(100px);
        border-radius: 4px;
        text-align: center;
        background: #fff;
        @include sc(0.7rem, #ff5339);
      }

      .exitlogin:active {
        opacity: 0.8;
        background: #c1c1c1;
      }
    }

    .info-router {
      display: block;
    }

    .coverpart {
      @include wh(100%, 100%);
      @include allcover;

      .cover-background {
        @include wh(100%, 100%);
        @include allcover;
        background: #000;
        z-index: 100;
        opacity: 0.2;
      }

      .cover-content {
        width: 94%;
        background: $fc;
        padding: 17px;
        position: absolute;
        top: 20%;
        left: 3%;
        z-index: 1000;
        @include borderRadius(5px);

        .sa-icon {
          @include wh(90px, 90px);
          border: 4px solid #f8bb86;
          @include borderRadius(50%);
          margin: 20px auto;
          position: relative;

          .sa-body {
            @include wh(5px, 47px);
            @include borderRadius(2px);
            background: #f8bb86;
            @include cl;
            top: 10px;
          }

          .sa-dot {
            @include wh(7px, 7px);
            @include borderRadius(50%);
            background: #f8bb86;
            @include cl;
            bottom: 10px;
          }
        }

        h2 {
          width: 100%;
          text-align: center;
          @include sc(30px, #575757);
          font-weight: 500;
          margin: 25px 0;
        }

        .sa-botton {
          width: 100%;
          text-align: center;

          button {
            display: inline-block;
            padding: 0.4rem 1rem;
            border-radius: 4px;
            @include sc(0.6rem, $fc);
            letter-spacing: 1px;
            margin-top: 26px;
          }

          .waiting {
            background: #c1c1c1;
            margin-right: 0.4rem;
          }

          .quitlogin {
            background: rgb(221, 107, 85);
          }
        }
      }
    }
  }

</style>
