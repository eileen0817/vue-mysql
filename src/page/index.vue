<template>
  <div>
    <header>
      <div class="header-inner">
        <a class="icon-logo"></a>
        <el-menu
          :default-active="activeIndex"
          class="el-menu-demo"
          mode="horizontal"
          @select="handleSelect"
        >
          <el-menu-item index="1">首页</el-menu-item>
        </el-menu>
      </div>
    </header>
  </div>
</template>

<script>
export default {
  data() {
    return {
        activeIndex: '1',
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
    .icon-logo {
      display: inline-block;
      width: 32px;
      height: 32px;
      background: url(/static/images/logo.png) center center no-repeat;
      background-size: 100% 100%;
      cursor: pointer;
      margin: 0 15px;
    }
  }
}
</style>
