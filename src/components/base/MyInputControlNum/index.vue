<template>
  <div :class="['numberControlWrap', alignClass]" ref="numberControlWrap">
    <MyInput
      :value="value"
      @blur="blur"
      @focus="focus"
      @input="input"
      @change="change"
      @paste.native.capture="paste"
      @keydown.native="keydown"
      v-bind="$attrs"
      ref="input"
    >
      <template :slot="slotItem" v-for="slotItem in Object.keys($slots)">
        <slot :name="slotItem"></slot>
      </template>
    </MyInput>
    <span
      class="shadowInput"
      @click="shadowFocus"
      v-show="shadowShow && !this.trueControlConfig.isCommaValid"
      :style="{ opacity: this.shadowOpacity }"
      ref="shadowInput"
      >{{ shadowVal }}</span
    >
  </div>
</template>

<script>
export default {
  name: "MyInputControlNum",
  props: {
    value: {
      type: null,
      default: "",
    },
    controlConfig: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  data() {
    return {
      shadowVal: this.value, // 遮罩在实际Input上面的span显示层（span遮罩是为了显示千分化）
      shadowShow: true, // span遮罩的显示隐藏
      defaultControlConfig: {
        increment: 1, // 键盘上下键增减值得刻度，默认1
        align: "left", //对齐方式-默认是left左对齐
        decimalsLength: "", //小数位
        isCommaValid: false, //接受或传递后台的值是否千分化
        commaVaild: true, //是否加千分符号-逗号，默认true加，false不加
        defaultValue: "", // 默认值
        needPaste: false, //是否可以粘贴，默认不可以
      },
      trueControlConfig: {}, //参数传的和默认的合并后的配置信息
      shadowOpacity: 1, // 为了显示出el-input的placeholder
      alignClass: "", //text-align:left;right;center;
    };
  },
  created() {
    //参数传的和默认的合并后的配置信息
    this.trueControlConfig = {
      ...this.defaultControlConfig,
      ...this.controlConfig,
    };
    //文字对齐方式
    this.alignClass = this.trueControlConfig.align;
    // 值为空时使用默认值
    if (
      this.value === null ||
      typeof this.value === "undefined" ||
      this.value === ""
    ) {
      this.shadowVal = this.trueControlConfig.defaultValue + "";
      this.$emit("input", this.trueControlConfig.defaultValue + "");
    }
    if (this.shadowVal.trim().length === 0) {
      this.shadowOpacity = 0;
    } else {
      this.shadowOpacity = 1;
    }
  },
  mounted() {
    this.setShadowCss();
  },
  methods: {
    input(e) {
      e = e + "";
      e = e.replace(/[^0-9.-]/g, "");
      let formatVal = this.controlFormat(e);
      this.shadowVal = formatVal.shadowVal;
      this.$emit("input", formatVal.inputVal);
    },
    blur() {
      this.shadowShow = true;
      if (this.shadowVal.trim().length === 0) {
        this.shadowOpacity = 0;
      } else {
        this.shadowOpacity = 1;
      }
      this.shadowVal = this.decimalPad(this.shadowVal);
      let iptVal = this.decimalPad(this.value);
      if (this.trueControlConfig.isCommaValid) {
        this.$emit("input", this.shadowVal);
      } else {
        this.$emit("input", iptVal);
      }
      this.$emit("blur");
    },
    focus() {
      if (this.trueControlConfig.isCommaValid) {
        let val = (this.value + "").split(",").join("");
        this.$emit("input", val);
      }
      this.$emit("focus");
    },
    //粘贴事件
    paste(e) {
      if (!this.trueControlConfig.needPaste) {
        //禁止粘贴
        if (e) {
          e.preventDefault();
        } else {
          window.event.returnValue = false;
        }
        return false;
      }
    },
    // 键盘上下键增减值得刻度
    keydown(e) {
      let step = this.trueControlConfig.increment;
      if (isNaN(Number(step))) {
        return;
      }
      if (e.keyCode == 38) {
        this.input(this.exactFloat([this.value, step], "add"));
      }
      if (e.keyCode == 40) {
        this.input(this.exactFloat([this.value, step], "reduce"));
      }
    },
    // 键盘上下键增减，加减控制浮点数精度
    exactFloat(nums, type) {
      // 取小数位最多的
      let decimals = [];
      let decimallength = 0;
      nums.forEach((item) => {
        let decimal = String(item).split(".")[1] || "";
        decimals.push(decimal.length);
      });
      decimallength = Math.max.apply(null, decimals);
      let result = nums.reduce((a, b) => {
        if (type === "add") {
          return (
            (a * Math.pow(10, decimallength) +
              b * Math.pow(10, decimallength)) /
            Math.pow(10, decimallength)
          );
        }
        if (type === "reduce") {
          return (
            (a * Math.pow(10, decimallength) -
              b * Math.pow(10, decimallength)) /
            Math.pow(10, decimallength)
          );
        }
      });
      return result;
    },
    shadowFocus() {
      this.shadowShow = false;
      this.$refs.input.focus();
    },
    change() {
      this.$emit("change");
    },
    decimalPad(e) {
      //用0补足小数位
      if (e === "") {
        return "";
      }
      if (this.trueControlConfig.decimalsLength === "") {
        return e;
      }
      let splitArr = e.split(".");
      let decimal = splitArr[1] || "";
      decimal = decimal.padEnd(this.trueControlConfig.decimalsLength, 0);
      if (decimal === "") {
        return `${splitArr[0]}`;
      }
      return `${splitArr[0]}.${decimal}`;
    },
    controlFormat(e) {
      let result = {
        shadowVal: e,
        inputVal: e,
      };
      // decimalsLength小数
      let regDecimalStr =
        "^\\-?\\d*(?:\\.\\d{0," + this.trueControlConfig.decimalsLength + "})?";
      let regDecimal = new RegExp(regDecimalStr);
      let decimalMatchStr = e.match(regDecimal) || [""];
      e = decimalMatchStr[0].replace(/^(-\.)(.*)/, "-0.$2");
      e = decimalMatchStr[0].replace(/^(\.)(.*)/, "0.$2");
      result.inputVal = result.shadowVal = e;
      // max最大值
      let max = this.$attrs.max;
      if (
        max !== "" &&
        (typeof max === "number" || typeof max === "string") &&
        !isNaN(Number(max))
      ) {
        if (parseFloat(e) > parseFloat(max)) {
          result.inputVal = result.shadowVal = e = this.decimalPad(max);
        }
      }
      //min最小值
      let min = this.$attrs.min;
      if (
        min !== "" &&
        (typeof min === "number" || typeof min === "string") &&
        !isNaN(Number(min))
      ) {
        if (parseFloat(e) < parseFloat(min)) {
          result.inputVal = result.shadowVal = e = this.decimalPad(min);
        }
      }
      // commaValid千分符号-逗号
      if (this.trueControlConfig.commaVaild) {
        let intVal = e.split(".")[0];
        let decimalVal = e.split(".")[1] || "";
        intVal = intVal.replace(/-?\d{1,3}(?=(\d{3})+$)/g, function ($1) {
          return ($1 = $1 + ",");
        });
        result.shadowVal = intVal + (decimalVal ? "." + decimalVal : "");
      }
      return result;
    },
    setShadowCss() {
      //设置input的遮罩层的宽度为input的宽度
      let ipt = this.$refs.numberControlWrap.querySelector(".el-input__inner");
      let iptCurStyle = window.getComputedStyle(ipt);
      let showIptStyle = this.$refs.shadowInput.style;
      showIptStyle.width = iptCurStyle.width;
      showIptStyle.paddingLeft = iptCurStyle.paddingLeft;
      showIptStyle.paddingRight = iptCurStyle.paddingRight;
    },
  },
};
</script>

<style scope lang="scss">
.numberControlWrap {
  display: inline-block;
  .shadowInput {
    box-sizing: border-box;
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    overflow: hidden;
    color: #445c86;
    background: #fff;
    border: 0.1rem solid #cddbee;
    border-top-left-radius: 0.4rem;
    border-bottom-left-radius: 0.4rem;
    font-size: 1.3rem;
  }
  .el-input.is-disabled .el-input-group__append {
    border-color: #cddbee;
  }
  .el-input__inner {
    padding-right: 2rem;
  }
  .el-input__suffix {
    width: 1.1rem;
  }
  .el-input-group__append {
    z-index: 1;
  }
  .el-input-group__prepend {
    z-index: 1;
    border-right: 1px solid #cddbee;
  }
  &.right {
    .el-input__inner {
      text-align: right;
    }
    .shadowInput {
      text-align: right;
    }
  }
  &.left {
    .el-input__inner {
      text-align: left;
    }
    .shadowInput {
      text-align: left;
    }
  }
  &.center {
    .el-input__inner {
      text-align: center;
    }
    .shadowInput {
      text-align: center;
    }
  }
}
</style>
