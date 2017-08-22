<template>
  <div class="bigContent">

    <!-- 这是新增页面 -->
    <transition name="fade">
      <div class="addPageCover" v-show="active">
        <div class="addPageContent">
          <el-form ref="form" class="addListTable" :model="form" label-width="80px">
            <el-row>
              <el-col :span="12">
                <el-form-item label="北斗卡号">
                  <el-input v-model="bdCardNumber" placeholder="北斗卡号"></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="12">
                <el-form-item label="序列号">
                  <el-input v-model="listNumber" placeholder="序列号"></el-input>
                </el-form-item>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="12">
                <el-form-item label="活动名称">
                  <el-input></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="12">
                <el-form-item label="活动区域">
                  <el-select placeholder="请选择活动区域">
                    <el-option label="区域一" value="shanghai"></el-option>
                    <el-option label="区域二" value="beijing"></el-option>
                  </el-select>
                </el-form-item>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="12">
                <el-form-item label="活动时间">
                  <el-col :span="11">
                    <el-date-picker type="date" placeholder="选择日期" v-model="form.date1" style="width: 100%;"></el-date-picker>
                  </el-col>
                  <el-col class="line" :span="2">-</el-col>
                  <el-col :span="11">
                    <el-time-picker type="fixed-time" placeholder="选择时间" v-model="form.date2" style="width: 100%;"></el-time-picker>
                  </el-col>
                </el-form-item>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="12">
                <el-form-item label="即时配送">
                  <el-switch on-text="1" off-text=""></el-switch>
                </el-form-item>
              </el-col>
            </el-row>

            <el-form-item label="活动形式">
              <el-input type="textarea"></el-input>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="onSubmit">立即创建</el-button>
              <el-button @click="active=!active">取消</el-button>
            </el-form-item>
          </el-form>
        </div>
      </div>
    </transition>

    <!-- 这里是列表主要界面 -->
    <div class="currentCardList">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item :to="{ path: '/' }">主页</el-breadcrumb-item>
        <el-breadcrumb-item>北斗管理</el-breadcrumb-item>
        <el-breadcrumb-item>北斗卡入库</el-breadcrumb-item>
        <el-breadcrumb-item>北斗卡列表</el-breadcrumb-item>
      </el-breadcrumb>

      <el-form :inline="true" :model="formInline" class="demo-form-inline">
        <el-form-item label="审批人">
          <el-input placeholder="审批人"></el-input>
        </el-form-item>
        <el-form-item label="活动区域">
          <el-select placeholder="活动区域">
            <el-option label="区域一" value="shanghai">111</el-option>
            <el-option label="区域二" value="beijing">222</el-option>
          </el-select>
        </el-form-item>
        <el-form-item>
          <el-button type="primary">查询</el-button>
          <el-button type="primary" @click="active=!active">新建</el-button>
          <el-button type="primary" @click="openAddPage()">测试jquery</el-button>
        </el-form-item>
      </el-form>

      <el-row>
        <el-col :span="6" class="cardListBtn">

        </el-col>
        <el-col :span="6">
          <!-- <el-button type="primary" @click="openAddPage()">新建</el-button> -->
        </el-col>
      </el-row>
      <!-- 这里是表格列表页面 -->
      <div class="cardList">
        <el-table :data="tableData" border style="width: 100%">
          <el-table-column type="selection" width="55">
          </el-table-column>
          <el-table-column label="日期" width="180">
            <template scope="scope">
              <el-icon name="time"></el-icon>
              <span style="margin-left: 10px">{{ scope.row.date }}</span>
            </template>
          </el-table-column>
          <el-table-column label="姓名" width="180">
            <template scope="scope">
              <el-popover trigger="hover" placement="top">
                <p>姓名: {{ scope.row.name }}</p>
                <p>住址: {{ scope.row.address }}</p>
                <div slot="reference" class="name-wrapper">
                  <el-tag>{{ scope.row.name }}</el-tag>
                </div>
              </el-popover>
            </template>
          </el-table-column>
          <el-table-column prop="province" label="省份" width="120">
          </el-table-column>
          <el-table-column prop="city" label="市区" width="120">
          </el-table-column>
          <el-table-column prop="address" label="地址" width="300">
          </el-table-column>
          <el-table-column prop="zip" label="邮编" width="120">
          </el-table-column>
          <el-table-column label="操作">
            <template scope="scope">
              <el-button size="small" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
              <el-button size="small" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
            </template>
          </el-table-column>
        </el-table>
      </div>
      <!-- 分页插件 -->
      <el-pagination class="changePage" @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="currentPage4" :page-sizes="[100, 200, 300, 400]" :page-size="100" layout="total, sizes, prev, pager, next, jumper" :total="400">
      </el-pagination>
    </div>

  </div>
