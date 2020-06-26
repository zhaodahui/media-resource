<template>
  <div class="res-audio">
    <i class="el-icon-headset"></i>
    <audio :src="model.url" controls controlsList="nodownload" ></audio>
  </div>
</template>

<script>
export default {
  name: 'ResAudio',
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
      
    }
  }
}
</script>

<style lang="scss" scoped>
  .res-audio{
    audio{
      height: 32px;
      outline:none;
      &:active,
      &:focus{
        border: none;
      }
    }
  }
</style>
