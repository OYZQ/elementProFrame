<template>
  <MySelect v-model="selectedName" clearable :disabled="disabled" @clear="onClear" placeholder="请选择">
    <div class="select-tree" slot="empty">
      <MyTree
        ref="tree"
        :data="data"
        :accordion="false"
        highlight-current
        :check-on-click-node="false"
        :expand-on-click-node="expandOnClick"
        :current-node-key="currentNodeKey"
        :default-checked-keys="defaultCheckedKeys"
        :default-expanded-keys="defaultExpandedKeys"
        :props="defaultProps"
        node-key="id"
        @node-click="handleClick"
        @check="handleCheck"
        iconClass="el-icon-circle-plus"
        :show-checkbox="multiple"
      ></MyTree>
    </div>
  </MySelect>
</template>

<script>
export default {
  name: 'MyScopeMulti',
  props: {
    value: {
      type: String,
    },
    data: {
      type: Array,
      default: () => [],
    },
    multiple: {
      type: Boolean,
      default: false,
    },
    expandOnClick: {
      type: Boolean,
      default: true, // true点击展开节点，false点击选中节点
    },
    defaultProps: {
      type: Object,
      default: () => {
        return {
          label: 'name',
          children: 'children',
          id: 'id',
        }
      },
    },
    disabled: Boolean,
  },
  data() {
    return {
      selectedName: null,
      currentNodeKey: this.multiple ? null : this.value, //单选默认值
      defaultCheckedKeys: this.multiple ? this.value.split(',') : [], //多选默认值
      defaultExpandedKeys: this.multiple ? this.value.split(',') : [this.value], //默认展开节点
    }
  },
  watch: {
    value: {
      handler: 'initValue',
      immediate: true,
    },
  },
  created() {},
  methods: {
    initValue() {
      this.$nextTick(() => {
        const { tree } = this.$refs
        if (this.multiple) {
          // 多选
          let list = tree.getCheckedNodes()
          this.selectedName = list.map((item) => item.name).join(',')
        } else {
          // 单选
          let curVal = tree.getCurrentNode() || {}
          this.selectedName = curVal.name
        }
      })
    },
    //清空
    onClear() {
      if (this.multiple) {
        this.$refs.tree.setCheckedNodes([])
        this.$emit('check', {})// v-model语法糖事件
      } else {
        this.$refs.tree.setCurrentKey(null) || {}
        this.$emit('select', {})// v-model语法糖事件
      }
      this.$emit('input', '')// v-model语法糖事件
    },
    // 多选checkbox选择事件
    handleCheck(node, data) {
      let value = data.checkedNodes.map((item) => item.id)
      this.$emit('input', value.join(','))// v-model语法糖事件
    },
    // 单选
    handleClick(data) {
      if (!this.multiple) {
        if (this.expandOnClick) {
          // 父节点不可选
          let childrenArr = data.children || []
          childrenArr.length === 0 ? this.$emit('input', data.id) : ''
        } else {
          //父节点可选
          this.$emit('input', data.id)// v-model语法糖事件
        }
      }
    },
  },
}
</script>

<style lang="scss" scoped>
.select-tree {
  max-height: 300px;
  overflow-y: auto;
}
::v-deep .el-checkbox .el-checkbox__input {
  .el-checkbox__inner {
    border-color: #cddbee;
  }
  &.is-indeterminate .el-checkbox__inner::before {
    top: 0.6rem;
  }
}
::v-deep .el-tree {
  .el-tree-node__content {
    &:hover {
      background: #ddedfc;
    }
    .el-tree-node__expand-icon {
      padding: 0;
      font-size: 1.6rem;
      margin-right: 0.4rem;
      &.expanded {
        transform: rotate(0deg);
        &.before {
          content: '\e7a2';
        }
      }
      &.is-leaf {
        color: transparent;
        cursor: default;
      }
    }
    .el-checkbox {
      height: 1.6rem;
      .el-checkbox__input {
        vertical-align: top;
      }
    }
  }
}
</style>
