<template>
 <div class="header">
  <div class="header-left">
    <span class="iconfont qn-incon-zzarrow-left"></span>
  </div>
  <div class="iconfont header-input">
    <span class="iconfont qn-incon-zzsearch"></span>
    <input class="header-input-in" placeholder="输入城市/景点/游玩主题" />
  </div>
  <router-link to='/city/in'>
    <div class="header-right">
      {{this.city}}
      <span class="iconfont qn-incon-zzarrow-down"></span>
    </div>
  </router-link>
 </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'HomeHeader',
  computed: {
    ...mapState(['city'])
  }
}
</script>

<style lang="scss" scoped>
@import "~styles/variable.scss";
.header {
  display: flex;
  line-height: .86rem;
  background: $bgColor;
  color: #fff;
  width: 100vw;
  position: fixed;
  z-index: 100;
  top: 0;
  .header-left {
    width: .64rem;
    float: left;
    .qn-incon-zzarrow-left {
      margin-left: .12rem;
      text-align: center;
      font-size: .4rem;
    }
  }
  .header-input {
    display: inline-block;
    position: relative;
    flex: 1;
    height:.64rem;
    line-height: .64rem;
    margin-top: .12rem;
    margin-left: .2rem;
    padding-left: .5rem;
    border-radius: .1rem;
    background: #fff;
    .qn-incon-zzsearch {
      position: absolute;
      left: .1rem;
      color: #aaa;
    }
    .header-input-in {
      width: 100%;
      font-size: .26rem;
      color: #aaa;
      font-family: "微软雅黑";
    }
  }
  .header-right{
    min-width: 1.04rem;
    padding: 0 .1rem;
    float: right;
    text-align: center;
    color: #fff;
    .arrow-icon{
      margin-left:-.04rem;
      font-size: .23rem;
    }
  }
}
</style>
