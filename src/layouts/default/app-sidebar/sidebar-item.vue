<template>
  <el-submenu
    :index="resolvePath(item.path)"
    v-if="hasOneShowingChild(item.children)"
  >
    <template v-if="!item.hidden">
      <template slot="title">
        <i-icon v-if="item.icon" :icon="item.icon" />
        <span class="title">{{ item.name }}</span>
      </template>
      <sidebar-item
        v-for="child in item.children"
        :key="child.path"
        :item="child"
        :basePath="item.path"
      />
    </template>
  </el-submenu>
  <el-menu-item
    v-else
    :index="resolvePath(item.path)"
    @click="handleItemClick(resolvePath(item.path))"
  >
    <template v-if="!item.hidden">
      <i-icon v-if="item.icon" :icon="item.icon" />
      <span class="title" slot="title">{{ item.name }}</span>
    </template>
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
    hasOneShowingChild(children = []) {
      const showingChildren = children.filter((item) => {
        if (item.hidden) {
          return false;
        } else {
          // Temp set(will be used if only has one showing child)
          this.onlyOneChild = item;
          return true;
        }
      });
      return showingChildren.length !== 0;
    },
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
