<template>
  <div v-show="visible"
       class="my-modal">
    <div class="modal-mask"></div>
    <div class="modal-wrap">
      <div class="modal-doc"
           :style="mStyle">
        <div class="modal-content animation-up">
          <button class="modal-close"
                  @click="cancelFun">X</button>
          <div class="modal-header">
            <div class="modal-title">{{title}}</div>
          </div>
          <div class="modal-body">
            <slot></slot>
          </div>
          <div class="modal-footer">
            <Button primary
                    @click="okFun">{{okText}}</Button>
            <Button @click="cancelFun">{{cancelText}}</Button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Button from './../Button';
export default {
  name: 'Modal',
  components: {
    Button
  },
  model: {
    prop: 'visible',
    event: 'change',
  },
  props: {
    visible: {
      type: Boolean,
      default: false
    },
    title: {
      type: String,
      default: 'Modal'
    },
    content: {
      type: String,
      default: ''
    },
    okText: {
      type: String,
      default: '确定'
    },
    cancelText: {
      type: String,
      default: '取消'
    },
    ok: {
      type: Function,
      default: () => 'default'
    },
    cancel: {
      type: Function,
      default: () => 'default'
    },
    styles: {
      type: Object,
      default: () => ({})
    }
  },
  data () {
    return {
      mStyle: { // 默认配置
        top: 100
      }
    };
  },
  created () {
    this.getModalStyle();
  },
  methods: {
    getModalStyle () {
      let style = this.mStyle;
      Object.assign(style, this.styles);
      for (let k in style) {
        if (!/[\D]/.test(style[k])) {
          style[k] += 'px';
        }
      }
      return style;
    },
    okFun () {
      if (this.ok() === 'default') {
        console.log('ok');
      }
    },
    cancelFun () {
      if (this.cancel() === 'default') {
        console.log('cancel');
      }
      this.$emit('change', false);
    }
  },
};
</script>

<style lang="less" scoped>
@import "../common/index";
@-webkit-keyframes animation-up {
  0% {
    opacity: 0;
    -webkit-transform: translateY(800px);
    transform: translateY(800px);
  }
  100% {
    opacity: 1;
    -webkit-transform: translateY(0);
    transform: translateY(0);
  }
}
@keyframes animation-up {
  0% {
    opacity: 0;
    -webkit-transform: translateY(80%);
    transform: translateY(80%);
  }
  100% {
    opacity: 1;
    -webkit-transform: translateY(0);
    transform: translateY(0);
  }
}
.animation-up {
  -webkit-animation-name: animation-up;
  animation-name: animation-up;
}

.my-modal {
  .modal-mask {
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.65);
    height: 100%;
    z-index: 1000;
  }
  .modal-wrap {
    position: fixed;
    overflow: auto;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 1000;
    outline: 0;
  }
  .modal-doc {
    font-size: @font-size;
    line-height: 1.5;
    color: rgba(0, 0, 0, 0.65);
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    list-style: none;
    position: relative;
    width: 80%;
    margin: 0 auto;
    padding-bottom: 24px;
  }
  .modal-content {
    position: relative;
    background-color: #fff;
    border: 0;
    border-radius: 4px;
    background-clip: padding-box;
    -webkit-box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
    -webkit-animation-duration: 0.2s;
    animation-duration: 0.2s;
  }
  .modal-close {
    position: absolute;
    right: 0;
    top: 0;
    z-index: 10;
    outline: 0;
    padding: 8px 12px;
    font-size: @font-size-large;
    font-weight: 700;
    line-height: 1;
    text-decoration: none;
    color: rgba(0, 0, 0, 0.45);
    border: 0;
    background: transparent;
    cursor: pointer;
    &:hover {
      color: rgba(0, 0, 0, 0.65);
    }
  }
  .modal-header {
    padding: 16px 24px;
    border-radius: 4px 4px 0 0;
    background: #fff;
    color: rgba(0, 0, 0, 0.65);
    border-bottom: 1px solid #e8e8e8;
  }
  .modal-title {
    margin: 0;
    font-size: @font-size-large;
    line-height: 1.5;
    font-weight: 500;
    color: rgba(0, 0, 0, 0.85);
  }
  .modal-body {
    padding: 24px;
    font-size: @font-size;
    line-height: 1.5;
    word-wrap: break-word;
  }
  .modal-footer {
    border-top: 1px solid #e8e8e8;
    padding: 10px 16px;
    text-align: right;
    border-radius: 0 0 4px 4px;
    button + button {
      margin-left: 8px;
      margin-bottom: 0;
    }
  }
}
</style>
