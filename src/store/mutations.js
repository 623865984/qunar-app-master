export default {
  changeCity (state, city) {
    state.city = city
    try {
      localStorage.city = city
    } catch (e) {}
  },
  changeTime (state, time) {
    state.time = time
    try {
      localStorage.setItem('time', JSON.stringify(time));
      // console.log(JSON.parse(localStorage.getItem('time')))
    } catch (e) {}
  }
}
