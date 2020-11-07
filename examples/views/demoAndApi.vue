<template>
  <div class="comp">
    <h1>Button</h1>
    <div class="comp-content">
      <Button primary>确定</Button>
      <Button>取消</Button>
    </div>
    <h1>Modal</h1>
    <div class="comp-content">
      <Button primary
              @click="toggleModal">{{modalVisible ? '隐藏' : '显示'}}</Button>
      <Modal v-model="modalVisible"
             v-bind="modalProps"
             :styles="modalStyle">this is content!</Modal>
    </div>
  </div>
</template>

<script>
// import comps from '../../components';
export default {
  data () {
    return {
      modalVisible: false,
      modalStyle: {
        top: '20%',
        width: '70%'
      },
      modalProps: {
        title: 'Modal Demo',
        okText: 'ok',
        cancelText: 'cancel',
        ok: this.okFun,
        cancel: this.cancelFun
      }
    }
  },
  // components: comps,
  methods: {
    toggleModal () {
      this.modalVisible = !this.modalVisible;
    },
    okFun () {
      this.modalVisible = false;
      console.log('ok out');
    },
    cancelFun () {
      this.modalVisible = false;
      console.log('cancel out');
    }
  },
}
</script>

<style lang="less" scoped>
.comp {
  margin-top: 20px;
  border-top: 1px solid #ddd;
}
.comp-content {
  padding: 10px;
  border: 1px solid #ddd;
}
</style>