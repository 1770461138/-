import request from './request'
// const baseUrl = ''
export function getTodayWeatherData(city) {
  return request({
    url:'',
    data: {
      city
    }
  })
}
export function getNextsevendayWeatherData(city) {
  return request({
    url: '',
    data: {
      city
    }
  })
}