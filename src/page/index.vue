<template>
  <div>
    <header>
      <div class="header-inner">
        <div class="left-nav">
          <a class="icon-logo"></a>
          <el-menu
            :default-active="activeIndex"
            class="el-menu-demo"
            mode="horizontal"
            @select="handleSelect"
          >
            <el-menu-item index="1">
              <i class="el-icon-s-home"></i>首页
            </el-menu-item>
            <el-menu-item index="2">
              <i class="el-icon-position"></i>发现
            </el-menu-item>
          </el-menu>
        </div>

        <div>
          <el-menu 
            class="el-menu-demo"
            mode="horizontal"
            @select="handleSelect"
          > 
            <el-submenu index="2">
              <template slot="title"> <el-avatar src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"></el-avatar></template>
              <el-menu-item index="2-1">我的主页</el-menu-item>
              <el-menu-item index="2-2">选项2</el-menu-item>
              <el-menu-item index="2-3">选项3</el-menu-item>
            </el-submenu>
          </el-menu>
        </div>
      </div>
    </header>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeIndex: "1"
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },
    getList() {
      this.$fetch("http://10.1.82.29:3000/listUser").then(response => {
        console.log(response);
      });
    }
  }
};
</script>

<style lang="scss"> 
header {
  background-color: #fff;
  -webkit-box-shadow: 0 1px 3px rgba(26, 26, 26, 0.1);
  box-shadow: 0 1px 3px rgba(26, 26, 26, 0.1);
  background-clip: content-box;
  .header-inner {
    width: 1000px;
    margin: 0 auto;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    .icon-logo {
      display: inline-block;
      width: 32px;
      height: 32px;
      background: url(/static/images/logo.png) center center no-repeat;
      background-size: 100% 100%;
      cursor: pointer;
      margin: 0 15px;
    }
    .left-nav {
      display: flex;
      align-items: center;
    }
    .el-menu-item {
      font-size: 16px;
    }
  }
}
</style>
