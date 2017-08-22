<template>
  <div id="got">
    <el-row>
      <el-col :span="4">
        <el-menu default-active="/carTitle" class="el-menu-vertical-demo" router="true">
          <el-submenu index="/">
            <template slot="title">
              <i class="el-icon-message"></i>
              <span slot="title">北斗卡入库 &nbsp;&nbsp; &nbsp;&nbsp;</span>
            </template>
            <el-menu-item-group>
             <el-menu-item index="/carTitle">北斗卡列表</el-menu-item>
              <el-menu-item index="/carQuery">北斗卡查询</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-submenu index="2">
            <template slot="title">
              <i class="el-icon-menu"></i>
              <span slot="title">北斗卡使用申请</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="1-1">选项1</el-menu-item>
              <el-menu-item index="1-2">选项2</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-submenu index="3">
            <template slot="title">
              <i class="el-icon-setting"></i>
              <span slot="title">北斗卡使用审批</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="1-1">选项1</el-menu-item>
              <el-menu-item index="1-2">选项2</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
        </el-menu>
      </el-col>
      <el-col :span="20">
        <div>
          <router-view></router-view>
        </div>
      </el-col>
    </el-row>

  </div>
</template>
<script>
export default {
  name: 'got',
  data() {
    return {
      activeIndex: '1',
      activeIndex2: '1'
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    }
  }
}
</script>
<style>
.el-menu-vertical-demo:not(.el-menu--collapse) {
  min-height: 875px;
}
</style>




