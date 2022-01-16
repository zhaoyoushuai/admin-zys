<template>
  <el-submenu index="2" v-if="item.children">
    <template slot="title">
      <i-icon v-if="item.icon" :icon="item.icon" />
      <span>{{ item.name }}</span>
    </template>
    <sidebar-item
      v-for="child in item.children"
      :key="child.path"
      :item="child"
      :basePath="item.path"
    />
  </el-submenu>
  <el-menu-item
    v-else
    :index="resolvePath(item.path)"
    @click="handleItemClick(resolvePath(item.path))"
  >
    <i-icon v-if="item.icon" :icon="item.icon" />
    <span slot="title">{{ item.name }}</span>
    <span slot="title">{{ item.basePath }}</span>
  </el-menu-item>
</template>

<script>
import path from "path";
export default {
  name: "SidebarItem",
  props: {
    item: {
      type: Object,
    },
    basePath: {
      type: String,
      default: "",
    },
  },
  methods: {
    handleItemClick(path) {
      console.log(path);
      this.$router.push(path);
    },
    resolvePath(routePath) {
      return path.resolve(this.basePath, routePath);
    },
  },
  created() {},
};
</script>
<style lang="scss" scoped></style>
