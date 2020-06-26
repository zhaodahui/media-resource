const util = {}
let API_SERVER_HOST = ''
let RES_HOST = ''

if(window.location.href.indexOf("github") != -1){
    API_SERVER_HOST = '/media-resource/dist/'
    RES_HOST = '/media-resource/dist/'
}

util.API_SERVER_HOST = API_SERVER_HOST;

export default util