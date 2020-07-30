// import Vue from 'vue'
import request from '@/plugins/axios.js'
import util from "@/libs/util.js";

function Category(params){
	params = params?params:{};
	this.id = params.media_type_id;
	this.media_type_id = params.media_type_id;
	this.name = params.name;
	this.note = params.note;
	this.media_count = params.media_count;
}

Category.prototype.retrieveCategoryList = function(params){
	return request({
        url: `${util.RES_HOST}/static/mock/categoryList.json`,
        // url: `${util.API_SERVER_HOST}/bmd/jsonApi.php?dist_id=1&school_id=1& _test=1&api=getMediaTypeList`,
        method: 'get',
        params: params
      })
}

export default Category