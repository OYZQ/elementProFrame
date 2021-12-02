<template>
  <div class="my--demo">
    <div class="demo-form">
      <MyViewCode title="【输入框】" :source-code="sourceCode1">
        <MyForm :model="ruleForm" :rules="rules" ref="ruleForm1" label-width="20rem">
          <MyFormItem label="普通输入框" prop="text1">
            <MyInput v-model="ruleForm.text1" placeholder="请输入文本"></MyInput>
          </MyFormItem>
          <MyFormItem label="必填输入框" prop="text2">
            <MyInput v-model="ruleForm.text2" placeholder="请输入文本"></MyInput>
          </MyFormItem>
          <MyFormItem label="禁用输入框" prop="text3">
            <MyInput v-model="ruleForm.text3" :disabled="true" placeholder="请输入文本"></MyInput>
          </MyFormItem>
          <MyFormItem label="添加单位" prop="text4">
            <MyInput v-model="ruleForm.text4" placeholder="请输入文本">
              <template slot="append">元</template>
            </MyInput>
          </MyFormItem>
          <MyFormItem label="添加单位禁用" prop="text5">
            <MyInput v-model="ruleForm.text5" :disabled="true" placeholder="请输入文本">
              <template slot="append">元</template>
            </MyInput>
          </MyFormItem>
          <MyFormItem label="数字输入框" prop="text6">
            <MyInputControlNum v-model="ruleForm.text6" placeholder="请输入数字">
              <template slot="append">单位</template>
            </MyInputControlNum>
          </MyFormItem>
          <MyFormItem label="金额类数字框" prop="text7">
            <MyInputControlNum
              v-model="ruleForm.text7"
              placeholder="请输入金额"
              :controlConfig="controlConfig.numcontrol_1"
              max="1000000000"
              min="-1000000"
              :clearable="true"
            >
              <template slot="append">元</template>
            </MyInputControlNum>
          </MyFormItem>
          <MyFormItem label="文本框" prop="text8">
            <MyInput type="textarea" v-model="ruleForm.text8" placeholder="请输入文本"></MyInput>
          </MyFormItem>
          <MyFormItem>
            <MyButton type="primary" @click="submitForm('ruleForm1')">提交</MyButton>
          </MyFormItem>
        </MyForm>
      </MyViewCode>
      <MyViewCode title="【下拉框】" :source-code="sourceCode2">
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
          <br />
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
      </MyViewCode>
      <MyViewCode title="【时间选择】" :source-code="sourceCode3">
        <MyForm :model="ruleForm3" :rules="rules3" ref="ruleForm3" label-width="20rem">
          <MyFormItem label="日期选择（日）" prop="date1">
            <MyDatePicker v-model="ruleForm3.date1" type="date" placeholder="请选择"></MyDatePicker>
          </MyFormItem>
          <MyFormItem label="日期选择（周）" prop="date2">
            <MyDatePicker
              v-model="ruleForm3.date2"
              format="yyyy 第 WW 周"
              type="week"
              placeholder="请选择"
            ></MyDatePicker>
          </MyFormItem>
          <MyFormItem label="日期选择（月）" prop="date3">
            <MyDatePicker v-model="ruleForm3.date3" type="month" placeholder="请选择"></MyDatePicker>
          </MyFormItem>
          <MyFormItem label="日期选择（年）" prop="date4">
            <MyDatePicker v-model="ruleForm3.date4" type="year" placeholder="请选择"></MyDatePicker>
          </MyFormItem>
          <MyFormItem label="日期段选择" prop="date5">
            <MyDatePicker
              v-model="ruleForm3.date5"
              type="daterange"
              range-separator="~"
              start-placeholder="开始日期"
              end-placeholder="结束日期"
            ></MyDatePicker>
          </MyFormItem>
          <MyFormItem label="指定范围日期" prop="date6">
            <MyDatePicker
              v-model="ruleForm3.date6"
              type="daterange"
              range-separator="~"
              :picker-options="pickerOptions"
              start-placeholder="开始日期"
              end-placeholder="结束日期"
            ></MyDatePicker>
          </MyFormItem>
          <MyFormItem label="日期时间段选择" prop="date7">
            <MyDatePicker
              v-model="ruleForm3.date7"
              type="datetimerange"
              range-separator="至"
              start-placeholder="开始日期"
              end-placeholder="结束日期"
            ></MyDatePicker>
          </MyFormItem>
          <MyFormItem label="日期选择（必填）" prop="date8">
            <MyDatePicker v-model="ruleForm3.date8" type="date" placeholder="请选择"></MyDatePicker>
          </MyFormItem>
          <MyFormItem label="日期选择（禁用）" prop="date9">
            <MyDatePicker :disabled="true" v-model="ruleForm3.date9" type="date" placeholder="请选择"></MyDatePicker>
          </MyFormItem>
        </MyForm>
      </MyViewCode>
      <MyViewCode title="【Tab切换】" :source-code="sourceCode4">
        <MyRow :gutter="100">
          <MyCol :span="12">
            <MyTabs v-model="activeName" @tab-click="handleClick">
              <MyTabPane label="用户管理" name="first">用户管理内容</MyTabPane>
              <MyTabPane label="配置管理" name="second">配置管理内容</MyTabPane>
            </MyTabs>
          </MyCol>
          <MyCol :span="12">
            <MyRadioGroup class="margint15" v-model="radio" size="mini">
              <MyRadioButton label="上海"></MyRadioButton>
              <MyRadioButton label="北京"></MyRadioButton>
            </MyRadioGroup>
          </MyCol>
        </MyRow>
      </MyViewCode>
      <MyViewCode title="【单选】" :source-code="sourceCode5">
        <MyRow :gutter="100">
          <MyCol :span="8">
            <MyRadioGroup v-model="radio2">
              <MyRadio :label="1">选项A</MyRadio>
              <MyRadio :label="2">选项B</MyRadio>
              <MyRadio :label="3" disabled>选项C</MyRadio>
              <MyRadio :label="4">选项D</MyRadio>
            </MyRadioGroup>
          </MyCol>
          <MyCol :span="8">
            <MyRadioGroup v-model="radio4">
              <MyRadio border :label="1">选项A</MyRadio>
              <MyRadio border :label="2">选项B</MyRadio>
              <MyRadio border :label="3" disabled>选项C</MyRadio>
              <MyRadio border :label="4">选项D</MyRadio>
            </MyRadioGroup>
          </MyCol>
          <MyCol :span="8">
            <MyRadioGroup v-model="radio3">
              <MyRadioButton label="上海"></MyRadioButton>
              <MyRadioButton label="北京"></MyRadioButton>
              <MyRadioButton label="广州"></MyRadioButton>
              <MyRadioButton label="深圳"></MyRadioButton>
            </MyRadioGroup>
          </MyCol>
        </MyRow>
      </MyViewCode>
      <MyViewCode title="【复选】" :source-code="sourceCode6">
        <MyRow :gutter="100">
          <MyCol :span="8">
            <MyCheckboxGroup v-model="checkList">
              <MyCheckbox label="复选A"></MyCheckbox>
              <MyCheckbox label="复选B"></MyCheckbox>
              <MyCheckbox label="复选C" disabled></MyCheckbox>
              <MyCheckbox label="复选D" disabled></MyCheckbox>
            </MyCheckboxGroup>
          </MyCol>
          <MyCol :span="8">
            <MyCheckbox
              :indeterminate="isIndeterminate"
              v-model="checkAll"
              @change="handleCheckAllChange"
            >全选</MyCheckbox>
            <MyCheckboxGroup v-model="checkList2" @change="handleCheckedCitiesChange">
              <MyCheckbox v-for="city in cities" :label="city" :key="city">{{city}}</MyCheckbox>
            </MyCheckboxGroup>
          </MyCol>
          <MyCol :span="8">
            <MyCheckboxGroup v-model="checkList3" :min="1" :max="2">
              <MyCheckbox v-for="city in cities3" :label="city" :key="city">{{city}}</MyCheckbox>
            </MyCheckboxGroup>
          </MyCol>
        </MyRow>
      </MyViewCode>
      <MyViewCode title="【流程步骤】" :source-code="sourceCode7">
        <MySteps :space="334" :active="1" finish-status="success">
          <MyStep title="步骤一"></MyStep>
          <MyStep icon="el-icon-upload" title="步骤二"></MyStep>
          <MyStep title="步骤三"></MyStep>
        </MySteps>
        <MySteps :space="334" :active="1" simple finish-status="success">
          <MyStep title="步骤一"></MyStep>
          <MyStep title="步骤二"></MyStep>
          <MyStep title="步骤三"></MyStep>
        </MySteps>
        <MySteps :space="50" :active="1" direction="vertical" finish-status="success">
          <MyStep icon="el-icon-edit" title="步骤一"></MyStep>
          <MyStep icon="el-icon-upload" title="步骤二"></MyStep>
          <MyStep icon="el-icon-picture" title="步骤三"></MyStep>
        </MySteps>
        <MySteps :space="200" :active="1" finish-status="success">
          <MyStep title="步骤1" description="这是一段很长的描述性文字"></MyStep>
          <MyStep title="步骤2" description="这是一段很长很长的描述性文字"></MyStep>
          <MyStep title="步骤3" description="这是一段很长的描述性文字"></MyStep>
        </MySteps>
      </MyViewCode>
      <MyViewCode title="【上传upload】" :source-code="sourceCode8">
        <div style="padding:2rem 0 0 0">自动上传</div>
        <MyUpload
          class="upload-demo"
          action="https://jsonplaceholder.typicode.com/posts/"
          :on-preview="handlePreview1"
          :on-remove="handleRemove1"
          :before-remove="beforeRemove1"
          multiple
          :limit="3"
          :on-exceed="handleExceed1"
          :file-list="fileList1"
        >
          <MyButton size="small" type="primary">点击上传</MyButton>
          <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
        </MyUpload>
        <div style="padding:2rem 0 0 0">手动上传</div>
        <MyUpload
          class="upload-demo"
          ref="upload"
          action="https://jsonplaceholder.typicode.com/posts/"
          :on-preview="handlePreview"
          :on-remove="handleRemove"
          :file-list="fileList"
          :auto-upload="false"
        >
          <MyButton slot="trigger" size="small" type="primary">选取文件</MyButton>
          <MyButton
            style="margin-left: 10px;"
            size="small"
            type="success"
            @click="submitUpload"
          >上传到服务器</MyButton>
          <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
        </MyUpload>
      </MyViewCode>
    </div>
  </div>
