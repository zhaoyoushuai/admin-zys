<template>
  <div class="app-wrapper" :class="classApp">
    <div class="drawer-bg" @click="handleClickOutside"></div>
    <app-header></app-header>
    <app-sidebar></app-sidebar>
    <div class="app-container">
      <app-breadcrumb></app-breadcrumb>
      <app-main></app-main>
    </div>
  </div>
</template>

<script>
import AppHeader from "./app-header.vue";
import AppMain from "./app-main.vue";
import AppBreadcrumb from "./app-breadcrumb";
import AppSidebar from "./app-sidebar";
import { mapState } from "vuex";
export default {
  components: {
    AppMain,
    AppHeader,
    AppBreadcrumb,
    AppSidebar,
  },
  methods: {
    handleClickOutside() {
      this.$store.dispatch("app/setDevice", "mobile");
      this.$store.dispatch("app/setSidebar", 0);
    },
  },
  computed: {
    ...mapState("app", ["device", "sidebarOpened"]),

    classApp() {
      return {
        mobile: this.device === "mobile",
        "hide-sidebar": !this.sidebarOpened,
      };
    },
  },
};
</script>
<style lang="scss" scoped>
.app-wrapper {
  width: 100%;
  height: 100%;
  .drawer-bg {
    display: none;
    position: fixed;
    z-index: 1001;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.3);
  }

  .app-container {
    position: relative;
    z-index: 1000;
    margin-left: 200px;
    padding-top: 50px;
    height: calc(100vh - 60px);
    transition: margin-left 0.3s ease-in-out;
    overflow: auto;
  }
  &.hide-sidebar:not(.mobile) ::v-deep {
    .app-sidebar {
      width: 64px;
      .el-submenu__title .el-submenu__icon-arrow {
        display: none;
      }
      .title {
        opacity: 0;
      }
    }
    .app-container {
      margin-left: 64px;
    }
  }
  &.mobile {
    .drawer-bg {
      display: block;
    }
    .app-container {
      margin-left: 0;
    }
    &.hide-sidebar {
      .drawer-bg {
        display: none;
      }
      .app-sidebar {
        transform: translateX(-100%);
      }
    }
  }
}
</style>
