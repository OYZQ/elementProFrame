<template>
  <div class="my--demo">
    <div class="demo-button">
      <MyViewCode title="【msg提示】">
        <MyButton type="primary" @click="openMsgInfo">普通信息提示</MyButton>
        <MyButton type="primary" @click="openMsgSuccess">成功信息提示</MyButton>
        <MyButton type="primary" @click="openMsgWarn">警告信息提示</MyButton>
        <MyButton type="primary" @click="openMsgError">报错信息提示</MyButton>
        <MyButton type="primary" @click="openMsgInfoDetails">普通信息提示有详情</MyButton>
        <MyButton type="primary" @click="openMsgErrorDetails">报错信息提示有提示</MyButton>
        <MyButton type="primary" @click="closePopup">关闭msg提示</MyButton>
      </MyViewCode>
      <MyViewCode title="【提示窗】">
        <MyButton type="primary" @click="openDialogSuccess">成功</MyButton>
        <MyButton type="primary" @click="openDialogFail">失败</MyButton>
        <MyButton type="primary" @click="openDialogWarn">警告</MyButton>
        <MyButton type="primary" @click="openDialogQuestion">疑问</MyButton>
        <MyButton type="primary" @click="openDialogAlert">消息提示</MyButton>
        <MyButton type="primary" @click="openDialogConfirm">确认</MyButton>
      </MyViewCode>
      <MyViewCode title="【通知】" class="width49b float-left">
        <MyButton type="primary" @click="showNotice">通知</MyButton>
        <MyButton type="primary" @click="closeNotice">关闭通知</MyButton>
      </MyViewCode>
      <MyViewCode title="【后台报错】" class="width49b float-right">
        <MyButton type="primary" @click="openErrorHanlder">后台报错</MyButton>
      </MyViewCode>
      <MyViewCode title="【dialog弹出窗】" class="width49b float-left">
        <MyButton type="primary" @click="openDialog">弹窗不带遮罩</MyButton>
        <MyButton type="primary" @click="openDialog2">弹窗带遮罩</MyButton>
      </MyViewCode>
      <MyViewCode title="【tip弹出层】" class="width49b float-right">
        <MyPopover
          placement="top-start"
          width="144"
          class="marginr10"
          trigger="click"
          v-model="isPopoverShow1"
        >
          <div class="popover-content">这是一段内容这是一段内容这是一段内容</div>
          <MyButton type="primary" slot="reference">上</MyButton>
        </MyPopover>

        <MyPopover
          placement="bottom-start"
          width="144"
          class="marginr10"
          trigger="click"
          v-model="isPopoverShow2"
        >
          <div class="popover-content">这是一段内容这是一段内容这是一段内容</div>
          <MyButton type="primary" slot="reference">下</MyButton>
        </MyPopover>
        <MyPopover
          placement="left-start"
          width="144"
          class="marginr10"
          trigger="click"
          v-model="isPopoverShow3"
        >
          <div class="popover-content">这是一段内容这是一段内容这是一段内容</div>
          <MyButton type="primary" slot="reference">左</MyButton>
        </MyPopover>
        <MyPopover
          placement="right-start"
          width="144"
          class="marginr10"
          trigger="click"
          v-model="isPopoverShow4"
        >
          <div class="popover-content">这是一段内容这是一段内容这是一段内容</div>
          <MyButton type="primary" slot="reference">右</MyButton>
        </MyPopover>
        <MyPopover
          placement="rightD-start"
          width="200"
          popper-class="popComform"
          class="marginr10"
          trigger="click"
          v-model="isPopoverShow5"
        >
          <div class="popover-content">
            <i class="el-icon-warning"></i>你确定关闭这项业务？
          </div>
          <div class="tip-footer">
            <MyButton size="mini" @click="isPopoverShow5 = false">取消</MyButton>
            <MyButton type="primary" size="mini" @click="isPopoverShow5 = false">确定</MyButton>
          </div>
          <MyButton type="primary" slot="reference">PopComfirm</MyButton>
        </MyPopover>
      </MyViewCode>
      <MyViewCode title="【Top Center 提示文字】" style="clear:both">
        <MyTooltip class="item" effect="dark" content="Top Center 提示文字" placement="top">
          <MyButton>上</MyButton>
        </MyTooltip>
      </MyViewCode>
      <MyViewCode title="【drawer抽屉】">
        <MyButton @click="drawer = true" type="primary">点击打开</MyButton>
        <MyDrawer title="这里是标题" size="500px" :visible.sync="drawer" :direction="dir">
          <div>这里是内容</div>
        </MyDrawer>
      </MyViewCode>
      <MyViewCode title="【Top Center 提示文字】" style="clear:both">
        <MyTooltip class="item" effect="dark" content="Top Center 提示文字" placement="top">
          <MyButton>上</MyButton>
        </MyTooltip>
      </MyViewCode>
      <!-- dialog弹窗不带遮罩start -->
      <MyDialog :visible.sync="dialogVisible1" title="弹窗不带遮罩" :modal="false">
        弹窗内容弹窗内容弹窗内容弹窗内容弹窗内容弹窗内容
        <span slot="footer" class="dialog-footer">
          <MyButton @click="dialogVisible1 = false">取消</MyButton>
          <MyButton type="primary" @click="dialogVisible1 = false">确定</MyButton>
        </span>
      </MyDialog>
      <!-- dialog弹窗不带遮罩end -->
      <!-- dialog弹窗带遮罩start -->
      <MyDialog :visible.sync="dialogVisible2" title="弹窗带遮罩" :modal="true">
        弹窗内容弹窗内容弹窗内容弹窗内容弹窗内容弹窗内容
        <span slot="footer" class="dialog-footer">
          <MyButton @click="dialogVisible2 = false">取消</MyButton>
          <MyButton type="primary" @click="dialogVisible2 = false">确定</MyButton>
        </span>
      </MyDialog>
      <!-- dialog弹窗带遮罩end -->
    </div>
  </div>
