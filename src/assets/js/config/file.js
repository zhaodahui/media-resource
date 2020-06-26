const file = {
	docExts: 'doc,docx,xls,xlsx,ppt,pptx,pdf,txt',
	imgExts: 'png,jpg,gif,jpeg,bmp',
	videoExts: 'flv,mp4,avi,wmv,rm,rmvb,mpeg,mov,mpg',
	audioExts: 'mp3,wav,wma',
	formatSeconds: function (second) {
	  var hh = parseInt(second / 3600);
	  if (hh < 10) hh = "0" + hh;
	  var mm = parseInt((second - hh * 3600) / 60);
	  if (mm < 10) mm = "0" + mm;
	  var ss = parseInt((second - hh * 3600) % 60);
	  if (ss < 10) ss = "0" + ss;
	  var result = hh + ":" + mm + ":" + ss;

	  if (second >= 0) {
	    return result;
	  } else {
	    return "NaN";
	  }
	},
	getFileSize: function(input) {
		if (input < 1024) {
			input = input + "B";
		} else if (input < 1024 * 1024) {
			input = (input / 1024).toFixed(1) + "KB";
		} else if (input < 1024 * 1024 * 1024) {
			input = (input / (1024 * 1024)).toFixed(1) + "MB";
		} else {
			input = (input / (1024 * 1024 * 1024)).toFixed(1) + "GB";
		}
		return input;
	},
	getFileType: function(ext) {
		var mime_types = [{
			title: 'document',
			type: 3,
			extensions: this.docExts
		}, {
			title: 'image',
			type: 4,
			extensions: this.imgExts
		}, {
			title: 'video',
			type: 1,
			extensions: this.videoExts
		}, {
			title: 'audio',
			type: 2,
			extensions: this.audioExts
		}]
		ext = ext.toLowerCase();
		for (var i = 0; i < mime_types.length; i++) {
			var extArr = mime_types[i].extensions.split(",");
			for (var j = 0; j < extArr.length; j++) {
				if (extArr[j] == ext) {
					return mime_types[i].type;
				}
			}
		}
		return 11;
	},
	map: {
		"folder": 0,
		"video": 1,
		"audio": 2,
		"document": 3,
		"image": 4,
		"richtext": 5,
		"link": 6,
		"courseware": 7,
		"question": 8,
		"exam": 9,
		"virtual": 10,
		"0": "文件夹",
		"1": "视频",
		"2": "音频",
		"3": "文档",
		"4": "图片",
		"5": "图文",
		"6": "链接",
		"7": "课件",
		"8": "试题",
		"9": "试卷",
		"10": "虚拟仿真"
	},
	getFileTypeIcon: function (type, ext, style) {
		var className = "";
		// style 图标样式 默认不传
		if(style == 1){
			if (type == 0) {
				className = "icon-fujianleixingwenjianjia1";
			} else if (type == 1) {
				className = "icon-sizhengshipin";
			} else if (type == 2) {
				className = "icon-sizhengyinpin";
			} else if (type == 3) {
				if (ext && ext.indexOf('doc') > -1) {
					className = 'icon-sizhengword icon-doc';
				} else if (ext && ext.indexOf('ppt') > -1) {
					className = 'icon-sizhengppt icon-ppt';
				} else if (ext && ext.indexOf('pdf') > -1) {
					className = 'icon-sizhengpdf icon-pdf';
				} else if (ext && ext.indexOf('xls') > -1) {
					className = 'icon-sizhengexcel icon-xls';
				} else if (ext && ext.indexOf('txt') > -1) {
					className = 'icon-sizhengtxt icon-txt';
				} else {
					className = 'icon-sizhengwendang';
				}
			} else if (type == 4) {
				className = "icon-sizhengtupian";
			} else if (type == 5) {
				className = "icon-sizhengtuwen";
			} else if (type == 6) {
				className = "icon-sizhengwangye";
			} else if (type == 7) {
				className = "icon-sizhengkejian";
			} else if (type == 8) {
				className = "icon-sizhengqita";
			} else if (type == 9) {
				className = "icon-sizhengqita";
			} else if (type == 10) {
				className = "icon-sizhengvr";
			} else if (type == 11) {
				className = "icon-sizhengqita";
			}
		}else{
			if (type == 0) {
				className = "icon-fujianleixingwenjianjia1";
			} else if (type == 1) {
				className = "icon-fujianleixingshipin";
			} else if (type == 2) {
				className = "icon-fujianleixingyinpin";
			} else if (type == 3) {
				if (ext && ext.indexOf('doc') > -1) {
					className = 'icon-fujianleixingword icon-doc';
				} else if (ext && ext.indexOf('ppt') > -1) {
					className = 'icon-fujianleixingppt icon-ppt';
				} else if (ext && ext.indexOf('pdf') > -1) {
					className = 'icon-fujianleixingpdf icon-pdf';
				} else if (ext && ext.indexOf('xls') > -1) {
					className = 'icon-fujianleixingexcel icon-xls';
				} else if (ext && ext.indexOf('txt') > -1) {
					className = 'icon-fujianleixingtxt icon-txt';
				} else {
					className = 'icon-fujianleixingwendang';
				}
			} else if (type == 4) {
				className = "icon-fujianleixingtupian";
			} else if (type == 5) {
				className = "icon-fujianleixingtuwen";
			} else if (type == 6) {
				className = "icon-fujianleixinghtml";
			} else if (type == 7) {
				className = "icon-fujiankejian";
			} else if (type == 8) {
				className = "icon-fujianleixingqita1";
			} else if (type == 9) {
				className = "icon-fujianleixingqita1";
			} else if (type == 10) {
				className = "icon-fujianvr";
			} else if (type == 11) {
				className = "icon-fujianleixingqita1";
			}
		}
		return "res-icon-" + type + " iconfont " + className;
	},
	getFileTypeIconBg: function (type, ext) {
		var className = "";
		if (type == 3) {
			if (ext && ext.indexOf('doc') > -1) {
				className = 'icon-doc';
			} else if (ext && ext.indexOf('ppt') > -1) {
				className = 'icon-ppt';
			} else if (ext && ext.indexOf('pdf') > -1) {
				className = 'icon-pdf';
			} else if (ext && ext.indexOf('xls') > -1) {
				className = 'icon-xls';
			} else if (ext && ext.indexOf('txt') > -1) {
				className = 'icon-txt';
			}
		}
		return "res-iconbg-" + type + " " + className;
	}
}
export default file