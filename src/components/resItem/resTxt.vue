<template>
  <div class="res-txt">
    <i class="el-icon-document"></i>
    <span class="txt-preview">{{ model.content }}</span>
  </div>
</template>

<script>
export default {
  name: 'ResTxt',
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
      msg: 'Welcome'
    }
  }
}
</script>

<style lang="scss" scoped>
  .res-txt{
    .txt-preview{
      display: inline-block;
      padding: 5px 10px;
      line-height: 20px;
      width: 300px;
      background-color: #edf0f3;
      border-radius: 15px;
    }
  }
</style>
