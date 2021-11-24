export default`
<template>
  <div>
      <MyRow>
        <uploadExcel :on-success="handleSuccess" :before-upload="beforeUpload"></uploadExcel>
        <MyTable class="my-table" :data="tableData1" max-height="500">
          <MyTableColumn v-for="item of tableHeader1" :key="item" :prop="item" :label="item" />
        </MyTable>
      </MyRow>
  </div>
</template>

<script>
import uploadExcel from './uploadExcel.vue'
export default {
  name: 'ExcelDemo',
  components: {
    uploadExcel,
  },
  data() {
    return {
      tableData1: [],
      tableHeader1: [],
    }
  },
  methods: {
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
`