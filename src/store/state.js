let defaultCity = '南宁'
let defaultTime = []
try {
  if (localStorage.city) {
    defaultCity = localStorage.city
  }
} catch (e) {}

try {
  if (JSON.parse(localStorage.getItem('time'))) {
    defaultTime = JSON.parse(localStorage.getItem('time'))
    // defaultTime = ['2019/10/1','2019/10/3']
    // console.log(defaultTime)
  }
} catch (e) {}

export default {
  city: defaultCity || '南宁',
  time: defaultTime || []
}
