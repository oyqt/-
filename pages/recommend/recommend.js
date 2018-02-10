// pages/recommend/recommend.js

let app = getApp();

Page({

  /**
   * 页面的初始数据
   */
	data: {
		// 图片地址
		srcs: [
			"../../images/slide1.jpg",
			"../../images/slide2.jpg",
			"../../images/slide3.jpg",
			"../../images/slide4.jpg",
			"../../images/slide5.jpg",
			"../../images/slide6.jpg",
		],
		slideY: [
			{
				image: "../../images/slide1.jpg",
				txt: '新春特别企划',
				des: "带着父母去旅行"
			},
			{
				image: "../../images/slide2.jpg",
				txt: '冬日最逍遥',
				des: "趣味北海道"
			},
			{
				image: "../../images/slide3.jpg",
				txt: '脱掉毛衣秋裤一秒入夏',
				des: "特价海岛"
			},
			{
				image: "../../images/slide4.jpg",
				txt: '花样新西兰 旺季促销',
				des: "新西兰玩法指南"
			}
		],
		recommendSection: [
			{
				src: "../../images/fine-foot.png",
				txt: '景点美食'
			},
			{
				src: "../../images/shopping-select.png",
				txt: '商城'
			},
			{
				src: "../../images/destination-select.png",
				txt: '锦囊'
			},
			{
				src: "../../images/location.png",
				txt: '地图'
			},
		],
		listCity: [
			{
				icon: "../../images/assist.png",
				txt: '佛罗伦萨'
			},
			{
				icon: "../../images/assist.png",
				txt: '巴厘岛'
			},
			{
				icon: "../../images/assist.png",
				txt: '墨尔本'
			},
		],
		swiperIndexCur: 0,
		// 数据接口
		data: {},
		// 广告
		extra: {},
		duration: 1000,
		interval: 3000,
		tabCurrentIndex: 0,
		// 列表
		feedData: {},
		//is tab scroll-view scroll top?
		isNavScrollTop: false,
		// 分页
		page: 1,
		loadingTxt: '加载中...',
		tagIds: '',
	},

  /**
   * 生命周期函数--监听页面加载
   */
	onLoad: function (options) {
		// 请求数据
		let that = this;
		app.recommend.getData(this.data.page).then((res) => {
			that.setData({
				data: res.data,
				extra: res.extra,
				feedData: res.data.feed,
			});
		});
	},

	/**
	 * slide切换
	 */
	swiperChange: function (e) {
		this.setData({
			swiperIndexCur: e.detail.current
		})
	},
	/**
	 * 点击nav item
	 */
	navItemTap: function (e) {
		let index = e.currentTarget.dataset.index;
		let tagIds = e.currentTarget.dataset.ids;
		this.setData({
			tabCurrentIndex: index,
		});

		// 请求数据
		let that = this;
		app.recommend.getData(1, tagIds).then((res) => {
			that.data.feedData.entry = res.data.feed.entry;
			that.setData({
				page: 1,
				feedData: that.data.feedData,
				tagIds: tagIds
			});
		});

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
		// 请求数据
		let that = this;
		let page = that.data.page + 1;
		app.recommend.getData(page, that.data.tagIds).then((res) => {
			let entrys = that.data.feedData.entry.concat(res.data.feed.entry);
			that.data.feedData.entry = entrys;
			that.setData({
				feedData: that.data.feedData,
				page: page,
			});
		}).catch((error) => {
			that.setData({
				loadingTxt: '加载失败啦~'
			})
		});
	},

  /**
   * 用户点击右上角分享
   */
	onShareAppMessage: function () {

	}
})