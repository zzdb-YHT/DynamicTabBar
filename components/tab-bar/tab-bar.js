// components/tab-bar/tab-bar.js

const app = getApp()

Component({
  /**
   * 组件的属性列表
   */
  properties: {
    list: Object,
    selected: Number
  },

  /**
   * 组件的初始数据
   */
  data: {
    selected: 0,
    color: "#7A7E83",
    selectedColor: "#3cc51f",
    list: []
  },

  /**
   * 组件的方法列表
   */

  methods: {
    switchTab(e) {
      const data = e.currentTarget.dataset
      const url = data.path

      wx.switchTab({
        url: url
      })
    }
  }
 
})
