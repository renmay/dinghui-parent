<template>
    <div class="pr ofh">
      <div class="qbg" :style="height"></div>
      <div class="login-box">
        <div class="lh45 cfff f18" style="text-align: center;background-color: #4E98E3">申请结果查询</div>
        <div style="padding: 57px 85px 20px 50px;">
          <el-form :model="ruleForm2" status-icon :rules="rules2" ref="ruleForm2" label-width="100px" class="demo-ruleForm">
            <el-form-item label="姓名" prop="name">
              <el-input v-model.name="ruleForm2.name"></el-input>
            </el-form-item>
            <el-form-item label="身份证号" prop="idcard">
              <el-input v-model.number="ruleForm2.idcard"></el-input>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="submitForm('ruleForm2')">查询结果</el-button>
            </el-form-item>
          </el-form>
        </div>
      </div>
      <el-dialog title="申请结果查询" :visible.sync="dialogTableVisible">
        <div style="min-height: 500px">
          <el-table :data="gridData">
            <el-table-column property="oder" label="序号" width="50"></el-table-column>
            <el-table-column property="name" label="已申请项目"></el-table-column>
            <el-table-column property="date" label="申请时间" width="150"></el-table-column>
            <el-table-column property="state" label="审核状态" width="100"></el-table-column>
            <el-table-column property="grade" label="年段" width="100"></el-table-column>
            <el-table-column property="type" label="类型" width="100"></el-table-column>
          </el-table>
        </div>
      </el-dialog>

      <v-foot></v-foot>
    </div>
</template>

<script>
  export default {
    data() {
      var checkAge = (rule, value, callback) => {
        if (!value) {
          return callback(new Error('请输入身份证号'));
        }
        setTimeout(() => {
          if (!(/(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/.test(value))) {
            callback(new Error('身份证号错误'));
          } else {
            callback();
          }
        }, 1000);
      };
      var name = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入姓名'));
        } else {
          callback();
        }
      };
      return {
        height:{height:""},
        ruleForm2: {
          name: '',
          idcard: '',
        },
        rules2: {
          name: [
            { validator: name, trigger: 'blur' }
          ],
          idcard: [
            { validator: checkAge, trigger: 'blur' }
          ]
        },

        dialogTableVisible : false,
        gridData: [{
          date: '2016-05-02',
          name: '王小虎',
          oder: '1',
          state:"未审核",
          grade:"小学"
        },{
          date: '2016-05-02',
          name: '王小虎',
          oder: '2',
          state:"未审核",
          grade:"小学"
        }, {
          date: '2016-05-02',
          name: '王小虎',
          oder: '3',
          state:"未审核",
          grade:"小学"
        }, ]
      };
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            this.dialogTableVisible = true;
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      }
    },
    mounted:function () {
      var ht = (document.documentElement.clientHeight-55)+"px";
      this.height.height = ht;

    }
  }
</script>

<style scoped>
.qbg{
  width: 100%;
  height: 800px;
  background: url("/static/img/bg.jpg") no-repeat;
  background-size: 100% 100%;
}
.login-box{width:440px;height:330px;position: absolute;top:0;bottom:0;left:0;right:0;margin: auto;background-color: #F5F9FC;box-shadow: 2px 2px 8px #B7C4CC}
.el-button{
  padding: 12px 65px;
  font-size: 18px;
}

.el-dialog__headerbtn{top:7px;right:15px;}
.el-dialog__headerbtn .el-dialog__close{color:#000}
.el-dialog__body {
  padding: 0px 20px 10px 20px;}
.el-dialog__header {
  padding: 5px 20px;
  background:#E9F4FA;
}
.el-dialog__title {
  line-height: 24px;
  font-size: 16px;
  color: #555;
}
.el-dialog__body{padding: 10px}
.el-table td, .el-table th{padding: 6px 0}
.el-table th{background-color: #70BBF2}
.el-table thead{color:#fff}
</style>
