<template>
  <div class="res-img">
    <i class="el-icon-picture-outline"></i>
    <el-button type="primary" round size="mini" @click="showPreview = true">查看</el-button>

    <el-dialog
      title="预览"
      :visible.sync="showPreview"
      width="50%"
      class="upload-res-dialog">
      <div class="img-wra">
        <img :src="model.url" />
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button @click="showPreview = false">关 闭</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: 'ResImg',
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
  created() {
      console.log(this.model)
  },
  methods: {
  }
}
</script>

<style lang="scss" scoped>
    .res-img{
        .img-wra{
            text-align: center;
        }
    }
</style>
