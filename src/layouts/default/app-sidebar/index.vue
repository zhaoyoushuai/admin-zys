<template>
  <el-scrollbar class="app-sidebar">
    <el-menu :collapse="isCollapse">
      <el-menu-item index="1-1">
        <i-icon icon="home" />
        <span slot="title">选项2</span>
      </el-menu-item>
      <el-submenu index="2">
        <template slot="title">
          <i-icon icon="home" />
          <span>导航一</span>
        </template>
        <el-menu-item index="1-1">选项1</el-menu-item>
        <el-menu-item index="1-2">选项2</el-menu-item>
      </el-submenu>
    </el-menu>
  </el-scrollbar>
</template>

<script>
import { mapState } from "vuex";
export default {
  computed: {
    ...mapState("app", ["sidebarOpened"]),
    isCollapse() {
      if (this.device === "mobile") {
        return false;
      }
      return !this.sidebarOpened;
    },
  },
};
</script>
<style lang="scss" scoped>
@import "@/styles/variables";

.app-sidebar {
  position: fixed;
  left: 0;
  top: 60px;
  bottom: 0;
  z-index: 1002;
  width: 200px;
  transition: all 0.3s ease-in-out;
  overflow: hidden;
  user-select: none;
}

.app-sidebar ::v-deep {
  .el-scrollbar__wrap {
    overflow-x: hidden;
    background: #2b2b2d;
  }
  .el-scrollbar__bar.is-vertical {
    right: 0px;
  }
  .el-scrollbar__bar.is-horizontal {
    display: none;
  }
  .el-menu {
    width: 100%;
    border-right: 0;
    background-color: #2b2b2d;
    .el-menu-item,
    .el-submenu__title {
      font-family: PingFangSC-Semibold;
      font-weight: 600;
      font-size: 14px;
      color: #cdcdcd;
      .i-icon {
        margin: 0 4px;
        margin-right: 10px;
      }
      &.is-active {
        color: $--color-primary;
        background: transparent;
        &:before {
          content: "";
          position: absolute;
          left: 0;
          top: 21px;
          width: 2px;
          height: 14px;
          background: $--color-primary;
        }
      }
      &:hover,
      &:focus {
        background: transparent;
      }
    }
    .el-submenu {
      &.is-active {
        .el-submenu__title {
          color: $--color-primary;
        }
        .el-submenu__title:before {
          content: "";
          position: absolute;
          left: 0;
          top: 21px;
          width: 2px;
          height: 14px;
          background: $--color-primary;
        }
        .el-menu .el-menu-item:before {
          display: none;
        }
      }
    }
  }
}
</style>
