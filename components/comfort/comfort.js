// components/comfort/comfort.js
Component({
  /**
   * 组件的属性列表
   */
  show: function() {
    this.clear()
  },
  properties: {
    humidity: {
      type: String,
      value: '0'
    }
  },
  data: {
    values: {
      type: Number,
      value: 0
    }
  },
  
  methods: {
    clear() {
      console.log(this.values);
      
    }
  }
})
