<template>
  <div>
    <div class="right-head">
      <div class="right-head-info">
        <span>发放记录查询</span>
        <img src="../../assets/close.png" alt="" class="close-btn" @click="isShow()">
      </div>
    </div>
    <div class="right-info">
      <ul>
        <li><span>接收人</span><el-input v-model="jieshouren" placeholder="请输入内容"></el-input></li>
        <li><span>手机</span><el-input v-model="tel" placeholder="请输入内容"></el-input></li>
        <li><span>兑换码</span><el-input v-model="duihuanma" placeholder="请输入内容"></el-input></li>
        <li><span>活动名称</span><el-input v-model="huodong" placeholder="请输入内容"></el-input></li>
        <li><span>礼品名称</span><el-input v-model="lipin" placeholder="请输入内容"></el-input></li>
        <li><button class="search-btn" @click="getSearch()">查询</button></li>
      </ul>
    </div>
    <div class="right-table">
      <ul class="select-btn">
        <li v-for="(item,i) in list">{{item}}</li>
      </ul>
      <el-table
        :data="tableData"
        border
        stripe
        style="width: 100%">
        <el-table-column
          fixed
          prop="num"
          label="序号"
          width="56">
        </el-table-column>
        <el-table-column
          prop="jieshouren"
          label="接收人"
          width="85">
        </el-table-column>
        <el-table-column
          prop="tel"
          label="手机号"
          width="140">
        </el-table-column>
        <el-table-column
          prop="liwu"
          label="礼物名称"
          width="128">
        </el-table-column>
        <el-table-column
          prop="huodong"
          label="活动名称"
          width="222">
        </el-table-column>
        <el-table-column
          prop="duihuanma"
          label="兑换码"
          width="124">
        </el-table-column>
        <el-table-column
          prop="fasongshijian"
          label="发送时间"
          width="238">
        </el-table-column>
        <el-table-column
          prop="youxiaoriqi"
          label="有效截止日期"
          width="238">
        </el-table-column>
        <el-table-column
          prop="huodongleixing"
          label="活动类型"
          width="128">
        </el-table-column>
        <el-table-column
          prop="zhuangtai"
          label="状态"
          width="128">
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
        <el-dialog
          title="作废任务"
          :visible.sync="dialogVisible"
          width="400px"
          :before-close="handleClose">
          <span>备注</span>
          <el-input
            type="textarea"
            :rows="4"
            resize=none
            placeholder="请输入内容"
            v-model="textarea">
          </el-input>
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
      jieshouren: '刘晓霞',
      tel: '17888889090',
      duihuanma: '23jsfhj434',
      huodong: '中估协年会',
      lipin: '五仁月饼',
      list: ['全部', '已领取', '未领取', '已过期'],
      dialogVisible: false,
      textarea: '',
      total: 1000,
      tableData: [
        {
          num: '1',
          jieshouren: '刘晓霞',
          tel: '17888889090',
          liwu: 'iPhone X手机',
          huodong: '中估协年会中估协年会出席',
          duihuanma: '顺丰',
          fasongshijian: '2017-12-05 15:29:22',
          youxiaoriqi: '2017-12-05 15:29:22',
          huodongleixing: '实物活动',
          zhuangtai: '未领取'
        }, {
          num: '2',
          jieshouren: '华信',
          tel: '17888889090',
          liwu: 'iPhone X手机',
          huodong: '中估协年会中估协年会出席',
          duihuanma: '顺丰',
          fasongshijian: '2017-12-05 15:29:22',
          youxiaoriqi: '2017-12-05 15:29:22',
          huodongleixing: '虚拟活动',
          zhuangtai: '已领取'
        }, {
          num: '3',
          jieshouren: '刘晓霞',
          tel: '17888889090',
          liwu: 'iPhone X手机',
          huodong: '中估协年会中估协年会出席',
          duihuanma: '顺丰',
          fasongshijian: '2017-12-05 15:29:22',
          youxiaoriqi: '2017-12-05 15:29:22',
          huodongleixing: '实物活动',
          zhuangtai: '未领取'
        }, {
          num: '4',
          jieshouren: '华信',
          tel: '17888889090',
          liwu: 'iPhone X手机',
          huodong: '中估协年会中估协年会出席',
          duihuanma: '顺丰',
          fasongshijian: '2017-12-05 15:29:22',
          youxiaoriqi: '2017-12-05 15:29:22',
          huodongleixing: '虚拟活动',
          zhuangtai: '已领取'
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
    handleYes (index, row) {
      console.log(index, row)
      alert('通过')
    },
    handleNo (index, row) {
      console.log(index, row)
      alert('拒绝')
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
      alert('查询')
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
      background: #FFFFFF;
      border: 1px solid #D6DEE6;
      box-shadow: 0 2px 10px 0 #D6DEE6;
      border-radius: 8px;
      height: 250px;
      position: absolute;
      top: 0;
      bottom: 0;
      right: 0;
      left: 0;
      margin: auto ! important;
      .el-dialog__header{
        border-bottom: 1px solid #D6DEE6;
      }
      .el-dialog__title{
        font-size: 14px;
        color: #000;
      }
      .el-dialog__body{
        padding: 10px 0 ! important;
        span{
          margin: 0 20px 0 40px;
          vertical-align: top;
          text-align: center;
          line-height: 66px;
        }
        .el-textarea{
          width: 240px;
          margin-top: 20px;
        }
      }
    }
  }
}

</style>
