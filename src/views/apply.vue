<template>
  <div>
    <div class="container">
      <v-newHeader></v-newHeader>
      <div class="mgt15 bgf bdr4" style="height: 610px">
        <el-table
          :data="applyList"
          stripe
          align="center"
          style="width: 100%">
          <el-table-column
            prop="id"
            align="center"
            label="序号">
          </el-table-column>
          <el-table-column
            prop="name"
            width="300"
            align="center"
            label="可申请项目">
          </el-table-column>
          <el-table-column
            prop="endTime"
            align="center"
            label="截止时间">
          </el-table-column>
          <el-table-column
            prop="applicantNum"
            align="center"
            label="当前申请人数">
          </el-table-column>
          <el-table-column
            prop="learningPhase"
            align="center"
            label="年段">
            <template slot-scope="scope">
              <span v-if="scope.row.learningPhase === 1" size="small" type="primary">小学</span>
              <span v-if="scope.row.learningPhase === 2" size="small" type="success">初中</span>
              <span v-if="scope.row.learningPhase === 3" size="small" type="info">高中</span>
            </template>
          </el-table-column>
          <el-table-column
            prop="name5"
            align="center"
            label="类型">
            <template slot-scope="scope">
              <el-tag v-if="scope.row.learningPhase === 1" size="small" type="success">入学申请</el-tag>
            </template>
          </el-table-column>
          <el-table-column
            fixed="right"
            label="操作"
            align="center"
            width="100">
            <template slot-scope="scope">
              <el-button type="text" size="small" @click="handleApply(scope.$index, scope.row.id)">申请</el-button>
            </template>
          </el-table-column>
        </el-table>
        <div class="mgt15"></div>
        <el-pagination
          background
          layout="prev, pager, next"
          :total="100"
          @size-change="handleSizeChange"
          @prev-click="handlePrevClick"
          @next-click="handleNextClick"
          @current-change="handleCurrentChange"
        >
        </el-pagination>
      </div>
    </div>
    <v-footer></v-footer>

    <el-dialog
      title="提示"
      :visible.sync="editFormVisible"
      width="700px"
    >
      <div class="dwrap">
        <div style="width: 640px;margin: 0 auto">
          <el-steps :active="active">
            <el-step title="基本信息"></el-step>
            <el-step title="选择学校"></el-step>
            <el-step title="户籍信息"></el-step>
            <el-step title="居住信息"></el-step>
            <el-step title="务工经商信息"></el-step>
            <el-step title="优惠政策"></el-step>
          </el-steps>
        </div>
        <div class="mgt15"></div>
        <el-form :model="form" :rules="editFormRules" ref="editForm" label-width="80px"  data-options="onClose:function(){window.location.reload(true);}">
          <div style="width: 55%;float: left" v-if="this.active ===0">
            <el-form-item label="姓名" prop="name">
              <el-input v-model="form.name"></el-input>
            </el-form-item>
            <el-form-item label="性别">
              <el-select v-model="form.region">
                <el-option label="男" value="shanghai"></el-option>
                <el-option label="女" value="beijing"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="出生日期">
              <el-col :span="24">
                <el-date-picker type="date" placeholder="选择日期" v-model="form.date1"
                                style="width: 100%;"></el-date-picker>
              </el-col>
            </el-form-item>
            <el-form-item label="籍贯">
              <el-cascader
                :options="options"
                change-on-select
              ></el-cascader>
            </el-form-item>
            <el-form-item label="联系电话" prop="phone">
              <el-input v-model="form.phone"></el-input>
            </el-form-item>
            <el-form-item label="家庭住址">
              <el-input v-model="form.name"></el-input>
            </el-form-item>
            <el-form-item label="身份证">
              <el-input v-model="form.idcard"></el-input>
            </el-form-item>
            <el-form-item label="年龄">
              <el-input v-model="form.age"></el-input>
            </el-form-item>
          </div>
          <div style="width: 55%;float: left" v-if="this.active ===1">
            <el-form-item>
              <el-select v-model="form.describeInfo" clearable placeholder="请选择学校">
                <el-option
                  v-for="item in applyInfo"
                  :key="item.id"
                  :label="item.title"
                  :value="item.id">
                </el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="学校简介" prop="name">
              <el-input
                type="textarea"
                :rows="2"
                placeholder="请输入内容"
                v-model="textarea">
              </el-input>
            </el-form-item>
            <el-form-item label="出生日期">
              <el-col :span="24">
                <el-date-picker type="date" placeholder="选择日期" v-model="form.date1"
                                style="width: 100%;"></el-date-picker>
              </el-col>
            </el-form-item>
          </div>
          <div style="width: 55%;float: left" v-if="this.active ===2">
            <el-form-item label="户籍信息" prop="name">
              <el-input v-model="form.name"></el-input>
            </el-form-item>
            <el-form-item label="迁入日期" prop="name">
              <div class="block">
                <el-date-picker
                  v-model="date"
                  type="date"
                  placeholder="选择日期">
                </el-date-picker>
              </div>
            </el-form-item>
            <div>
              <el-upload
                class="upload-demo"
                drag
                action="https://jsonplaceholder.typicode.com/posts/"
                multiple>
                <i class="el-icon-upload"></i>
                <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
                <div class="el-upload__tip" slot="tip">只能上传jpg/png文件，且不超过500kb</div>
              </el-upload>
            </div>
          </div>
        </el-form>
      </div>

      <div slot="footer" class="dialog-footer" align="right">
        <el-button @click.native="editFormVisible = false">取消</el-button>
        <el-button type="primary" v-if="this.active ===0" @click="nextStep" :loading="editLoading">下一项</el-button>
        <el-button type="primary" v-if="this.active ===1" @click="nextStep" :loading="editLoading">下一项</el-button>
        <el-button type="primary" v-if="this.active ===2" @click="nextStep" :loading="editLoading">下一项</el-button>
        <el-button type="primary" v-if="this.active ===3" @click="nextStep" :loading="editLoading">下一项</el-button>
        <el-button type="primary" v-if="this.active ===4" @click="nextStep" :loading="editLoading">下一项</el-button>
        <el-button type="primary" v-if="this.active ===5" @click="editSubmit" :loading="editLoading">提交</el-button>
      </div>
    </el-dialog>

  </div>
