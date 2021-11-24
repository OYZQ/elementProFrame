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
import sourceCode1 from './sourceCode1.js'
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
          count:1,
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄',
        },
        { 
          count:2,
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄',
        },
        {
          count:3,
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄',
        },
        {
          count:4,
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄',
        },
      ],
      tableData1: [],
      tableHeader1: [],
      sourceCode1:sourceCode1,
      sourceCode2: sourceCode2,
    }
  },
  methods: {
    handleDownload() {
      this.downloadLoading = true
      import('@/plugin/export2Excel/Export2Excel').then((excel) => {
        const tHeader = ['序号', '日期', '姓名', '地址']
        const filterVal = ['count', 'date', 'name', 'address']
        const list = this.tableData
        const data = this.formatJson(filterVal, list)
        excel.export_json_to_excel({
          header: tHeader,
          data,
          filename: this.filename,
          autoWidth: this.autoWidth,
          bookType: this.bookType,
        })
        this.downloadLoading = false
      })
    },
    formatJson(filterVal, jsonData) {
      return jsonData.map((v) =>
        filterVal.map((j) => {
          if (j === 'timestamp') {
            return v[j]
          } else {
            return v[j]
          }
        })
      )
    },
    handleSuccess({ results, header }) {
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

<style scoped lang="scss" src="@/styles/modules/demo/index.scss"></style>