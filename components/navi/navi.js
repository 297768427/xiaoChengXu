// components/navi/navi.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
      title:{
        type:Array,
        value:[]
      }
      
     
      
  },

  /**
   * 组件的初始数据
   */
  data: {
       currentIndex:0
  },

  /**
   * 组件的方法列表
   */
  methods: {
       handleTap(event){
         this.setData({currentIndex:event.target.dataset.index});
         this.triggerEvent("goGet",{brand:event.target.dataset.brand},{})
       }
  }
})
