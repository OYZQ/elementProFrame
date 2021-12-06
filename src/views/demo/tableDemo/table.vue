  <template>
  <div class="my--demo">
    <div class="demo-table">
      <MyViewCode title="【普通表格】" :source-code="sourceCode1">
        <elTable
          :reqPar="request"
          :count="24"
          :tableData="tableData2"
          :cols="cols"
          :fetch="fetch"
          :changeEdit="false"
          :height="250"
        ></elTable>
      </MyViewCode>
      <MyViewCode title="【固定操作列】" :source-code="sourceCode2">
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
      </MyViewCode>
      <MyViewCode title="【多级表格】" :source-code="sourceCode3">
        <elTable
          :reqPar="request"
          :count="24"
          :tableData="tableData2"
          :cols="cols3"
          :fetch="fetch"
          :changeEdit="false"
          :height="250"
        ></elTable>
      </MyViewCode>
    </div>
  </div>
</template>

<script>
import elTable from '@/components/base/MyTable/elTable'
import MyViewCode from '@/components/base/MyViewCode/MyViewCode'
import sourceCode1 from './sourceCode1'
import sourceCode2 from './sourceCode2'
import sourceCode3 from './sourceCode3'
export default {
  name: 'tabelDemo',
  components: {
    elTable: elTable,
    MyViewCode: MyViewCode,
  },
  data() {
    return {
      sourceCode1:sourceCode1,
      sourceCode2:sourceCode2,
      sourceCode3:sourceCode3,
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
      cols: [
        {
          prop: 'date',
          label: '日期',
          type: 'text',
        },
        {
          prop: 'name',
          label: '姓名',
          type: 'text',
        },
        {
          prop: 'address',
          label: '地址',
          type: 'text',
        },
      ],
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
      cols3: [
        {
          prop: 'date',
          label: '日期',
          type: 'text',
        },
        {
          prop: 'name',
          label: '姓名',
          type: 'text',
        },
        {
          label: '地址',
          type: 'merge',
          merge: [
            {
              prop: 'address',
              label: '地址1',
              type: 'text',
            },
            {
              prop: 'address',
              label: '地址2',
              type: 'text',
            },
          ],
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
<style scoped lang="scss" src="@/styles/modules/demo/index.scss"></style>
