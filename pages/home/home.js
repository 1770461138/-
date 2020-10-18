// pages/home.js
import {
  getTodayWeatherData,
  getNextsevendayWeatherData
} from '../../network/home.js'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    Month: 0,
    weatherdata: {},//天气数据
    nowcity:'',
    nowtemperature: 0,
    maxtem: 0,
    mintem: 0,
    nowweather: '',
    airlevel: '',//空气质量
    updatetime: '',
    weather_24hour: [],//24小时逐时天气
    weather_7day: [],//未来七天的天气
    airquality: {},//空气质量指标
    humidity: '',//湿度
    wind: '',//风向
    wind_speed: '',//风
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.month()
    this._getTodayWeatherData(options.city)
    this._getNextsevendaysWeatherData(options.city)
    // this.setData({
    //   city: options.city
    // })
  },
  month() {//获取月份
    this.setData({
      Month: new Date().getMonth() + 1
    })
  },
  _getTodayWeatherData(search_city) {//网络请求：获取当日实时天气
    let city = ''
    if(search_city == null) {
      city = '广州'
    }else {city = search_city}
    getTodayWeatherData(city).then(res=>{
      console.log(res);
      const data = res.data
      //去掉百分号
      const humidity_temp = data.humidity.substr(0,data.humidity.length-1)
      this.setData({
        nowcity: data.city,
        nowtemperature: data.tem,
        maxtem: data.tem1,
        mintem: data.tem2,
        nowweather: data.wea,
        weatherdata: data,
        airlevel: data.air_level,
        updatetime: data.update_time,
        weather_24hour:data.hours,
        airquality: data.aqi,
        humidity: humidity_temp,
        wind: data.win,
        wind_speed: data.win_speed
      })
    })
  },
  _getNextsevendaysWeatherData(city) {//获取未来七天的天气
    // const city = '湛江'
    getNextsevendayWeatherData(city).then(res=>{
      console.log(res);
      const data = res.data
      this.setData({
        weather_7day: data.data
      })
    })
  },
  onMyEvent: function(e){
    console.log(e);
     // 自定义组件触发事件时提供的detail对象
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})