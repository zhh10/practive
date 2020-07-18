module.exports = Behavior({
  behaviors:[],
  properties:{
    myBehaviorProperty:{
      type:String
    }
  },
  data:{
    myBehaviorData:{}
  },
  methods:{
    myBehaviorMethod:function(){
      console.log("my-behavior.js")
    }
  }
})