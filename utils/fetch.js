'use strict';


/**
 * api  域名
 * path 路径
 * params 参数
 */
module.exports = function (api, path, params) {
	return new Promise(function (resolve, reject) {
		wx.request({
			url: api + '/' + path,
			data: Object.assign({}, params),
			success: resolve,
			fail: reject
		});
	})
}