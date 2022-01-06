//components/Icon-svg
<template>
  <svg class="i-icon" aria-hidden="true">
    <use :xlink:href="iconName"></use>
  </svg>
</template>

<script>
export default {
  name: "i-icon",
  props: {
    icon: {
      type: String,
      required: true,
    },
  },
  computed: {
    iconName() {
      return `#icon-${this.icon}`;
    },
  },
};
</script>

<style>
.i-icon {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
</style>
