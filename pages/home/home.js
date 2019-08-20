// home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    count:0,
    lists:['流行','服装','食品']
  },
  handletab(event){
    console.log(event);
  },
  handleCount(){
    this.setData({
      count:this.data.count + 1
    })
  },
  handleNum(){
    // 获取组件对象
    const my_set = this.selectComponent("#my_set");
    console.log(my_set);
    // my_set.setData({
    //   num:my_set.data.num + 10
    // })

    my_set.handleSetFn(100);
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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

  },
  btnAddFn(event){
    this.setData({
      count:this.data.count + 1
    });
    console.log(event);
    console.log(event.detail);
  }
})