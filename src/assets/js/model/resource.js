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

Resource.prototype.retrieveResourceList = function(params){
	return request({
		url: `${util.RES_HOST}/static/mock/resourceList.json`,
		// url: `${util.API_SERVER_HOST}/bmd/jsonApi.php?dist_id=1&school_id=1& _test=1&api=getMediaInfoList`,
        method: 'get',
        params: params
      })
}

export default Resource