'use strict';

let fetch = require("/fetch.js");

/**
   https://open.qyer.com/qyer/home/home_feed?lon=120.33552&track_deviceid=866997020222774&track_os=Android6.0.1&client_id=qyer_android&track_app_channel=xiaomi_market&client_secret=9fcaae8aefc4f9ac4915&has_tag=1&track_app_version=8.0.0&track_device_info=virgo&v=1&app_installtime=1517973291561&page=1&channel=xiaomi_market&lat=30.30476
 */

/**
 	https://open.qyer.com/qyer/home/home_feed?lon=120.335525&track_deviceid=866997020222774&track_os=Android6.0.1&client_id=qyer_android&track_app_channel=xiaomi_market&client_secret=9fcaae8aefc4f9ac4915&has_tag=1&track_app_version=8.0.0&track_device_info=virgo&v=1&app_installtime=1518225547907&page=2&channel=xiaomi_market&lat=30.304785
 */

/**
https://open.qyer.com/qyer/home/home_feed?lon=120.335339&track_deviceid=866997020222774&tag_ids=22843,285,22851,11305,10049,22847,10971&track_os=Android6.0.1&client_id=qyer_android&track_app_channel=xiaomi_market&client_secret=9fcaae8aefc4f9ac4915&has_tag=1&track_app_version=8.0.0&track_device_info=virgo&v=1&app_installtime=1518225547907&page=1&channel=xiaomi_market&lat=30.30458
 */

var URL = "https://open.qyer.com";

function fetchApi(path, params) {
	return fetch(URL, path, params);
}

/**
 * page :  number
 */
function getData(page, tagIds) {
	let params = {
		lat: '30.30476',
		lon: '120.33552',
		track_deviceid: '866997020222774',
		track_os: 'Android6.0.1',
		client_id: 'qyer_android',
		track_app_channel: 'xiaomi_market',
		client_secret: '9fcaae8aefc4f9ac4915',
		has_tag: '1',
		track_app_version: '8.0.0',
		track_device_info: 'virgo',
		v: '1',
		app_installtime: '1517973291561',
		channel: 'xiaomi_market',
		page: page,
		tag_ids: tagIds
	}
	return fetchApi('qyer/home/home_feed', params).then((res) => {
		if (res.data.status == 1) {
			return res.data;
		}
	});
}

module.exports = { getData: getData }