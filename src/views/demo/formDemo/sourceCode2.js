export default `
<template>
  <MyForm :model="ruleForm2" :rules="rules2" ref="ruleForm2" label-width="20rem">
    <MyFormItem label="单选下拉框" prop="select1">
      <MySelect v-model="ruleForm2.select1" placeholder="请选择">
        <MyOption
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        ></MyOption>
      </MySelect>
    </MyFormItem>
    <MyFormItem label="部分禁用" prop="select2">
      <MySelect v-model="ruleForm2.select2" placeholder="请选择">
        <MyOption
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value"
          :disabled="item.disabled"
        ></MyOption>
      </MySelect>
    </MyFormItem>
    <MyFormItem label="禁用下拉框" prop="select3">
      <MySelect v-model="ruleForm2.select3" :disabled="true" placeholder="请选择">
        <MyOption
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        ></MyOption>
      </MySelect>
    </MyFormItem>
    <MyFormItem label="必填下拉框" prop="select4">
      <MySelect v-model="ruleForm2.select4" placeholder="请选择">
        <MyOption
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        ></MyOption>
      </MySelect>
    </MyFormItem>
    <MyFormItem label="多选下拉框1" prop="select5">
      <MySelect v-model="ruleForm2.select5" multiple placeholder="请选择">
        <MyOption
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        ></MyOption>
      </MySelect>
    </MyFormItem>
    <MyFormItem label="多选下拉框2" prop="select6">
      <MySelect v-model="ruleForm2.select6" collapse-tags multiple placeholder="请选择">
        <MyOption
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        ></MyOption>
      </MySelect>
    </MyFormItem>
    <MyFormItem label="多选下拉框3" class="mySelect" prop="select7">
      <MySelect v-model="ruleForm2.select7" multiple placeholder="请选择">
        <MyOption
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        ></MyOption>
      </MySelect>
    </MyFormItem>
    <MyFormItem label="树状单选（父节点可选）" prop="select8">
      <MyScopeMulti v-model="ruleForm2.select8" :data="treeData" :expandOnClick="false"></MyScopeMulti>
    </MyFormItem>
    <MyFormItem label="树状单选（父节点不可选）" prop="select9">
      <MyScopeMulti v-model="ruleForm2.select9" :data="treeData"></MyScopeMulti>
    </MyFormItem>
    <MyFormItem label="树状多选" prop="select10">
      <MyScopeMulti v-model="ruleForm2.select10" multiple :data="treeData"></MyScopeMulti>
    </MyFormItem>
    <br/>
    <MyFormItem label="级联选择" prop="select11">
      <MySelect
        v-for="(item,key) in selectList"
        :key="key"
        v-model="ruleForm2.select11[key]"
        filterable
        placeholder="请选择"
        value-key="value"
        @change="selected"
        @focus="position=key"
        style="margin-right:1rem"
      >
        <MyOption
          v-for="itemChild in item"
          :key="itemChild.value"
          :label="itemChild.label"
          :value="itemChild"
        ></MyOption>
      </MySelect>
    </MyFormItem>
    <MyFormItem label="模糊匹配下拉框" prop="select12">
      <MySelect v-model="ruleForm2.select12" filterable placeholder="请选择">
        <MyOption
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        ></MyOption>
      </MySelect>
    </MyFormItem>
  </MyForm>
</template>

<script>
import MyScopeMulti from '@/components/base/MyScopeMulti/MyScopeMulti'
import treeData from '@/assets/json/treeData'
export default {
  name: 'formDemo',
  components: {
    MyViewCode,
    MyScopeMulti,
  },
  data() {
    return {
      ruleForm2: {
        select1: '选项3',
        select2: '选项4',
        select3: '选项1',
        select4: '',
        select5: ['选项1', '选项2', '选项3'],
        select6: ['选项1', '选项2', '选项3'],
        select7: ['选项1', '选项2', '选项3'],
        select8: '',
        select9: '',
        select10: '',
        select11:[],
        select12:''
      },
      rules2: {
        select4: [{ required: true, message: '请选择', trigger: 'change' }],
      },
      options: [
        {
          value: '选项1',
          label: '黄金糕',
        },
        {
          value: '选项2',
          label: '双皮奶',
          disabled: true,
        },
        {
          value: '选项3',
          label: '蚵仔煎',
        },
        {
          value: '选项4',
          label: '龙须面',
        },
        {
          value: '选项5',
          label: '北京烤鸭',
        },
      ],
      treeData: treeData,
      selectList: [
        [
          {
            value: '第1级-选项1',
            label: '第1级-选项1',
          },
          {
            value: '第1级-选项2',
            label: '第1级-选项2',
          },
          {
            value: '第1级-选项3',
            label: '第1级-选项3',
          },
        ],
      ],
      position: null,
    }
  },
  mounted() {
    // 表单2 下拉框
    this.$refs['ruleForm2'].validate((valid) => {
      if (valid) {
        window.console.log('valid!')
      } else {
        window.console.log('error submit!')
        return false
      }
    })
  },
  methods: {
    addSelectList(index) {
      return [
        {
          value: '第' + (index + 2) + '级-选项1',
          label: '第' + (index + 2) + '级-选项1',
        },
        {
          value: '第' + (index + 2) + '级-选项2',
          label: '第' + (index + 2) + '级-选项2',
        },
        {
          value: '第' + (index + 2) + '级-选项3',
          label: '第' + (index + 2) + '级-选项3',
        },
      ]
    },
    selected() {
      var nextSelect = this.addSelectList(this.position)
      this.selectList.splice(
        this.position + 1,
        this.selectList.length,
        nextSelect
      )
      this.ruleForm2.select11.splice(
        this.position + 1,
        this.ruleForm2.select11.length
      )
    },
  },
}
</script>
`