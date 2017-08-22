<template>
  <div id="got">
    <el-row>
      <el-col :span="4">
        <el-menu default-active="/carTitle" class="el-menu-vertical-demo" router="true">
          <el-submenu index="/">
            <template slot="title">
              <i class="el-icon-message"></i>
              <span slot="title">北斗及时通信 &nbsp;&nbsp; &nbsp;&nbsp;</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="/carTitle">通信列表</el-menu-item>
              <el-menu-item index="1-2">通信历史</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-submenu index="2">
            <template slot="title">
              <i class="el-icon-menu"></i>
              <span slot="title">北斗通信设置</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="1-1">系统设置</el-menu-item>
              <el-menu-item index="1-2">北斗卡设置</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-submenu index="3">
            <template slot="title">
              <i class="el-icon-setting"></i>
              <span slot="title">北斗卡使用审批</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="1-1">申请列表</el-menu-item>
              <el-menu-item index="1-2">审批列表</el-menu-item>
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
      // activeIndex: '1',
      // activeIndex2: '1'
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




