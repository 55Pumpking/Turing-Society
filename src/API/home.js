import request from "../utils/request";

export default {
	//获取轮播图大图列表
	reqGetCarouselBigImg() {
		return request({
			method: "GET",
			url: "/banner",
		});
	},
	//获取轮播图小图列表
	reqGetCarouselPreSale() {
		return request({
			method: "GET",
			url: "/",
		});
	},

	//获取新书上市的数据
	reqGetNewBookComtent() {
		return request({
			method: "GET",
			url: "/book/RecentlyPublishBook",
		});
	},
	//获取新书上市切换数据
	reqGetNewBookSwitch() {
		return request({
			method: "GET",
			url: "/book/RecentlyPublishBook?page=2",
		});
	},

	// 获取请求热门图书、每周特价数据
	reqGetRecommendPageText() {
		return request({
			method: "GET",
			url: "/Page/Home",
		});
	},
};
