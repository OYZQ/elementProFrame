<template>
  <div style="position:realtive;z-index:9999;" v-if="show">
    <el-dialog
      v-dragDialog
      append-to-body
      :title="title"
      :visible.sync="show"
      :width="getWidth()"
      :center="center"
      :before-close="handleClose"
      :close-on-click-modal="false"
    >
      <div class="contentCore">
        <div class="popupCore innerbox" :style="{height:getHeight}">
          <!-- 自定义插槽（可传入一些组件在弹窗中使用） -->
          <slot name="customize"></slot>
        </div>
        <!-- 底部按钮事件插槽 -->
        <span slot="footer" class="dialog-footer w-100 d-flex jc-end ai-center mt-3">
          <slot name="btns" :data="model"></slot>
        </span>
      </div>
    </el-dialog>
  </div>
</template>

<script >
export default {
  directives:{
    'dragDialog':{
      bind(el) {
        el.getElementsByClassName('el-dialog__header')[0].style.cursor = 'move';
        el.getElementsByClassName('el-dialog__header')[0].addEventListener('mousedown', function(e) {
          const elDialog = el.getElementsByClassName('el-dialog')[0];
          const initClientX = e.clientX;
          const initClientY = e.clientY;
          const initStyleLeft = elDialog.style.left ? elDialog.style.left.replace('px','') - 0 : 0;
          const initStyleTop = elDialog.style.top ? elDialog.style.top.replace('px','') - 0 : 0;
      
          document.onmousemove = function(e){
            const moveX = e.clientX - initClientX + initStyleLeft;
            const moveY = e.clientY - initClientY + initStyleTop;
            elDialog.style.left = moveX + "px";
            elDialog.style.top = moveY + "px";
          }
      
          document.onmouseup = function(e){
            document.onmousemove = null;
            document.onmouseup = null;
          };
          // 不加return false的话可能导致黏连，就是拖到一个地方时div粘在鼠标上不下来，相当于onmouseup失效
          return false;
        }, false)
      },
      update(el, binding, vnode, old) {
        // 实现每次打开 Dialog 都复位到中央
        setTimeout(() => {
          if (el.style.display === 'none') {
            el.getElementsByClassName('el-dialog')[0].style.top = '';
            el.getElementsByClassName('el-dialog')[0].style.left = '';
          }
        }, 333); // Dialog 的关闭动画用时 300 毫秒，因此这里需要延迟执行，而且要多延迟一点点
      },
    },
  },
  props:{
    show:{ // 弹窗显隐藏
      type: Boolean,
      default: false
    },
    title:{ // 弹窗名字
      type: String,
      default: '提示'
    },
    width:{ // 弹窗宽度
      default: '30'
    },
    center:{ // 文字及标题居中
      type: Boolean,
      default: false
    },
    model:{ // 当弹窗类型拥有表单功能时，model即为存储表单数据的容器,同时便于数据回显
      type: Object,
      default(){
        return {}
      }
    },
    height:{
      type: Number,
      default: 0
    }
  },
  watch:{
    show:{
      handler(n,o){
        console.log(n)
        if (!n) {
          const arr = Object.keys(this.model);
          arr.forEach((v) => {
            this.$set(this.model, v, '');
          });
          this.$emit('update:model', this.model);
        }
      }
    }
  },
  methods:{
    // eslint-disable-next-line getter-return
    getWidth() {
      if (Number(this.width) >= 100) return `${this.width}px`;
      if (Number(this.width) < 100 && Number(this.width) > 0) return `${this.width}%`;
    },

    // eslint-disable-next-line getter-return
    getHeight() {
      if (this.height > 60) return `${this.height}px`;
      if (this.height <= 60 && this.height > 0) return `${this.height}vh`;
    },

    // 弹窗关闭图标的回调事件
    handleClose() {
      const arr = Object.keys(this.model);
      arr.forEach((v) => {
        this.$set(this.model, v, '');
      });
      this.$emit('update:model', this.model);
      this.$emit('update:show', false);
      this.$emit('showClose')
    },

    closeDialog() {
      const arr = Object.keys(this.model);
      arr.forEach((v) => {
        this.$set(this.model, v, '');
      });
      this.$emit('update:model', this.model);
      this.$emit('update:show', false);
    }
  }
}
</script>

<style lang="scss" scoped>
/deep/ .el-dialog__header {
  // background-color: $themePopColor;
  background-color: green;
  border-radius: 0;
  .el-dialog__title {
    color: white;
  }
  .el-dialog__close {
    color: white;
  }
  .el-dialog__headerbtn>i{
    background-color: transparent;
    opacity: 1;
  }
}

.el-header {
  background-color: #fff;
  color: #333;
  line-height: 60px;
  border-bottom: 1px solid #ccc;
}
/deep/ .el-dialog__body{
  padding: 15px;
}
/deep/ .el-dialog__title{
  font-size: 15px;
}
.contentCore{
  width: 100%;
  overflow: auto;
  // max-height: 60vh;
  display: flex;
  padding: 0px 20px;
  box-sizing: border-box;
  align-items: center;
  // justify-content: center;
  flex-wrap: wrap;
  .popupCore{
    width: 100%;
    // overflow: auto;
    // overflow-x: hidden;
    // max-height: 60vh;
  }
}

/deep/ .el-icon-date,/deep/ .el-icon-arrow-up {
  width: 14px;
}
/deep/ .el-icon-circle-close {
  z-index: 1;
  right: 14px !important;
}
/deep/ .el-select__caret.el-icon-circle-close {
  z-index: 1;
  right: 8px !important;
}
/deep/ .el-input--prefix .el-input__inner{
  padding-right: 40px;
  padding-left: 10px;
}
/deep/ .el-input--suffix .el-input__inner{
  padding-right: 40px;
}
/deep/ .el-dialog .el-dialog__body {
  min-height: auto;
}
</style>
