const config = require("../../utils/api")
Page({

  /**
   * 页面的初始数据
   */
  data: {
    hotList:[],
    videoList:[],
    isSubscribe:true
  },
  SubscribeClick(){
    this.setData({
      isSubscribe:false
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
      let self = this
      wx.login({
        success(res){
          wx.showLoading({
            title: '数据加载中',
          })
          config.ajax(config.getHot,(res)=>{
            const hots = res.data.result.itemList
            
            const hotsList = []
            hots.map(item=>{
              const hotsItem = {} 
              hotsItem['icon'] = item.data.icon 
              hotsItem.description = item.data.description 
              hotsItem.title = item.data.title.slice(1)
              hotsList.push(hotsItem)
          })
          self.setData({hotList:hotsList})
        }),
        config.ajax(config.getVideo,(res)=>{
          const videos = res.data.result.filter(item=>item.type==="videoSmallCard")
          const videoList = []
          videos.map(item=>{
            console.log(item)
            const videoItem = {} 
            videoItem.playUrl = item.data.playUrl
            videoItem.title = item.data.title 
            videoItem.page = item.data.cover.feed 
            videoItem.count = item.data.consumption.collectionCount
            videoList.push(videoItem)
          })
          self.setData({
            videoList:videoList
          })
          wx.hideLoading()
        })
      },
          
      })
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