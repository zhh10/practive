// components/videoGroup/videoGroup.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    videoList:Array,
  },

  /**
   * 组件的初始数据
   */
  data: {
    playIndex:null
  },

  /**
   * 组件的方法列表
   */
  methods: {
    handlePlay(e){
      const self = this 
      if(this.data.playIndex === null){
          // 是否有playIndex 若没有 说明是第一次
        this.setData({
          playIndex:e.currentTarget.dataset.index
        })
        const myvideo = wx.createVideoContext(`myvideo${self.data.playIndex}`,self)
        myvideo.play()
      }else{
        console.log(self.data.playIndex)
        var myvideo = wx.createVideoContext(`myvideo${self.data.playIndex}`,self)
        myvideo.stop()
        this.setData({
          playIndex:e.currentTarget.dataset.index
        })
        console.log(self.data.playIndex)
        var myvideo = wx.createVideoContext(`myvideo${self.data.playIndex}`,self)
        myvideo.play()
        console.log(myvideo)

      }
      
      
      
      
    }
  }
})
