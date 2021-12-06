export default`
<template>
  <elTable
    :reqPar="request"
    :count="24"
    :tableData="tableData2"
    :cols="cols2"
    :fetch="fetch"
    :changeEdit="true"
    :height="250"
  >
    <template #btns="val">
      <a class="tableBtn" @click="edit(val)">编辑</a>
      <a class="tableBtn" @click="check(val)">审核</a>
    </template>
  </elTable>
</template>

<script>
import elTable from '@/components/base/MyTable/elTable'
export default {
name: 'tabelDemo',
components: {
  elTable: elTable,
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
    tableData2: [],
    cols2: [
      {
        prop: 'date',
        label: '日期',
        type: 'text',
        width: '500',
      },
      {
        prop: 'name',
        label: '姓名',
        type: 'text',
        width: '500',
      },
      {
        prop: 'address',
        label: '地址',
        type: 'text',
        width: '500',
      },
    ],
    // 分页数据
    request: {
      pageOffset: 1,
      pageSize: 10,
    },
  }
},
created() {
  this.tableData2 = this.tableData.slice(0, 10)
},
methods: {
  // 页面初始化及其分页数据请求
  fetch(pageSize, pageOffset) {
    this.request = {
      pageOffset,
      pageSize,
    }
    this.tableData2 = this.tableData.slice(
      pageSize * (pageOffset - 1),
      pageSize * (pageOffset - 1) + pageSize
    )
  },
  edit() {
    this.$message('编辑')
  },
  check() {
    this.$message('审核')
  },
},
}
</script>
`