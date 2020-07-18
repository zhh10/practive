// https://api.apiopen.top/videoRecmmend?id=127930
const getVideo = 'https://api.apiopen.top/videoRecommend?id=127930'
const getHot = 'https://api.apiopen.top/videoCategory'

function ajax(url,successCallback,failCallback){
  wx.request({
    url:url,
    success(res){
      successCallback(res)
    },
    fail(res){
      failCallback(res)
    }
  })
}

module.exports = {
  getVideo,
  getHot,
  ajax
}