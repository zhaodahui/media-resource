<template>
  <div class="res-item">
    <res-img v-if="model.mime == 'png' || model.mime == 'jpg'" :model="model"></res-img>
    <res-video v-if="model.mime == 'mp4'" :model="model"></res-video>
    <res-audio v-if="model.mime == 'mp3'" :model="model"></res-audio>
    <res-txt v-if="model.mime == 'txt'" :model="model"></res-txt>
  </div>
</template>

<script>
import resImg from '@/components/resItem/resImg.vue'
import resVideo from '@/components/resItem/resVideo.vue'
import resAudio from '@/components/resItem/resAudio.vue'
import resTxt from '@/components/resItem/resTxt.vue'
export default {
  name: 'ResItem',
  props: {
    model: {
        type: Object,
        default: {
            mime: "",
            url: "",
            content: ""
        }
    }
  },
  created() {
    let self = this
    if(self.model && self.model.url && self.model.url.indexOf("http") == -1){
      self.model.url = RES_HOST + self.model.url
    }
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  components: {
      resImg,
      resVideo,
      resAudio,
      resTxt
  },
  created() {
      
  },
}
</script>

<style lang="scss" scoped>
</style>
