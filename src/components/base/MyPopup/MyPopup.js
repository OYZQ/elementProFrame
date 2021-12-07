import Vue from 'vue';
import {
  Message,
  MessageBox,
  Notification
} from 'element-ui';

/**
 * 类型判断
 * @param obj 需要判断类型的变量
 * @return {*} 返回判断的结果
 */
function typeOf(obj) {
  const toString = Object.prototype.toString;
  const map = {
    'object Boolean': 'boolean',
    '[object Number]': 'number',
    '[object String]': 'string',
    '[object Function]': 'function',
    '[object Array]': 'array',
    '[object Date]': 'date',
    '[object RegExp]': 'regExp',
    '[object Undefined]': 'undefined',
    '[object Null]': 'null',
    '[object Object]': 'object'
  };
  return map[toString.call(obj)];
}

const MyPopup = options => {
  let popupType = options.popupType;
  if (popupType == "msg") {
    Message(options);
  } else if (popupType == 'dialog') {
    let type = options.type;
    if (type == 'confirm') { // 确认框
      MessageBox.confirm(options.message, options.title, options).then(action => {
        if (typeOf(options.confirmCallBack) == 'function') {
          options.confirmCallBack(action)
        }
      }).catch(action => {
        if (typeOf(options.confirmCallBack) == 'function') {
          options.cancelCallBack(action)
        }
      })
    } else if (type == 'errorHanlder') { // 后台业务报错处理
      let messageArr = options.messageArr || [];
      if (messageArr.length > 0) {
        let errorHtml = '<ul class="error-list">'
        messageArr.forEach(item => {
          errorHtml += '<li><i class="el-icon-warning-outline"></i>' + item + '</li>';
        });
        errorHtml += '</ul>';
        options.message = errorHtml;
        MessageBox.alert(options.message, options.title,options).catch(err => {
          window.console.log(err)
        })
      }
    } else { // 弹窗
      MessageBox.confirm(options.message,options.title,options).catch(err => {
        window.console.log(err)
      })
    }
  } else if (popupType == 'notice') {
    Notification(options)
  } else if (popupType == 'alert') {
    MessageBox.alert(options.message, options.title, options).catch(err => {
      window.console.log(err)
    })
  }
}

/**
 * 默认option配置 msg
 */

MyPopup.defaultMsgOptions = {
  message: '', //消息文字
  type: 'info', //主题 string success/warning/info/error info
  iconClass: '', //自定义图标的类名，会覆盖
  dangerouslyUseHTMLString: false, //是否将message 属性作为HTML片段处理
  customClass: '', // 自定义类名
  duration: 2000, //显示时间，毫秒。设为0则不会自动关闭
  showClose: false, //是否显示关闭按钮
  center: false, //文字是否居中
  onClose: null, // 关闭时的回到函数，参数为被关闭的message实例
  offset: 20, // Message距离窗口顶部的偏移量
}

/**
 * 默认option配置 dialog
 */
MyPopup.defaultDialogOptions = {
  title: '', //标题
  message: '', //消息正文内容
  type: '', //消息类型，用于显示图标 success/info/warning/error info
  showClose: true, //是否显示右上角关闭按钮
  lockScroll: true, // 
  closeOnClickModal: false, //是否可通过点击遮罩关闭弹窗 true(以alert方式调用时为false)
  confirmCallBack: null, //确定按钮回调
  cancelCallBack: null, //取消按钮回调
  cancelButtonClass: 'button-white', //取消按钮的自定义类名
}

/**
 * msg info提示配置
 * @param options
 * @returns {*}
 */

MyPopup.showMsg = options => MyPopup({
  ...MyPopup.defaultMsgOptions,
  popupType: 'msg',
  type: 'info',
  ...options
})

/**
 * msg success提示配置
 * @param options
 * @returns {*}
 */

MyPopup.showSuccessMsg = options => MyPopup({
  ...MyPopup.defaultMsgOptions,
  popupType: 'msg',
  type: 'success',
  customClass: 'el-message--success', //自定义类名
  ...options
});

/**
 * msg warn提示配置
 * @param options
 * @returns {*}
 */

 MyPopup.showWarnMsg = options => MyPopup({
  ...MyPopup.defaultMsgOptions,
  popupType: 'msg',
  type: 'warning',
  customClass: 'el-message--warning', //自定义类名
  ...options
});

/**
 * msg error提示配置
 * @param options
 * @returns {*}
 */

 MyPopup.showErrorMsg = options => MyPopup({
  ...MyPopup.defaultMsgOptions,
  popupType: 'msg',
  type: 'error',
  customClass: 'el-message--error', //自定义类名
  ...options
});

/**
 * dialog success提示配置
 * @param options
 * @returns {*}
 */

 MyPopup.showSuccess = options => MyPopup({
  ...MyPopup.defaultDialogOptions,
  popupType: 'dialog',
  type: 'success',
  // customClass: 'el-message--success', //自定义类名
  ...options
});

/**
 * dialog warn提示配置
 * @param options
 * @returns {*}
 */

 MyPopup.showWarn = options => MyPopup({
  ...MyPopup.defaultDialogOptions,
  popupType: 'dialog',
  type: 'warning',
  // customClass: 'el-message--success', //自定义类名
  ...options
});

/**
 * dialog question提示配置
 * @param options
 * @returns {*}
 */

 MyPopup.showQuestion = options => MyPopup({
  ...MyPopup.defaultDialogOptions,
  popupType: 'dialog',
  type: 'info',
  // customClass: 'el-message--success', //自定义类名
  ...options
});

/**
 * dialog error提示配置
 * @param options
 * @returns {*}
 */

 MyPopup.showFail = options => MyPopup({
  ...MyPopup.defaultDialogOptions,
  popupType: 'dialog',
  type: 'error',
  // customClass: 'el-message--success', //自定义类名
  ...options
});

/**
 * dialog confirm提示配置
 * @param options
 * @returns {*}
 */

 MyPopup.showConfirm = options => MyPopup({
  ...MyPopup.defaultDialogOptions,
  popupType: 'dialog',
  type: 'confirm',
  // customClass: 'el-message--success', //自定义类名
  cancelButtonClass:'el-button--primary-plain',
  ...options
});
/**
 * dialog confirm配置
 * @param {*} options 
 * @returns 
 */
MyPopup.errorHanlder = options => MyPopup({
  ...MyPopup.defaultDialogOptions,
  popupType:'dialog',
  type:'errorHanlder',
  showConfirmButton:false,// 是否显示确定按钮
  showCancelButton:false,//是否显示取消按钮
  dangerouslyUseHTMLString:true,//是否将message属性作为HTML片段处理
  customClass:'errorHanlder',// 自定义类名
  ...options
})


/**
 * notice提示配置
 * @param options
 * @returns {*}
 */

 MyPopup.showNotice = options => MyPopup({
  popupType: 'notice',
  ...options
});

/**
 * alert提示配置
 * @param options
 * @returns {*}
 */

 MyPopup.showAlert = options => MyPopup({
  popupType: 'alert',
  ...options
});
/**
 * close提示配置
 * @param options
 * @returns {*}
 */

 MyPopup.closeAllNotice = options => {
   Notification.closeAll()
 }
/**
 * close
 * @param options
 * @returns {*}
 */

 MyPopup.closeAllMsg = options => {
   Message.closeAll()
 }

 Vue.prototype.MyPopup = MyPopup;
 export default MyPopup;