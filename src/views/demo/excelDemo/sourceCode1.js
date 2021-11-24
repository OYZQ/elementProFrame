export default`
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
  </div>
</template>

<script>
export default {
  name: 'ExcelDemo',
  components: {
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
  },
}
</script>
`