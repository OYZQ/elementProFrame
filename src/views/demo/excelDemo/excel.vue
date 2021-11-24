<template>
  <div class="my--demo">
    <MyViewCode title="导出excel" :source-code="sourceCode1">
      <MyRow>
        <MyCol :span="21">
          <MyForm ref="form" label-width="9rem">
            <MyFormItem label="导出excel" class="width100b no-item just-con-start">
              <MyButton type="primary" @click="handleDownload">导出excel</MyButton>
            </MyFormItem>
          </MyForm>
        </MyCol>
      </MyRow>
      <MyRow>
        <MyTable class="my-table" :data="tableData" max-height="500">
          <MyTableColumn label="序号" align="center" type="index" width="50"></MyTableColumn>
          <MyTableColumn prop="date" label="日期" align="center" width="180"></MyTableColumn>
          <MyTableColumn prop="name" label="姓名" align="center" width="180"></MyTableColumn>
          <MyTableColumn prop="address" label="地址" align="center"></MyTableColumn>
        </MyTable>
      </MyRow>
    </MyViewCode>
    <MyViewCode title="导入excel" :source-code="sourceCode2">
      <MyRow>
        <uploadExcel :on-success="handleSuccess" :before-upload="beforeUpload"></uploadExcel>
        <MyTable class="my-table" :data="tableData1" max-height="500">
          <MyTableColumn v-for="item of tableHeader1" :key="item" :prop="item" :label="item" />
        </MyTable>
      </MyRow>
    </MyViewCode>
  </div>
</template>

<script>
import uploadExcel from './uploadExcel.vue'
import MyViewCode from '@/components/base/MyViewCode/MyViewCode'
import sourceCode2 from './sourceCode2.js'
export default {
  name: 'ExcelDemo',
  components: {
    uploadExcel,
    MyViewCode,
  },
  data() {
    return {
      tableData: [
        {
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄',
        },
        {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄',
        },
        {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄',
        },
        {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄',
        },
      ],
      tableData1: [],
      tableHeader1: [],
      sourceCode2: sourceCode2,
    }
  },
  methods: {
    handleSuccess({ results, header }) {
      debugger
      this.tableData1 = results
      this.tableHeader1 = header
    },
    beforeUpload(file) {
      const isLt1M = file.size / 1024 / 1024 < 1
      if (isLt1M) {
        return true
      }

      this.$message({
        message: '请不要上传超过1M的文件',
        type: 'warning',
      })

      return false
    },
  },
}
</script>

<style>
</style>