<template>
  <el-scrollbar class="app-sidebar">
    <el-menu :collapse="isCollapse" :default-active="defaultActive">
      <SidebarItem v-for="menu in menus" :key="menu.path" :item="menu" />
    </el-menu>
  </el-scrollbar>
</template>

<script>
import { mapState } from "vuex";
import SidebarItem from "./sidebar-item.vue";
export default {
  components: { SidebarItem },
  computed: {
    ...mapState("app", ["sidebarOpened"]),
    ...mapState("permission", ["menus"]),
    defaultActive() {
      let { meta, path } = this.$route;
      if (meta.activeMenu) {
        return meta.activeMenu;
      }
      return path;
    },
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
