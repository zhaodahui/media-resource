const util = {}
let API_SERVER_HOST = 'http://121.36.86.253'
let RES_HOST = ''

if(window.location.href.indexOf("github") != -1){
    RES_HOST = '/media-resource/dist/'
}

util.API_SERVER_HOST = API_SERVER_HOST;
util.RES_HOST = RES_HOST;

export default util