</template>
<script>
export default {
  methods: {
    handleClick() {
      console.log(1);
    },
    handleEdit(index, row) {
      this.active = !this.active;
      console.log(index, row);
      this.bdCardNumber = row.name;
      this.listNumber = row.city;
    },
    handleDelete(index, row) {
      console.log(index, row);
      this.$confirm('此操作将永久删除' + row.name + ', 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        lockScroll: true,
        type: 'warning'
      }).then(() => {
        this.$message({
          type: 'success',
          message: '删除成功!'
        });
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消删除'
        });
      });
    },
    open4(index, row) {
      const h = this.$createElement;
      this.$msgbox({
        title: '删除',
        message: h('p', null, [
          h('span', null, '是否删除： '),
          h('i', { style: 'color: teal' }, ''+row.name+'')
        ]),
        showCancelButton: true,
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        beforeClose: (action, instance, done) => {
          if (action === 'confirm') {
            instance.confirmButtonLoading = true;
            instance.confirmButtonText = '执行中...';
            setTimeout(() => {
              done();
              setTimeout(() => {
                instance.confirmButtonLoading = false;
              }, 300);
            }, 3000);
          } else {
            done();
          }
        }
      }).then(action => {
        this.$message({
          type: 'success',
          message: '删除成功！ '
        });
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '删除失败'
        });
      });
    },
    openAddPage() {
      console.log($(".addPageCover"));
    },
    onSubmit() {
      console.log('创建成功!');
    },
    handleSizeChange() {

    },
    handleCurrentChange() {

    }
  },
  mounted: function () {
    var orderHeight = document.body.clientHeight;
    document.getElementById("bigContent").style.height = orderHeight + 'px';
  },

  data() {
    return {
      tableData: [{
        date: '2016-05-03',
        name: '王小虎',
        province: '上海',
        city: '普陀区',
        address: '上海市普陀区金沙江路 1518 弄',
        zip: 200333
      }, {
        date: '2016-05-02',
        name: '王小虎',
        province: '上海',
        city: '普陀区',
        address: '上海市普陀区金沙江路 1518 弄',
        zip: 200333
      }, {
        date: '2016-05-04',
        name: '王小虎',
        province: '上海',
        city: '普陀区',
        address: '上海市普陀区金沙江路 1518 弄',
        zip: 200333
      }, {
        date: '2016-05-01',
        name: '王小虎',
        province: '上海',
        city: '普陀区',
        address: '上海市普陀区金沙江路 1518 弄',
        zip: 200333
      }],
      tableData3: [{
        date: '2016-05-03',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-04',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-01',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-08',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-06',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-07',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }],
      form: {
        name: '',
        region: '',
        date1: '',
        date2: '',
        delivery: false,
        type: [],
        resource: '',
        desc: ''
      },
      active: false,
      currentPage4: 4,
      bdCardNumber: '',
      listNumber: '',
      form: {
        date1: 1314,
        date2: 3344
      }
    }
  }
}
</script>
<style>
.currentCardList {
  padding: 25px;
}

.addPageCover {
  position: absolute;
  width: 83.33333%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 99;
}

.addPageContent {
  margin: 50px auto;
  padding: 10px;
  width: 70%;
  background-color: white;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity .5s
}

.fade-enter,
.fade-leave-to
/* .fade-leave-active in below version 2.1.8 */

{
  opacity: 0
}

.cardList {
  /* margin: 15px; */
}

.cardListBtn {
  margin: 20px 0;
}

.addListTable {
  margin: 20px;
}

.demo-form-inline {
  text-align: left;
  margin-top: 20px;
  padding: 25px 0 0 20px;
  background-color: #f2f2f2;
}

.changePage {
  float: right;
  margin-top: 20px;
}

th>div.cell {
  text-align: center;
}
</style>



