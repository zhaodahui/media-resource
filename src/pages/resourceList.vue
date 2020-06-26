<template>
  <el-container class="resource-list-page">
    <el-header height="72px">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item>业务管理</el-breadcrumb-item>
        <el-breadcrumb-item>媒体资源</el-breadcrumb-item>
      </el-breadcrumb>
      <div class="title">{{ title }}</div>
    </el-header>
    <el-container>
      <el-aside width="300px">
        <el-menu>
          <el-menu-item class="menu-item" 
            v-for="(item, index) in catList" 
            :key="item.id"
            :class="{actv: item.id == curCatId}">
            <div v-if="!item.editing" @click="changeCatItem(item.id)">{{ item.name }}</div>
            <div v-if="item.editing" class="el-input">
              <input class="el-input__inner edit-name" v-model="item.editName" placeholder="请输入类别名称" />
            </div>
            <div class="opt-wra" v-show="item.id != -1">
              <span class="el-icon-edit opt-ico opt-edit" v-if="!item.editing" @click="startEditCat(item)"></span>
              <span class="el-icon-delete opt-ico opt-edit" v-if="!item.editing" @click="deleteCat(index)"></span>
              <span class="el-icon-check opt-ico opt-confirm" v-show="item.editing" @click="editCat(item)"></span>
              <span class="el-icon-close opt-ico opt-delete" v-show="item.editing" @click="cancelEditCat(item, index)"></span>
            </div>
          </el-menu-item>
        </el-menu>
        <div class="add-cat">
          <el-button type="primary" plain @click="addCat()">添加类别</el-button>
        </div>
      </el-aside>
      <el-main>
        <div>
          <el-button type="primary" size="medium" @click="openEditRes()">添加资源</el-button>
          <el-pagination
            class="select-pagesize"
            :page-sizes="[10, 20, 30]"
            :page-size="10"
            layout="sizes"
            :total="resListTotal">
          </el-pagination>
        </div>
        <el-table :data="resList">
          <el-table-column type="selection" width="30">
          </el-table-column>
          <el-table-column prop="name" label="名称">
          </el-table-column>
          <el-table-column label="内容" width="350">
            <template slot-scope="scope">
              <res-item :model="scope.row"></res-item>
            </template>
          </el-table-column>
          <el-table-column label="大小/时长">
            <template slot-scope="scope">
              <span>{{ scope.row.timelen ? getDuration(scope.row.timelen) : getSize(scope.row.bitrate) }}</span>
            </template>
          </el-table-column>
          <el-table-column label="操作">
            <template slot-scope="scope">
              <el-button type="text" @click="openEditRes(scope.row)">编辑</el-button>
              <el-button type="text">下载</el-button>
              <el-button type="text" @click="deleteRes(scope.row, scope.index)">删除</el-button>
            </template>
          </el-table-column>
        </el-table>
        
        <div class="pagination-wrapper" v-show="resListTotal && resList.length">
          <el-pagination
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :current-page.sync="resListPn"
            :page-size="100"
            layout="prev, pager, next, jumper"
            :total="1000">
          </el-pagination>
        </div>
      </el-main>
    </el-container>

    <!-- 上传资源弹框 -->
    <el-dialog
      :title="curRes.id ? '编辑资源' : '添加资源'"
      :visible.sync="uploadDialogVisible"
      width="50%"
      :before-close="closeUploadDialog"
      class="upload-res-dialog">
      <el-form>
        <el-form-item>
          <el-input v-model="curRes.name" placeholder="请输入资源名称"></el-input>
        </el-form-item>
        <el-upload
          class="upload-demo"
          drag
          action="https://jsonplaceholder.typicode.com/posts/"
          accept="image/png, image/jpg, .txt, .mp3, .mp4"
          :limit="1"
          :file-list="fileList">
          <i class="el-icon-upload"></i>
          <div class="el-upload__text">
            点击或将文件拖到这里
            <div class="el-upload__tip" slot="tip">文件扩展名：.txt .jpg .png .mp3 .mp4</div>
          </div>
        </el-upload>
        <el-dropdown placement="bottom-start" @command="chooseCat">
          <span class="el-dropdown-link">
            {{ resCatObj.id > 0 ? resCatObj.name : "请选择所属分类"}}<i class="el-icon-arrow-down el-icon--right"></i>
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item v-for="(item, index) in catList" :key="index" :command="item" v-show="index > 0">{{ item.name }}</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="closeUploadDialog()">取 消</el-button>
        <el-button type="primary" @click="confirmUploadFile()">确 定</el-button>
      </span>
    </el-dialog>
  
  </el-container>
</template>

<script>
import Category from '@/assets/js/model/category.js'
import Resource from '@/assets/js/model/resource.js'
import File from '@/assets/js/config/file.js'
import resItem from '@/components/resItem.vue'
import util from "@/libs/util.js";

