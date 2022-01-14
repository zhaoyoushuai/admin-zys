<template>
  <div class="app-breadcrumb">
    <hamburger class="hamburger-wrapper" />
    <span class="breadcrumb-text">当前位置：{{ locations }}</span>
  </div>
</template>
<script>
import Hamburger from "./hamburger";

export default {
  components: {
    Hamburger,
  },
  computed: {
    locations() {
      const matched = this.$route.matched.filter(
        (item) => item.meta && item.meta.title
      );
      return matched.map((m) => m.meta.title).join(" / ");
    },
  },
};
</script>
<style lang="scss" scoped>
.app-breadcrumb {
  position: absolute;
  z-index: 1000;
  left: 0;
  top: 0;
  right: 0;
  display: flex;
  align-items: center;
  height: 50px;
  background-color: #fff;
  box-shadow: 0px 2px 6px 0px rgba(0, 0, 0, 0.1);
  .breadcrumb-text {
    margin-left: 10px;
  }
}
</style>
