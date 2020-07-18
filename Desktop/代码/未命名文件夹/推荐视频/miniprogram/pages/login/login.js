const db = wx.cloud.database({
  env:"test-z8m05"
})
Page({
  /**
   * 页面的初始数据
   */
  data: {
    isLogin:false,
    account:"",
    pwd:""
  },
  switchBtn(){
    this.setData({
      isLogin:!this.data.isLogin
    })
  },
  inputAccount(e){
    this.setData({
      account:e.detail.value
    })
  },
  inputPwd(e){
    this.setData({
      pwd:e.detail.value
    })
  },
  Regist(){
    let self = this 
    let accountresult = this.validateAccount(this.data.account)
    if(!this.showToastAccount(accountresult.code)){
      return ;
    }
    let pwdresult = this.validatePwd(this.data.pwd)
    if(!this.showToastPwd(pwdresult.code)){
      return ;
    }
    db.collection("users").where({
      account:this.data.account
    }).get({
      success(res){
        if(res.data.length === 0){
          db.collection("users").add({
            data:{account:self.data.account,
            pwd:self.data.pwd
          },success(){
            wx.showToast({
              title: '注册成功！',
              icon:'success',
              duration:1000,
              success(){
                setTimeout(()=>{
                  self.setData({
                    account:""
                  })
                  self.setData({
                    pwd:""
                  })
                  self.setData({
                    isLogin:!self.data.isLogin
                  })
                },1000)
              }
            })
          }
          })
        }else if(res.data.length > 0){
          wx.showToast({
            title: '账号已被注册',
            icon:'none',
            duration:1000,
            success(){
              self.setData({
                account:""
              },1000)
            }
          })
        }
      },
      fail(err){
        wx.showToast({
          title: '发生未知错误',
          icon:'none',
          duration:1000
        })
      }
    })
  },
  // 注册验证账户
  validateAccount(account){
    if(account.length === 0){
      return {
        code:0,
        message:"请输入账号"
      }
    }else if(account.length < 11){
      return {
        code:1,
        message:"账号长度不能小于11"
      }
    }else{
      return {
        code:200
      }
    }
  },
  showToastAccount(code){
    if(code === 0){
      wx.showToast({
        title: '请输入账号',
        icon:'none',
        duration:1000
      })
      return false;
    }
    if(code === 1){
      wx.showToast({
        title: '账号长度不能小于11',
        icon:'none',
        duration:1000,
      })
      return false;
    }
    return true; 
  },
  // 注册验证密码
  validatePwd(pwd){
    if(this.data.pwd.length === 0){
      return {
        code:0,
        message:"密码不能为空"
      }
    }else if(this.data.pwd.length < 6){
      return {
        code:1,
        message:"密码过于简单"
      }
    }else{
      return {
        code:200
      }
    }
  },
  showToastPwd(code){
    if(code === 0){
      wx.showToast({
        title: '请输入密码',
        icon:'none',
        duration:1000,
      })
      return false;
    }
    if(code === 1){
      wx.showToast({
        title: '密码过于简单',
        icon:'none',
        duration:1000,
      })
      return false;
    }
    return true ;
  },
  Login(){
    let self = this 
    let accountresult = this.validateAccount(this.data.account)
    if(!this.showToastAccount(accountresult.code)){
      return ;
    }
    let pwdresult = this.validatePwd(this.data.pwd) 
    if(!this.showToastPwd(pwdresult.code)){
      return ;
    }
    db.collection("users").where({
      account:self.data.account,
      pwd:self.data.pwd
    }).get({
      success(res){
        if(res.data.length === 1){
          wx.showToast({
            title: '登录成功',
            icon:'success',
            duration:1000,
            success(){
              setTimeout(()=>{
                wx.navigateTo({
                  url: '/pages/user/user',
                })
              },1000)  
              self.setData({
                account:""
              })
              self.setData({
                pwd:""
              })            
            }
          })
        }else if(res.data.length === 0){
          wx.showToast({
            title: '账号或者密码输入错误',
            icon:'none',
            duration:1000,
            success(){
              self.setData({
                account:""
              })
              self.setData({
                pwd:""
              })
            }
          })
        }
      }
    })


  }
})