export default {
  name: 'ResourceList',
  data () {
    const item = {
      name: '王小虎',
      content: '王小虎',
      address: '上海市普陀区金沙江路 1518 弄'
    };
    return {
      title: "媒体资源",
      tableData: Array(10).fill(item),
      catObj: new Category(),
      resObj: new Resource(),
      catList: [],
      resList: [],
      resListTotal: 67,
      resListPn: 0,
      resListPs: 0,
      curCatId: -1,
      curRes: {},
      uploadDialogVisible: false,
      resCatObj: {}, // 资源所选类别
      fileList: []
    }
  },
  created() {
    let self = this
    self.initData()
  },
  components: {
    resItem
  },
  methods: {
    initData () {
      let self = this
      self.getCatList()
      self.getResList()
    },
    getDuration: function (duration) {
      return File.formatSeconds(duration)
    },
    getSize: function (size) {
      return File.getFileSize(size)
    },
    getCatList () {
      let self = this
      self.catObj.retrieveCategoryList().then(function(res){
        self.catList = [new Category({media_type_id: -1, name: "全部类别"})]
        for(let i = 0 ; i < res.value.length; i++){
          let catItem = new Category(res.value[i])
          catItem.editing = false
          self.catList.push(catItem)
        }
      }).catch(function(ex){
        console.log(ex)
      })
    },
    addCat () {
      let self = this
      let newCat = new Category()
      newCat.editName = ""
      newCat.editing = true
      self.catList.push(newCat)
      // self.catObj.addCat().then(function(res){
      // })
    },
    startEditCat (item) {
      let self = this
      item.editName = item.name
      item.editing = true
    },
    cancelEditCat (item, index) {
      let self = this
      if(item.id > 0){
        item.editing = false
      } else {
        self.catList.splice(index, 1)
      }
    },
    editCat (item) {
      let self = this
      if(!item.editName){
        this.$message({
          showClose: true,
          message: "名称不能为空",
          type: "warning"
        });
      } else {
          item.id = "718" + parseInt(Math.random() * 100)
          item.name = item.editName
          item.editing = false
      }
      // self.catObj.editCat().then(function(res){
      // })
    },
    deleteCat (index) {
      let self = this
      self.$confirm('确定要删除此该类别吗？', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        self.catList.splice(index, 1)
        self.curCatId = -1
        self.getResList()
      }).catch(() => {});
      // self.catObj.deleteCat().then(function(res){
      // })
    },
    changeCatItem (catId) {
      let self = this
      console.log(catId)
      self.curCatId = catId
      self.getResList()
    },
    getResList () {
      let self = this
      self.resList = []
      self.resObj.retrieveResourceList().then(function(res){
        for(let i = 0; i < res.value.length; i++){
          var resItem = new Resource(res.value[i])
          if(resItem.url && resItem.url.indexOf("http") == -1){
            resItem.url = util.RES_HOST + resItem.url
          }
          if(self.curCatId == -1 || resItem.media_type_ids == self.curCatId){
            self.resList.push(resItem)
          }
        }
      }).catch(function(ex){
        console.log(ex)
      })
    },
    openEditRes (item) {
      let self = this
      if(item){
        self.curRes = item
        self.resCatObj = {}
        for(let i = 0; i < self.catList.length; i++){
          if(self.catList[i].id == item.media_type_ids){
            self.resCatObj = self.catList[i]
          }
        }
        self.fileList = [{
          name: item.name,
          url: item.url
        }]
      }
      self.uploadDialogVisible = true
    },
    deleteRes (item, index) {
      let self = this
      self.$confirm('确定要删除此该资源吗？', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        self.resList.splice(index, 1)
      }).catch(() => {});
    },
    handleSizeChange (val) {
      let self = this;
      self.resListPs = val;
      self.getResList();
    },
    handleCurrentChange (val) {
      let self = this;
      self.resListPn = val;
      self.getResList();
    },
    closeUploadDialog () {
      let self = this
      self.uploadDialogVisible = false
      self.curRes = {}
      self.resCatObj = {}
      self.fileList = []
    },
    confirmUploadFile () {
      let self = this
      self.uploadDialogVisible = false
    },
    chooseCat (command) {
      let self = this
      console.log(command)
      self.resCatObj = command
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  @import "@/assets/css/variable.scss";
  .resource-list-page{
    min-height: 100vh;
    background-color: $webBackgroundColor;
    .el-button{
      font-weight: normal;
    }
    .el-header {
      background-color: #fff;
      color: #333;
      margin-bottom: 10px;
      .el-breadcrumb{
        padding: 12px 0;
      }
      .title{
        font-size: 16px;
      }
    }
    .el-container{
      background-color: #fff;
    }
    .el-aside {
      position: relative;
      min-height: calc(100vh - 82px);
      &::after{
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        content: ' ';
        display: block;
        border-right: 1px solid $borderColor;
      }
      .el-menu{
        padding: 15px;
        .menu-item{
          position: relative;
          color: #333;
          border-radius: 4px;
          &.actv{
            color: #fff;
            background-color: $primaryColor;
          }
          .el-input{
            width: 76%;
            line-height: 32px;
            .edit-name{
              height: 36px;
              line-height: 36px;
            }
          }
          .opt-wra{
            position: absolute;
            top: 15px;
            right: 0;
            line-height: 28px;
            .opt-ico{
              cursor: pointer;
            }
          }
          .opt-edit{
            display: none;
          }
          &:hover{
            .opt-edit{
              display: inline-block;
            }
          }
        }
      }
      .add-cat{
        display: block;
        width: 100%;
        padding: 15px;
        .el-button{
          width: 100%;
        }
      }
    }
    .el-main {
      position: relative;
      &::before{
        position: absolute;
        top: 0;
        left: -1px;
        bottom: 0;
        content: ' ';
        display: block;
        border-left: 1px solid $borderColor;
      }
      .select-pagesize{
        display: inline-block;
        vertical-align: middle;
      }
    }
    
  }
</style>
<style lang="scss">
  @import "@/assets/css/variable.scss";
  .resource-list-page{
    .upload-res-dialog{
      .el-dialog__body{
        padding: 20px;
        border-top: 1px solid $borderColor;
        .el-upload{
          width: 100%;
          .el-upload-dragger{
            width: 100%;
            .el-icon-upload{
              color: $primaryColor;
            }
          }
        }
        .el-dropdown{
          width: 100%;
          margin-top: 20px;
          .el-dropdown-link{
            display: block;
            width: 100%;
            padding: 10px;
            border: 1px solid #dcdfe6;
            border-radius: 4px;
            .el-icon--right{
              float: right;
            }
          }
        }
      }
    }
  }
</style>
