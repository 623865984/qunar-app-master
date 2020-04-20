<template>
  <div class="Calendar-page">
    <Calendar
      v-on:choseDay="clickDay"
      :agoDayHide=today
      :markDate="this.nowTime">
    </Calendar>
  </div>
</template>

<script>
  import Calendar from 'vue-calendar-component'
  import Tool from "../assets/utils/tool";
  import { mapMutations,
           mapState} from 'vuex'
  export default {
   name: 'MyCalendar',
   components: {
     Calendar,
   },
   data() {
     return {
       arr: [],
       today:Math.round(new Date() / 1000)-86400+'', //今天的时间戳转化为string类型
     }
   },
   methods: {
    ...mapMutations(['changeTime']),
    clickDay(data) {
      // console.log(this.today); //选中某天
      this.arr.push(data)
      if(this.arr.length==2){
        this.setTime()
        // console.log(this.nowTime)
        this.$emit("popupVisible4",false)
      }
      else if (this.arr.length>2) {
        this.arr = []
        this.changeTime(this.arr)
        this.arr.push(data)
      }
     },
    setTime() {
      //排序
      this.arr.sort()
      //计算两个日期间的天数
      var time1 = new Date(this.arr[0]).getTime()
      var time2 = new Date(this.arr[1]).getTime()
      var time = time1
      var iDays = parseInt(Math.abs(time2 - time1) /1000/60/60/24)
      for (var i=0;i<iDays-1;i++) {
        time = time + 86400*1000
        var FormData = this.fomrtime(time)
        console.log(FormData)
        this.arr.push(FormData)
      }
      this.arr.sort()
      console.log(this.arr)
      this.changeTime(this.arr)
    },
    fomrtime(time) {
      var date = new Date(time);
      var Y = date.getFullYear() + '/'
      var M = (date.getMonth() + 1) + '/'
      var D = date.getDate()
      return Y + M + D
    }
   },
   mounted() {
    // Tool.removeStore('time')
   },
   computed: {
    ...mapState({
       nowTime: 'time',
     }),
    // cc: function() {
    //   let allTime = this.nowTime
    //   console.
    //   return allTime
    // }
   }
  }
</script>

<style lang="scss" >
  .wh_container {
    .wh_content_all {
      background-color: #f7f7f7;
      .wh_top_changge {
           background-color: #fff;
           li {
             color: #212121;
             font-weight: 700;
           }
           .wh_jiantou1{
             border-top: 2px solid #212121;
             border-left: 2px solid #212121;
           }
           .wh_jiantou2{
             border-top: 2px solid #212121;
             border-right: 2px solid #212121;
           }

        }
         .wh_content {
           background-color: #f7f7f7;
             .wh_content_item {
               color: #212121;
               height: 0.9rem;
               .wh_isToday {
                 border-radius: unset;
               }
               .wh_chose_day {
                 background: #0ac4dd;
                 // border-radius: unset;
               }
               .wh_isMark {
                 background:#00BCD4;
                 border-radius: unset;
               }
             }
         }
    }
  }

</style>
