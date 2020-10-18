// components/head/head.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    nowcity: {
      type: String,
      value: '',
    },
    nowtemperature: {
      type: Number,
      value: 0
    },
    maxtem: {
      type: Number,
      value: 0
    },
    mintem: {
      type: Number,
      value: 0
    },
    nowweather: {
      type: String,
      value: '',
    },
    airlevel: {
      type: String,
      value: '',
    },
    updatetime: {
      type: String,
      value: '',
    },
  },
  data: {

  },
  methods: {
    onTap: function(){
      this.triggerEvent('myevent',this.data.nowcity)
    },
    pushto() {
      wx.navigateTo({
        url: '/pages/search/search',
      })
    }
  }
})