</template>

<script>
import MyViewCode from '@/components/base/MyViewCode/MyViewCode'
import sourceCode1 from './sourceCode1.js'
import sourceCode2 from './sourceCode2.js'
import sourceCode3 from './sourceCode3.js'
import sourceCode4 from './sourceCode4.js'
import sourceCode5 from './sourceCode5.js'
import sourceCode6 from './sourceCode6.js'
import sourceCode7 from './sourceCode7.js'
import sourceCode8 from './sourceCode8.js'
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
      sourceCode1: sourceCode1,
      sourceCode2: sourceCode2,
      sourceCode3: sourceCode3,
      sourceCode4: sourceCode4,
      sourceCode5: sourceCode5,
      sourceCode6: sourceCode6,
      sourceCode7: sourceCode7,
      sourceCode8: sourceCode8,
      ruleForm: {
        text1: '',
        text2: '',
        text3: '',
        text4: '',
        text5: '',
        text6: '',
        text7: '',
      },
      rules: {
        text2: [{ required: true, message: '请输入文本', trigger: 'blur' }],
      },
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
        select11: [],
        select12: '',
      },
      rules2: {
        select4: [{ required: true, message: '请选择', trigger: 'change' }],
      },
      ruleForm3: {
        date1: '',
        date2: '',
        date3: '',
        date4: '',
        date5: '',
        date6: '',
        date7: '',
        date8: '',
        date9: '',
      },
      rules3: {
        date8: [{ required: true, message: '请选择', trigger: 'change' }],
      },
      controlConfig: {
        numcontrol_1: {
          defaultValue: 0, //默认值
          align: 'right', //text-align对齐方式（默认left）
          decimalsLength: 4, //小数位
          commaVaild: true, //是否千分化（逗号分隔）
          isCommaVaild: false, //接受或传递后台的值是否千分化（逗号分隔）
          needPaste: true, //粘贴
          increment: 1.2, //键盘上下键增减值的刻度，默认1
        },
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
      pickerOptions: {
        // 日期指定范围内时间段设置
        disabledDate(time) {
          return time.getTime() < Date.now()
        },
      },
      activeName: 'second',
      radio: '上海',
      radio2: 2,
      radio3: '上海',
      radio4: 4,
      checkList: ['复选A', '复选C'],
      checkList2: [],
      checkList3: ['上海'],
      cities: ['上海', '北京', '广州', '深圳'],
      cities3: ['上海', '最少勾选一个', '最多勾选两个', '深圳'],
      checkAll: false,
      isIndeterminate: false,
      fileList1: [
        {
          name: 'food.jpeg',
          url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100',
        },
        {
          name: 'food2.jpeg',
          url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100',
        },
      ],
      fileList: [
        {
          name: 'food.jpeg',
          url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100',
        },
        {
          name: 'food2.jpeg',
          url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100',
        },
      ],
    }
  },
  mounted() {
    // 表单1 输入框
    this.$refs['ruleForm1'].validate((valid) => {
      if (valid) {
        window.console.log('valid!')
      } else {
        window.console.log('error submit!')
        return false
      }
    })
    // 表单2 下拉框
    this.$refs['ruleForm2'].validate((valid) => {
      if (valid) {
        window.console.log('valid!')
      } else {
        window.console.log('error submit!')
        return false
      }
    })
    // 表单3 日期
    this.$refs['ruleForm3'].validate((valid) => {
      if (valid) {
        window.console.log('valid!')
      } else {
        window.console.log('error submit!')
        return false
      }
    })
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.$message({
            message: 'submit success!',
            type: 'success',
          })
        } else {
          this.$message.error('submit error!')
        }
      })
    },
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
    handleClick(tab, event) {
      window.console.log(tab, event)
    },
    handleCheckAllChange(val) {
      this.checkList2 = val ? [...this.cities] : []
      this.isIndeterminate = false
    },
    handleCheckedCitiesChange(value) {
      let checkedCount = value.length
      this.checkAll = checkedCount === this.cities.length
      this.isIndeterminate =
        checkedCount > 0 && checkedCount < this.cities.length
    },
    submitUpload() {
      this.$refs.upload.submit()
    },
    handleRemove(file, fileList) {
      console.log(file, fileList)
    },
    handlePreview(file) {
      console.log(file)
    },
    handleRemove1(file, fileList) {
      console.log(file, fileList)
    },
    handlePreview1(file) {
      console.log(file)
    },
    handleExceed1(files, fileList) {
      this.$message.warning(
        `当前限制选择 3 个文件，本次选择了 ${files.length} 个文件，共选择了 ${
          files.length + fileList.length
        } 个文件`
      )
    },
    beforeRemove1(file) {
      return this.$confirm(`确定移除 ${file.name}？`)
    },
  },
}
</script>

<style scoped lang="scss" src="@/styles/modules/demo/index.scss"></style>