</template>
<script>
import MyViewCode from '@/components/base/MyViewCode/MyViewCode'
// import sourceCode1 from './sourceCode1.js'
export default {
  name: 'dialogDemo',
  components: {
    MyViewCode,
  },
  data() {
    return {
      // sourceCode1: sourceCode1,
      // 报错信息
      errorArr: ['第一个报错', '第二个报错', '第三个报错'],
      dialogVisible1: false,
      dialogVisible2: false,
      isPopoverShow1: false,
      isPopoverShow2: false,
      isPopoverShow3: false,
      isPopoverShow4: false,
      isPopoverShow5: false,
      drawer:false,
      dir:'rtl',// rtl向右 ，ltr向左，ttb向下，btt向上
    }
  },
  methods: {
    // 提示msg
    openMsgInfo() {
      this.MyPopup.showMsg({
        message: '普通提示信息',
        showClose: true,
      })
    },
    // 成功提示msg
    openMsgSuccess() {
      this.MyPopup.showSuccessMsg({
        message: '成功提示信息',
        showClose: true,
      })
    },
    // 警告提示信息
    openMsgWarn() {
      this.MyPopup.showWarnMsg({
        message: '警告提示信息',
        showClose: true,
      })
    },
    // 报错提示信息
    openMsgError() {
      this.MyPopup.showErrorMsg({
        message: '报错提示信息',
        showClose: true,
      })
    },
    // 提示msg含有详情
    openMsgInfoDetails() {
      this.MyPopup.showMsg({
        dangerouslyUseHTMLString: true,
        message:
          '<div class="el-message-info-details">普通提示信息<span>查看详情</span></div>',
      })
    },
    // 报错提示msg含有详情
    openMsgErrorDetails() {
      this.MyPopup.showWarnMsg({
        dangerouslyUseHTMLString: true,
        message:
          '<div class="el-message-warn-details">普通错误提示信息<span>查看详情</span></div>',
      })
    },
    // 关闭所有msg
    closePopup() {
      this.MyPopup.closeAllMsg()
    },
    // 成功弹窗
    openDialogSuccess() {
      this.MyPopup.showSuccess({
        title: '操作成功',
        message: '<div>关于成功的提示信息</div>',
        dangerouslyUseHTMLString: true,
        showClose: false,
        center: true,
        callback: (action) => {
          window.console.log('您点击了' + action)
        },
      })
    },
    // 失败弹窗
    openDialogFail() {
      this.MyPopup.showFail({
        title: '确定要删除这条信息吗？',
        message: '<div>关于删除的提示信息</div>',
        dangerouslyUseHTMLString: true,
        showClose: false,
        center: true,
        callback: (action) => {
          window.console.log('您点击了' + action)
        },
      })
    },
    //警告弹窗
    openDialogWarn() {
      this.MyPopup.showWarn({
        title: '操作提示',
        message: '<div>提示信息</div>',
        dangerouslyUseHTMLString: true,
        showClose: false,
        center: true,
        showCancelButton: false,
        comfirmButtonText: '提交后级',
        callback: (action) => {
          window.console.log('您点击了' + action)
        },
      })
    },
    // 疑问弹窗
    openDialogQuestion() {
      this.MyPopup.showQuestion({
        title: '是否结束？',
        message: '<div>你可以直接提交结束申请</div>',
        dangerouslyUseHTMLString: true,
        iconClass: 'el-icon-question',
        showClose: false,
        center: true,
        cancelButtonText: '返回修改',
        comfirmButtonText: '结束',
        callback: (action) => {
          window.console.log('您点击了' + action)
        },
      })
    },
    // 通知
    openDialogAlert() {
      this.MyPopup.showAlert({
        title: '提示',
        message: '这是一条不会自动关闭的消息',
        showClose: true,
        duration: 0,
        customClass: 'alertDialog',
        confirmButtonText: '知道了',
      })
    },
    // 确认弹窗
    openDialogConfirm() {
      this.MyPopup.showConfirm({
        title: '标题',
        message: '确定点击成功按钮吗？',
        confirmCallBack: (action) => {
          window.console.log('您点击了' + action)
        },
        cancelCallBack: (action) => {
          window.console.log('您点击了' + action)
        },
      })
    },
    // 通知
    showNotice() {
      this.MyPopup.showNotice({
        title: '提示',
        message: '这是一条不会自动关闭的消息',
        duration: 0,
        showClose: true,
      })
    },
    // 关闭通知
    closeNotice() {
      this.MyPopup.closeAllNotice()
    },
    // 后台报错弹窗
    openErrorHanlder() {
      this.MyPopup.errorHanlder({
        messageArr: this.errorArr,
      })
    },
    // 打开弹窗不带遮罩
    openDialog() {
      this.dialogVisible1 = true
    },
    // 打开弹窗带遮罩
    openDialog2() {
      this.dialogVisible2 = true
    },
  },
}
</script>
<style lang="scss" scoped>
.setIcon {
  color: red;
  font-size: 24px;
}
.el-drawer__body {
  height: 100%;
  overflow: auto;
  padding: 0 20px;
}
.el-drawer {
  .demo-drawer__content {
    padding-bottom: 60px;
    .demo-drawer__footer {
      z-index: 1000;
      width: 100%;
      height: 54px;
      position: absolute;
      left: 0;
      right: 0;
      bottom: 0;
      background: #fff;
      .drawerFooterBtn {
        width: 160px;
        margin: 12px auto;
      }
    }
  }
}
</style>
<style scoped lang="scss" src="@/styles/modules/demo/index.scss"></style>

