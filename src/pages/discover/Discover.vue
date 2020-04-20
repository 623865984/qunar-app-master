<template>
  <div class="page-disc">
    <mt-header title="发现">
    </mt-header>
    <div class="disc-content">

    </div>
    <MyTabbar page="2" />
  </div>
</template>

<script>
import MyTabbar from 'common/Tabbar'
import axios from 'axios'
  export default {
    components: {
      MyTabbar,
    },
    methods: {
      getHomeInfo () {
        axios.get('www/common/getHomeData')
          .then(this.getHomeInfoSuccess)
      },
      getHomeInfoSuccess (res) {
        res = res.data
        console.log(res);
      }
    },
    mounted () {
      this.getHomeInfo()
    },
  }
</script>

<style lang="scss" scoped>
  @import "../../assets/styles/mixins";
  .page-disc {

    .mint-header {
      background-color: $primary;
    }
  }

</style>