</template>

<script>
  import NewHeader from '../components/head/NewHeader';

  export default {
    data() {
      var pattern = new RegExp("[`~!@#$^&*()=|{}':;',\\[\\].<>《》/?~！@#￥……&*（）——|{}【】‘；：”“'。，、？]");
      var check1 = (rule, value, callback) => {
        if (!value) {
          return callback(new Error('阶段不能为空'));
        }
        if (pattern.test(value)) {
          callback(new Error('不能输入特殊字符'));
        }
      };
      /*var ph = (rule, value, callback) => {
        if (!value) {
          return callback(new Error('电话不能为空'));
        }
        if (!(/^1[34578]\d{9}$/.test(value))) {
          callback(new Error('电话错误'));
        }
      };*/
      return {
        date:'',
        applyList: [],
        applyInfo: [],
        active: 0,
        textarea: '',
        editLoading: false,
        fileList: [{name: 'food.jpeg', url: 'https://fuss10.elemecdn.co'}, {name: 'food2.jpeg', url: 'https://fuss10'}],
        editFormVisible: false,
        editFormRules: {
          name: [
            {validator: check1, trigger: 'blur'}
          ]
        },
        form: {
          name: '',
          phone: ''
        },
        options: [
          {
            value: '6',
            label: '贵州',
            children: [
              {
                value: '4',
                label: '贵阳',
              },
              {
                value: '3',
                label: '遵义',
              }
            ]
          },
          {
            value: '7',
            label: '浙江',
            children: [
              {
                value: '1',
                label: '杭州',
              },
              {
                value: '2',
                label: '绍兴',
              }
            ]
          }

        ],
        tableData: []
      }
    },
    mounted: function () {
      var params = this.$route.params;
      this.getApplyList()
    },
    methods: {
      nextStep: function () {
        if (this.active++ > 4) this.active = 0;
        console.log(this.active)
      },
      editSubmit: function () {
        if (this.active === 5) {
          this.$refs.editForm.validate((valid) => {
            if (valid) {
              this.$confirm('确认提交吗？', '提示', {}).then(() => {
                this.editLoading = true;
                let para = Object.assign({}, this.editForm);
              });
            }
          });
        }
        this.getApplyList()
      },
      handleApply: function (index, id) {
        console.log(id)
        this.editFormVisible = true;
        this.getApplyList()
        // this.editForm = Object.assign({}, id);
        this.$http.get('/api/schoolintegralrules/selIntegralbyid?id=' + id).then(res => {  //这是从本地请求的数据接口，
          this.applyInfo = res.body
        })
      },
      // 初始页currentPage、初始每页数据数pagesize和数据data
      handleSizeChange: function (size) {
        alert(size)
        this.pagesize = size;
      },
      handleCurrentChange: function (currentPage) {
        alert(currentPage)
        this.currentPage = currentPage;
      },

      handlePrevClick: function (size) {
        alert(size)
        this.pagesize = size;
      },
      handleNextClick: function (size) {
        alert(size)
        this.pagesize = size;
      },
      handleUserList() {
        this.$http.get('http://localhost:3000/userList').then(res => {  //这是从本地请求的数据接口，
          this.userList = res.body
        })
      },
      getApplyList() {
        this.$http.get('/api/schoolApplicant/selapplicantproject').then(res => {  //这是从本地请求的数据接口，
          this.applyList = res.body
        })
      }
    }
    ,
    components: {
      'v-newHeader':
      NewHeader
    }
    ,
    activated() {
      this.getApplyList()
    }
  }
</script>

<style>
  .dwrap {
    width: 700px;
    overflow: hidden
  }

  .el-step.is-horizontal .el-step__line {
    height: 1px
  }

  .el-step__icon.is-text {
    border-width: 1px
  }

  .el-step__icon-inner {
    font-weight: normal
  }

  .el-step__title.is-wait {
    color: #666;
    font-size: 14px;
  }

  .el-dialog__body {
    padding: 0
  }

  .el-form-item__label {
    line-height: 36px
  }

  .el-input__inner {
    height: 28px;
    line-height: 28px
  }

  .el-select, .el-cascader {
    width: 100%
  }

  .el-form-item {
    margin-bottom: 10px
  }

  .el-form-item__error {
    padding-top: 0
  }

  .el-dialog__footer {
    text-align: center
  }

  .avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }

  .avatar-uploader .el-upload:hover {
    border-color: #409EFF;
  }

  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 178px;
    height: 178px;
    line-height: 178px;
    text-align: center;
  }

  .avatar {
    width: 178px;
    height: 178px;
    display: block;
  }
</style>
