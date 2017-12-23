<template>
  <div>
    <div class="right-head">
      <div class="right-head-info">
        <span>会员管理</span>
        <img src="../../assets/close.png" alt="" class="close-btn" @click="isShow()">
      </div>
    </div>
    <div class="right-info">
      <ul>
        <li><span>姓名</span><el-input v-model="name" placeholder="请输入内容"></el-input></li>
        <li><span>手机</span><el-input v-model="tel" placeholder="请输入内容"></el-input></li>
        <li><span>公司</span><el-input v-model="company" placeholder="请输入内容"></el-input></li>
        <li><span>市场对接人</span><el-input v-model="duijie" placeholder="请输入内容"></el-input></li>
        <li><span>微信号</span><el-input v-model="wechat" placeholder="请输入内容"></el-input></li>
        <li><button class="search-btn" @click="getSearch()">查询</button></li>
      </ul>
    </div>
    <div class="right-table">
      <ul class="select-btn">
        <li v-for="(item,i) in list">{{item}}</li>
      </ul>
      <button class="import-member">导入会员</button>
      <!-- <button>创建</button> -->
      <el-table
        :data="tableData"
        border
        stripe
        style="width: 100%">
        <el-table-column
          fixed
          prop="num"
          label="序号"
          width="70">
        </el-table-column>
        <el-table-column
          prop="name"
          label="姓名"
          width="105">
        </el-table-column>
        <el-table-column
          prop="tel"
          label="手机号"
          width="140">
        </el-table-column>
        <el-table-column
          prop="company"
          label="公司"
          width="223">
        </el-table-column>
        <el-table-column
          prop="duijie"
          label="市场对接人"
          width="128">
        </el-table-column>
        <el-table-column
          prop="wechat"
          label="微信号"
          width="184">
        </el-table-column>
        <el-table-column
          prop="department"
          label="部门"
          width="128">
        </el-table-column>
        <el-table-column
          prop="zhiwu"
          label="职务"
          width="148">
        </el-table-column>
        <el-table-column
          prop="state"
          label="状态"
          width="128">
        </el-table-column>
        <el-table-column
          fixed="right"
          prop="operation"
          label="操作"
          width="223">
          <template slot-scope="scope">
            <el-button
              size="small"
              type="text"
              @click="handleEdit(scope.$index, scope.row)">修改</el-button>
              <el-button
              size="small"
              type="text"
              @click="handleDisable(scope.$index, scope.row)">禁用</el-button>
            <el-button
              size="small"
              type="text"
              @click="handleDelete(scope.$index, scope.row)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
      <div class="page">
        <div class="block">
          <el-pagination
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :current-page.sync="currentPage3"
            :page-size="100"
            layout="total, prev, pager, next, jumper"
            :total="total">
          </el-pagination>
        </div>
      </div>
      <div class="dialog">
        <el-button type="text" @click="dialogVisible = true" class="establish">创建</el-button>
        <el-dialog
          title="新建会员信息"
          :visible.sync="dialogVisible"
          width="430px"
          :before-close="handleClose">
          <ul>
            <li><span>姓名</span><el-input v-model="dialogName" placeholder="请输入内容"></el-input></li>
            <li><span>手机号</span><el-input v-model="dialogTel" placeholder="请输入内容"></el-input></li>
            <li><span>微信号</span><el-input v-model="dialogWechat" placeholder="请输入内容"></el-input></li>
            <li><span>公司</span><el-input v-model="dialogCompany" placeholder="请输入内容"></el-input></li>
            <li><span>部门</span><el-input v-model="dialogDepartment" placeholder="请输入内容"></el-input></li>
            <li><span>职务</span><el-input v-model="dialogZhiwu" placeholder="请输入内容"></el-input></li>
            <li><span>市场对接人</span><el-input v-model="dialogDuijie" placeholder="请输入内容"></el-input></li>
          </ul>
          <span slot="footer" class="dialog-footer">
            <el-button size="small" @click="dialogVisible = false">取 消</el-button>
            <el-button size="small" type="primary" @click="dialogVisible = false">确 定</el-button>
          </span>
        </el-dialog>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      name: '刘晓霞',
      tel: '17888889090',
      company: '中国农业',
      duijie: '刘晓霞',
      wechat: 'dongfangzhizi232',
      list: ['全部', '使用中', '已禁用'],
      dialogName: '',
      dialogTel: '',
      dialogCompany: '',
      dialogDepartment: '',
      dialogZhiwu: '',
      dialogDuijie: '',
      dialogWechat: '',
      dialogVisible: false,
      total: 1000,
      tableData: [
        {
          num: '1',
          name: '刘晓霞',
          tel: '17888889090',
          company: '中国农业银行股份有限公司',
          duijie: '刘晓霞',
          wechat: 'dongfangzhizi232',
          department: '市场部',
          zhiwu: '市场总监',
          state: '已禁用'
        }, {
          num: '2',
          name: '华信',
          tel: '17888889090',
          company: '中国农业银行股份有限公司',
          duijie: '华信',
          wechat: 'dongfangzhizi232',
          department: '市场部',
          zhiwu: '市场总监',
          state: '使用中'
        }, {
          num: '3',
          name: '华信',
          tel: '17888889090',
          company: '中国农业银行股份有限公司',
          duijie: '华信',
          wechat: 'dongfangzhizi232',
          department: '市场部',
          zhiwu: '市场总监',
          state: '使用中'
        }, {
          num: '4',
          name: '华信',
          tel: '17888889090',
          company: '中国农业银行股份有限公司',
          duijie: '华信',
          wechat: 'dongfangzhizi232',
          department: '市场部',
          zhiwu: '市场总监',
          state: '使用中'
        }
      ],
      currentPage1: 5,
      currentPage2: 5,
      currentPage3: 5,
      currentPage4: 4
    }
  },
  components: {
  },
  methods: {
    handleSizeChange (val) {
      console.log(`每页 ${val} 条`)
    },
    handleCurrentChange (val) {
      console.log(`当前页: ${val}`)
    },
    handleEdit (index, row) {
      console.log(index, row)
      alert('修改')
    },
    handleDisable (index, row) {
      console.log(index, row)
      alert('禁用')
    },
    handleDelete (index, row) {
      console.log(index, row)
      alert('删除')
      // this.tableData.splice(index, 1)
    },
    handleClose (done) {
      this.$confirm('确认关闭？')
        .then(_ => {
          done()
        })
        .catch(_ => {})
    },
    handleClick (row) {
      console.log(row)
    },
    getSearch () {
      alert(1)
      // let para = {
        // page: this.page,
        // name: this.name
      // }
      // this.listLoading = true
      // getUserListPage(para).then((res) => {
      //   this.total = res.data.total
      //   this.users = res.data.users
      //   this.listLoading = false
      // })
    }
  }
}
</script>

