<template>
  <div class="home">
    this is home1
    <router-link to="/about">去aboute页面</router-link>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "Home",
  components: {},
  computed: {
    ...mapState,
  },
};
</script>
