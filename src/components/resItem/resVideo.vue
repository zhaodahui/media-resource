<template>
  <div class="res-video">
    <i class="el-icon-video-camera"></i>
    <el-button type="primary" round size="mini" @click="showPreview = true">预览</el-button>
    
    <el-dialog
      title="预览"
      :visible.sync="showPreview"
      width="50%"
      class="upload-res-dialog">
      <div class="video-wra">
        <video :src="model.url" controls></video>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button @click="showPreview = false">关 闭</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: 'ResVideo',
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
  data () {
    return {
      showPreview: false
    }
  },
  methods: {
      previewRes () {

      }
  }
}
</script>

<style lang="scss" scoped>
  .res-video{
    .video-wra{
      text-align: center;
    }
  }
</style>
