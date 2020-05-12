const app = getApp();
Page({
  data: {
    ColorList: app.globalData.ColorList,//设置按钮颜色
    cardCur: 0,
    swiperList: [{
      id: 0,
      type: 'image',
      url: 'https://a1.qpic.cn/psc?/V10JXMix0CQf9J/UAKsoihnbkr0XNkArJGSugpRiCkIsEfB2JhbgGkC6Hok5yp0F32NfRqT6CmBpPjPiO.Px8hjWESHBxnzztoA4A!!/m&ek=1&kp=1&pt=0&bo=VQhABlUIQAYRECc!&t=5&tl=3&vuin=644960080&tm=1587715200&sce=60-4-3&rf=0-0'
    }, {
      id: 1,
      type: 'image',
        url: 'https://a1.qpic.cn/psc?/V10JXMix0CQf9J/UAKsoihnbkr0XNkArJGSusJW2okR4B1e26O.wlzDuxhEztVy0BLVZOtjh5AsnWRGJhdj1x2zeJnlrJk.l1ZiBA!!/m&ek=1&kp=1&pt=0&bo=VQhABlUIQAYRQHc!&t=5&tl=3&vuin=644960080&tm=1587715200&sce=60-4-3&rf=0-0',
    }, {
      id: 2,
      type: 'image',
        url: 'https://a1.qpic.cn/psc?/V10JXMix0CQf9J/UAKsoihnbkr0XNkArJGSuvWMw5rwrbId7*Onds0Vn7HhHTElzsH3eVQsUS36EaLScCWNJjihjPGMTnwk*h3aSQ!!/m&ek=1&kp=1&pt=0&bo=wAPQAsAD0AIRECc!&t=5&tl=3&vuin=644960080&tm=1587715200&sce=60-4-3&rf=0-0'
    }, {
      id: 3,
      type: 'image',
        url: 'https://a1.qpic.cn/psc?/V10JXMix0CQf9J/UAKsoihnbkr0XNkArJGSutXr2Ug0dyaZehoseWrij0QbvCnlLMOaonWUkWX*.ieuAzpba.8T.7Ed7SUiBOaC3g!!/m&ek=1&kp=1&pt=0&bo=VQhABlUIQAYRQHc!&t=5&tl=3&vuin=644960080&tm=1587715200&sce=60-4-3&rf=0-0'
    }],
  },

  onLoad() {
    this.towerSwiper('swiperList');
    // 初始化towerSwiper 传已有的数组名即可
  },
  DotStyle(e) {
    this.setData({
      DotStyle: e.detail.value
    })
  },
  // cardSwiper
  cardSwiper(e) {
    this.setData({
      cardCur: e.detail.current
    })
  },
  // towerSwiper
  // 初始化towerSwiper
  towerSwiper(name) {
    let list = this.data[name];
    for (let i = 0; i < list.length; i++) {
      list[i].zIndex = parseInt(list.length / 2) + 1 - Math.abs(i - parseInt(list.length / 2))
      list[i].mLeft = i - parseInt(list.length / 2)
    }
    this.setData({
      swiperList: list
    })
  },
  // towerSwiper触摸开始
  towerStart(e) {
    this.setData({
      towerStart: e.touches[0].pageX
    })
  },
  // towerSwiper计算方向
  towerMove(e) {
    this.setData({
      direction: e.touches[0].pageX - this.data.towerStart > 0 ? 'right' : 'left'
    })
  },
  // towerSwiper计算滚动
  towerEnd(e) {
    let direction = this.data.direction;
    let list = this.data.swiperList;
    if (direction == 'right') {
      let mLeft = list[0].mLeft;
      let zIndex = list[0].zIndex;
      for (let i = 1; i < list.length; i++) {
        list[i - 1].mLeft = list[i].mLeft
        list[i - 1].zIndex = list[i].zIndex
      }
      list[list.length - 1].mLeft = mLeft;
      list[list.length - 1].zIndex = zIndex;
      this.setData({
        swiperList: list
      })
    } else {
      let mLeft = list[list.length - 1].mLeft;
      let zIndex = list[list.length - 1].zIndex;
      for (let i = list.length - 1; i > 0; i--) {
        list[i].mLeft = list[i - 1].mLeft
        list[i].zIndex = list[i - 1].zIndex
      }
      list[0].mLeft = mLeft;
      list[0].zIndex = zIndex;
      this.setData({
        swiperList: list
      })
    }
  },//以上为卡片式轮播逻辑
  teacher_navigator:function(){
    wx.navigateTo({
      url: '../signin/teacher_signin/teacher_signin',
    })
  },
  student_navigator: function () {
    wx.navigateTo({
      url: '../signin/student_signin/student_signin',
    })
  },
})