<style lang='less'>
.right-head{
  width: 100%;
  height: 45px;
  background: #FFFFFF;
  border-bottom: 1px solid #E6EAEE;
  .right-head-info{
    width: 200px;
    height: 45px;
    background: #FFFFFF;
    border-right: 1px solid #E6EAEE;
    text-align: center;
    line-height: 45px;
    position: relative;
    span{
      font-size: 16px;
      color: #3856F2
    }
    img{
      position: absolute;
      right:11px;
      top: 16px;
    }
  }
}
.right-info{
  width: 96%;
  height: 100px;
  margin: 25px auto 10px;
  border-top: 7px solid #3367F8;
  background: #FFFFFF;
  box-shadow: 0 2px 9px 0 rgba(51,139,248,0.16);
  ul{
    height: 100px;
    display: flex;
    align-items: center;
    li{
      display: flex;
      span{
        font-size: 14px;
        line-height: 40px;
        white-space:nowrap;
        margin: 0 10px;
      }
      input{
        width: 150px;
      }
      button{
        width: 60px;
        height: 30px;
        background-image: linear-gradient(0deg, #F2F4F7 0%, #FFFFFF 100%);
        border: 1px solid #3367F8;
        box-shadow: 0 2px 4px 0 rgba(51,103,248,0.35);
        border-radius: 4px;
        margin-left: 10px;
      }
    }
  }
}
.right-table{
  width: 1292px;
  height: auto;
  margin: auto;
  background: #ffffff;
  box-shadow: 0 2px 9px 0 rgba(51,139,248,0.16);
  padding: 20px;
  margin-bottom: 20px;
  box-sizing: border-box;
  position: relative;
  .select-btn{
    width: 380px;
    height: 40px;
    display: flex;
    border: 1px solid #D6DEE6;
    li{
      flex: 1;
      line-height: 40px;
      text-align: center;
      border-left: 1px solid #D6DEE6;
      &:first-child{
        background: #3465F8;
        color:#fff;
        border-left: none;
      }
    }
  }
  .import-member{
    width: 80px;
    height: 30px;
    background-image: linear-gradient(0deg, #F2F4F7 0%, #FFFFFF 100%);
    border: 1px solid #3367F8;
    box-shadow: 0 2px 4px 0 rgba(51,103,248,0.35);
    border-radius: 4px;
    position: absolute;
    right: 100px;
    top: 20px;
  }
  .el-button--text{
    padding: 0 ! important;
  }
  .establish{
    width: 60px;
    height: 30px;
    background-image: linear-gradient(0deg, #F2F4F7 0%, #FFFFFF 100%);
    border: 1px solid #3367F8;
    box-shadow: 0 2px 4px 0 rgba(51,103,248,0.35);
    border-radius: 4px;
    position: absolute;
    right: 20px;
    top: 20px;
  }
  .el-table{
    margin-top: 10px;
    border: 1px solid #D6DEE6;
    border-right: none;
    tr,th,td{
      border-bottom: 1px solid #D6DEE6;
      border-left: 1px solid #D6DEE6;
      text-align: center;
      height: 40px;
      &:first-child{
        border-left: none;
      }
    }
  }
  .block{
    text-align: center;
    margin-top: 25px;
  }
  .dialog{
    .el-dialog{
      margin-top: 8vh ! important;
      ul li{
        display: flex;
        align-items: center;
        margin: 10px 40px 0 40px;
        span{
          display: block;
          width: 90px;
        }
        .el-input__inner{
          max-width: 240px;
          height: 40px;
        }
      }
      .el-dialog__header{
        border-bottom: 1px solid #D6DEE6;
      }
      .el-dialog__title{
        font-size: 14px;
        color: #000;
      }
      .el-dialog__body{
        padding: 10px 0 ! important;
      }
    }
  }
}

</style>
