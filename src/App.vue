<template>
  <div id="app">
    <el-menu theme="dark" default-active="/map" class="el-menu-demo" mode="horizontal" :router="true">
      <img src="">
      <el-menu-item index="/map" :class="{'isActive': active}">海图监控</el-menu-item>
      <el-menu-item index="/bdManage" :class="{'isActive': !active}">北斗管理</el-menu-item>
      <el-menu-item index="/bdCommunication">北斗通信</el-menu-item>
      <el-menu-item index="/stystem">系统设置</el-menu-item>
    </el-menu>

    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
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

<style scoped>
@import '/static/css/rset.css';
@import "../static/css/main.css";
@import "../static/css/color-dark.css";
#app {
  margin: 0;
  padding: 0;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100%;
}
</style>
