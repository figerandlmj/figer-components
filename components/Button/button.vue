<template>
  <button class="my-btn"
          :class="{'btn-primary': primary}"
          @click="onClick">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'Button',
  props: {
    primary: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    onClick () {
      this.$emit('click');
    }
  },
};
</script>

<style lang="less" scoped>
@import "../common/index";
.my-btn {
  display: inline-block;
  line-height: 1.5;
  padding: 5px 15px;
  font-size: @font-size;
  font-weight: 400;
  text-align: center;
  background-color: #fff;
  border: 1px solid @grey;
  border-radius: 4px;
  cursor: pointer;
  &:focus,
  &:hover {
    color: @primary-color-light;
    border-color: @primary-color-light;
  }
  &.btn-primary {
    color: #fff;
    background-color: @primary-color;
    border-color: @primary-color;
    &:focus,
    &:hover {
      color: #fff;
      background-color: @primary-color-light;
      border-color: @primary-color-light;
    }
  }
}
</style>