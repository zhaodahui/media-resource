// import Vue from 'vue'
import request from '@/plugins/axios.js'
import util from "@/libs/util.js";

/**
 * [resource description]
 * @author zh
 * @DateTime 2020-06-24
 * @param    {[type]} params [description]
 * media_id	string	媒体ID
    name	string	媒体名称
    url	string	媒体rtmp地址
    mime	string	媒体文件类型
    content string  文本内容
    created	string	媒体创建时间
    media_type_ids	string	媒体类别ID集合
    deleted	string	是否删除
    user_id	string	添加该媒体的用户ID
    played	string	被播放过的次数
    last_play	string	最后一次播放时间
    timelen	string	媒体时长
    http	string	媒体访问地址
    mslen	string	媒体信息ID
    bitrate	string	媒体大小
    media_type_name	string	媒体类型名称
	 * @return   {[type]} [description]
 */
function Resource(params){
	params = params?params:{};
	this.id = params.media_id;
	this.media_id = params.media_id;
	this.name = params.name;
	this.url = params.url;
	this.mime = params.mime;
	this.content = params.content;
	this.created = params.created;
	this.media_type_ids = params.media_type_ids;
	this.deleted = params.deleted;
	this.user_id = params.user_id;
	this.played = params.played;
	this.last_play = params.last_play;
	this.timelen = params.timelen;
	this.http = params.http;
	this.mslen = params.mslen;
	this.bitrate = params.bitrate;
	this.media_type_name = params.media_type_name;
}

// 获取资源详情
Resource.prototype.retrieveResourceList = function(params){
	return request({
        url: `${util.API_SERVER_HOST}/static/mock/resourceList.json`,
        method: 'get',
        params: params
      })
}

// Resource.prototype.save = function(creator, successCallback,errorCallback){
// 	var url = Config.API_SERVER_HOST + '/resources';
// 	if (this.id) {
// 		url+='/' + this.id
// 	}
// 	if (creator) {
// 		url+='?creator=' + creator
// 	}
// 	var data = {
// 		name:this.name,
// 		description:this.description,
// 		allowDownload:this.allowDownload,
// 		duration:this.duration,
// 		filePath:this.filePath,
// 		fileSize:this.fileSize,
// 		libraryId:this.libraryId,
// 		parentId:this.parentId,
// 		mimeType:this.mimeType,
// 		parentId:this.parentId,
// 		thumbnail:this.thumbnail,
// 		type:this.type,
// 		catalog1:this.catalog1,
// 		catalog2:this.catalog2,
// 		catalog3:this.catalog3,
// 		catalog4:this.catalog4,
// 		catalog5:this.catalog5,
// 		labelList:this.labelList,
// 		published:this.published
// 	}
// 	// return console.log(data)
// 	Vue.http({
// 		method:this.id?'PUT':'POST',
// 		url:url,
// 		body:data,
// 	})
// 	// Vue.http.post(url,data)
// 	.then(function(res){
// 		successCallback && successCallback(res.data);
// 	}, function(){
// 		errorCallback && errorCallback();
// 	})
// }


// Resource.prototype.remove = function(successCallback,errorCallback){
// 	var url = Config.API_SERVER_HOST + '/resources/' + this.id;
// 	Vue.http.delete(url).then(function(res){
// 		successCallback && successCallback(res.data);
// 	}, function(){
// 		errorCallback && errorCallback();
// 	})
// }

// Resource.prototype.batchUpdate = function(successCallback,errorCallback){
// 	var url = Config.API_SERVER_HOST + '/resources/batch';
// 	var data = {
// 		allowDownload:this.allowDownload,
// 		catalog1:this.catalog1,
// 		catalog2:this.catalog2,
// 		catalog3:this.catalog3,
// 		catalog4:this.catalog4,
// 		catalog5:this.catalog5,
// 		labelList:this.labelList,
// 		parentId:this.parentId,
// 		resourceIds:this.batchIdList
// 	}
// 	Vue.http.put(url,data).then(function(res){
// 		successCallback && successCallback(res.data);
// 	}, function(){
// 		errorCallback && errorCallback();
// 	})
// }

// // 资源下载记录
// Resource.prototype.downloadRecord = function(callback){
// 	var url = Config.API_SERVER_HOST + '/resources/downloadrecord/' + this.id;
// 	Vue.http.get(url).then(function(){
// 		callback && callback();
// 	}, function(){
// 		callback && callback();
// 	})
// }


export default Resource