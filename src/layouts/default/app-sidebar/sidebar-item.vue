<template>
  <div></div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "SidebarItem",
  computed: {
    ...mapState("permission", ["menus"]),
  },
};
</script>
<style lang="scss" scoped></style>
