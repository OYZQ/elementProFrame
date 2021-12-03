<template>
  <div class="content" :key="key">
    <MyTable
      v-loading="loadAction"
      :stripe="true"
      ref="multipleTable"
      :data="tableDataObj"
      tooltip-effect="dark"
      style="width: 100%"
      :max-height="height"
      :height="height"
      :border="border"
      :size="size"
      :row-class-name="tableRowClassName"
      :show-summary="showSummary"
      :row-key="rowKey"
      :span-method="objectSpanMethod"
      :tree-props="treeProps"
      :lazy="lazy"
      :load="load"
      @select="handleSelect"
      @select-all="handleSelectAll"
    >
      <!-- @selection-change="handleSelectionChange" -->
      <!-- 单选框 -->
      <MyTableColumn
        label="单选"
        v-if="onlyOne"
        width="55"
        header-align="center"
        align="center"
        min-width="60"
      >
        <template slot-scope="scope">
          <MyRadio v-model="currentRowId" :label="scope.row.id" @change="changeRedio(scope.row)"
            >&nbsp;</MyRadio
          >
        </template>
      </MyTableColumn>
      <!-- 多选框 -->
      <MyTableColumn
        v-if="select"
        type="selection"
        header-align="center"
        width="65"
        min-width="60"
        align="center"
      >
      </MyTableColumn>
      <!-- 排序号及拉拽排序 -->
      <MyTableColumn
        v-if="serial"
        type="index"
        fixed="left"
        width="100"
        :index="indexMethod"
        header-align="center"
        align="center"
        min-width="60"
        scoped-slot
      >
        <template slot="header">
          <div class="d-flex ai-center jc-center" v-if="dragShow">
            <span style="white-space: nowrap;">序号</span>
            <i v-if="serialSelect" class="el-icon-s-tools indexIcon" @click="dragEdit"></i>
          </div>
        </template>
      </MyTableColumn>
      <MyTableColumn
        v-for="(item, i) in corsObj"
        :key="'array' + i"
        :prop="item.prop"
        :label="item.label"
        :min-width="item.width || 120"
        :fixed="item.fixed"
        header-align="center"
        show-overflow-tooltip
        :align="item.align || 'center'"
      >
        <!-- 表头搜索以及定义表头事件 -->
        <template #header v-if="item.searchType">
          <MyPopover placement="bottom" :width="item.width || 200" trigger="click">
            <div slot="reference" class="search-header">
              <span class="search-title">{{ item.label }}</span>
              <i class="search-icon el-icon-search mx-2" style="cursor:pointer;"></i>
            </div>
            <MyInput
              v-if="item.searchType == 'input'"
              v-model="model[item.prop]"
              placeholder="请输入"
              @blur="item.search && item.search(model)"
            ></MyInput>
            <MySelect
              v-if="item.searchType == 'select'"
              v-model="model[item.prop]"
              placeholder="请选择"
              :clearable="true"
              @change="item.search && item.search(model)"
            >
              <MyOption
                v-for="items in item.selectOptions || []"
                :key="items.value"
                :label="items.label || items.text"
                :value="items.value"
              >
              </MyOption>
            </MySelect>
            <MyDatePicker
              v-if="item.searchType == 'date'"
              v-model="model[item.prop]"
              type="date"
              placeholder="选择日期"
              @change="item.search && item.search(model)"
            ></MyDatePicker>
          </MyPopover>
        </template>
        <!-- 多级表头 -->
        <template v-if="item.type == 'merge'">
          <MyColumItem
            v-for="(item, index) in item.merge"
            :key="'merge' + index"
            :col="item"
          ></MyColumItem>
        </template>
        <template slot-scope="scope">
          <!-- 没有状态时的展示(普通文字展示) -->
          <template v-if="item.type === 'text' && item.edit">
            <template v-if="editIndex !== editTy(scope.row[item.rowKey], item.label)">
              <div
                class="omit"
                v-if="scope.row[item.prop]"
                @click="uInput(scope.row[item.rowKey], scope, item.label)"
              >
                {{ scope.row[item.prop] }}
              </div>
              <div class="omit" v-else @click="uInput(scope.row[item.rowKey], scope, item.label)">
                <span
                  :style="{ width: item.width ? item.width : '100' + 'px', height: '23px' }"
                ></span>
              </div>
              <div v-if="!scope.row[item.prop]">
                <div
                  class="omit"
                  v-if="scope.row[item.prop]"
                  @click="uInput(scope.row[item.rowKey], scope, item.label)"
                >
                  {{ scope.row[item.prop] }}
                </div>
                <div class="omit" v-else @click="uInput(scope.row[item.rowKey], scope, item.label)">
                  <span
                    :style="{ width: item.width ? item.width : '100' + 'px', height: '23px' }"
                  ></span>
                </div>
              </div>
            </template>
            <template v-if="item.edit && editIndex == editTy(scope.row[item.rowKey], item.label)">
              <MyInput
                :ref="'item' + scope.row[item.rowKey] + scope.$index"
                @blur="OutEdit(item.fn, scope.row)"
                v-model="scope.row[item.prop]"
              ></MyInput>
            </template>
          </template>
          <template v-if="item.type === 'text' && !item.edit">
            <span @click="item.fn && item.fn(scope.row, scope)">{{ scope.row[item.prop] }}</span>
          </template>
          <!-- 判断是否传进来的是图片 -->
          <div v-if="item.type === 'img'" id="imgs" @click="item.fn && item.fn(scope.row)">
            <img :src="scope.row[item.prop]" alt="" />
          </div>
          <!-- 当为输入框的时候 -->
          <template v-if="item.type === 'input'">
            <MyInput
              v-if="item.filter ? item.filter(scope.row, scope.row[item.prop]) : true"
              v-model="scope.row[item.prop]"
              @blur="
                item.blur && item.blur(scope.row[item.prop], scope.$index, item.prop, editData)
              "
            ></MyInput>
            <template v-else>{{ scope.row[item.prop] }}</template>
          </template>
          <!-- 当为下拉选择框的时候 -->
          <div v-if="item.type === 'select'">
            <MySelect
              v-if="item.filter ? item.filter(scope.row, scope.row[item.prop]) : true"
              @change="
                item.change && item.change(scope.row[item.prop], scope.$index, item.prop, editData)
              "
              :collapse-tags="item.multiple ? true : false"
              v-loadmore="item.loadmore ? item.loadmore : ''"
              v-model="scope.row[item.prop]"
              :placeholder="item.place || '请选择'"
              :multiple="item.multiple ? true : false"
              :clearable="true"
            >
              <MyOption
                v-for="(items, i) in item.select"
                :key="'select_' + i"
                :label="items.label || items.text"
                :value="items.value"
              ></MyOption>
            </MySelect>
            <template v-else>{{ scope.row[item.prop] }}</template>
          </div>
          <!-- 判断是否传进来的是对象 -->
          <div v-if="item.type === 'object'">
            <div v-for="(items, index) in scope.row[items.prop]" :key="index">
              {{ items[item.name] }}
            </div>
          </div>
          <!-- 判断是否传进来的需要携带图标 -->
          <div v-if="item.type === 'edit'" class="edittext">
            <div>{{ scope.row[item.prop] }}</div>
            <i
              :class="item.icon ? item.icon : 'el-icon-edit'"
              style="cursor: pointer;margin:0px 10px"
              @click="item.fn && item.fn(scope.row[item.prop])"
            ></i>
          </div>
          <!-- 判断类型是否为滑块 -->
          <div v-if="item.type === 'btns'">
            <MySwitch
              v-model="scope.row[item.prop]"
              @change="item.fn(scope.row[item.prop], scope.row)"
            ></MySwitch>
          </div>
          <!-- 自定义 -->
          <template v-if="item.type == 'custom'">
            <slot :name="item.prop" :data="scope.row" :column="item" />
          </template>
        </template>
      </MyTableColumn>
      <MyTableColumn
        label="操作"
        :min-width="changeAlignWidth || 120"
        :fixed="changeAlign"
        v-if="changeEdit"
        header-align="center"
        align="center"
      >
        <template slot-scope="scope">
          <div class="d-flex ai-center jc-center">
            <slot name="btns" :data="scope.row" :item="scope"></slot>
          </div>
        </template>
      </MyTableColumn>
    </MyTable>
    <!-- 这里需要做判断，如果为数组就外部控制分页，如果为字符串就内部控制分页 -->
    <pagiNation
      v-if="objArr"
      :count="parseInt(count)"
      :fetch="fetch"
      :offSet.sync="offset"
      :sizes.sync="Size"
      :limit="limit"
    ></pagiNation>
    <pagiNation
      v-if="!objArr"
      :count="parseInt(count) || counts"
      :fetch="fetchString"
      :offSet.sync="offset"
      :sizes.sync="Size"
      :limit="limit"
    ></pagiNation>
    <MyPopup :show.sync="showline" :width="popupwidth" :title="popuptitle">
      <template #customize>
        <!-- <drag :dragList="cols" @Option="selectOption" :selectActive="val"></drag> -->
      </template>
      <template #btns>
        <el-button @click="showline = false">取消</el-button>
        <el-button type="primary" @click="saveline">确定</el-button>
      </template>
    </MyPopup>
  </div>
</template>

<script>
import MyPopup from "../popup/popup.vue";
// import drag from "@/components/system/drag/drag.vue";
import pagiNation from "../pagiNation/pagiNation.vue";
// import request from "@/utils/request";
import MyColumItem from "../columItem/columItem.vue";
export default{
  name: 'elTable',
  components:{
    pagiNation,
    // drag,
    MyPopup,
    MyColumItem
  },
  props:{
    serialSelect:{ // 控制自定义表头的选择按钮
      type: Boolean,
      default: false
    },
    limit:{ // 控制表格的分页
      type: Array,
      default(){
        return [10, 15, 20, 30, 50]
      }
    },
    changeAlignWidth:{ // 控制操作列的宽度
      type: Number,
      default: 150
    },
    dragShow:{ // 控制拖拽组件的显示
      type: Boolean,
      default: true
    },
    changeAlign:{ // 控制树表的方向
      type: String,
      default: 'left'
    },
    loadData:{ // 不分页懒加载的表格数据
      type: Array,
      default(){
        return []
      }
    },
    radioId:{ // 单选默认选中的行id
      type: String,
      default: ""
    },
    load:{ // 懒加载的执行函数
      type: Function,
      default: ()=>{}
    },
    lazy:{ // 开启数据懒加载
      type: Boolean,
      default: false
    },
    reqPar:{ // 请求第几页数据,每页多少条数据
      type: Object,
      default(){
        return {}
      }
    },
    merge:{ // 表示合并行列的字段
      type: Array,
      default(){
        return []
      }
    },
    treeProps:{ // 表示树表的层级结构,格式为{children: 'yellow', hasChildren: 'hasChildren'}
      type: Object,
      default(){
        return {}
      }
    },
    rowKey:{ // 表示树表的唯一标识符
      type: String,
      default: ""
    },
    serial:{ // 序列号的是否展示
      type: Boolean,
      default: true
    },
    cols:{ // 存放对应的表key或者url地址
      type: Array,
      default(){
        return []
      }
    },
    tableData:{ // 存放对应的value或者url地址
      type: Array,
      default(){
        return []
      }
    },
    select:{ // 判断选择框是否需要
      type: Boolean,
      default: false
    },
    changeEdit:{ // 判断操作框是否需要
      type: Boolean,
      default: false
    },
    where:{ // 存放传进来页面初始化的查询条件
      type: String,
      default:""
    },
    count:{ // 分页数据的总条数
      default: 0
    },
    fetch:{ // 分页发送的请求
      type: Function,
      default:()=>{}
    },
    selDefault:{ // 默认选中的内容数组
      type: Array,
      default(){
        return []
      }
    },
    onlyOne:{ // 设置为单选
      type: Boolean,
      default: false
    },
    loading:{ // 加载动画
      type: Boolean,
      default: false
    },
    // 将element表格组件自带的属性集成到封装组件上
    tableRowClassName:{ // 设置单行状态栏的颜色
      type: Function,
      default:()=>{}
    },
    height:{ // 表格的最大高度
      default: 'auto'
    },
    border:{ // 是否展示纵向边框线
      type: Boolean,
      default: true
    },
    size:{ // table表格的尺寸
      type: String
    },
    showSummary:{ // 底部是否需要展示合计行
      type: Boolean,
      default: false
    }
  },
  data(){
    return{
      // 搜索栏的绑定对象
       model : {},

      // 控制弹窗的显示和隐藏
       showline : false,

       popuptitle : "显示排序选择",

       popupwidth : 55,

       currentRowId : "",

       editIndex : "",

      // 当前哪一页
       offset : 1,

       Size : 10,

      // 防止重复渲染，就地复用
       key : "second",

      // 懒加载动画
       loadAction : false,

      // 拖拽组件的排序(后期可以通过url地址获取这个数据)
       dragList : [],

      // 存放传进来的表头数据（尽量不修改props中的数据，防止报错）
       corsObj : [],

      // 存放传进来的表格数据（尽量不修改props中的数据，防止报错）
       tableDataObj : [],

      // 存放传进来的当前页码
       req : {},

      // 临时存放筛选好的表头数据
       val : [],

      // 当前用户操作的原来数据
       nowTableData : "",

      // 用户编辑输入框时的操作数据
       editData : [],

      // 获取table滚动区域的dom元素
       dom : "",

      // 临时存放单页懒加载的数据
       updateLoad : [],

      // 判断触底还是触顶
       topOrBot : true,

      // 判断分页组件是否分类展示
       objArr : true,

      // tableData为字符串时，分页的总数
       counts : 0,
    }
  },
  methods:{
    loadTab() {
      // 表格下拉加载事件
      this.dom = this.$refs.multipleTable.bodyWrapper;
      let time = "";
      this.dom.addEventListener("scroll", () => {
        // 滚动距离
        const { scrollTop } = this.dom;
        // 变量windowHeight是可视区的高度
        const windowHeight = this.dom.clientHeight || 0;
        // 变量scrollHeight是滚动条的总高度
        const scrollHeight = this.dom.scrollHeight || 0;
        if (scrollTop + windowHeight === scrollHeight) {
          // 获取到的不是全部数据 当滚动到底部 继续获取新的数据
          if (time) clearTimeout(time);
          time = setTimeout(() => {
            this.topOrBot = true;
            console.log(
              "scrollTop",
              `${scrollTop}windowHeight`,
              `${windowHeight}scrollHeight`,
              scrollHeight
            );
            this.$emit("scrollBottom", true);
          }, 500);
        }
        if (scrollTop == 0) {
          // 当数据滚动到顶部时
          if (time) clearTimeout(time);
          time = setTimeout(() => {
            this.topOrBot = false;
            console.log(
              "scrollTop",
              `${scrollTop}windowHeight`,
              `${windowHeight}scrollHeight`,
              scrollHeight
            );
            this.$emit("scrollBottom", false);
          }, 500);
        }
      });
    },
    changeRedio(row) {
    // 实现单选
      this.currentRowId = row.id;
      // 返回被勾选的id集合
      this.$emit("getTableCheckIds", row.id);
      this.$emit("select", row);
    },

    editTy(name, value) {
      return `${name}${value}`;
    },
    handleSelect(selection, row) {
    // 树表懒加载 勾选当前项要选择下属懒加载的内容(已实现)
      if (row.hasChildren) {
        const { states } = this.$refs.multipleTable.store;
        const children = states.lazyTreeNodeMap[row.id];
        const select = states.selection;
        if (selection.indexOf(row) >= 0) {
          for (const item in children) {
            if (select.indexOf(children[item]) == -1) {
              select.push(children[item]);
            }
          }
          this.$emit("select", select, row);
          // 返回被勾选的id集合
          const selectIds = select.map((v) => v.id);
          this.$emit("getTableCheckIds", selectIds, row.id);
        } else {
          for (const item in children) {
            const key = select.indexOf(children[item]);
            if (key >= 0) {
              select.splice(key, 1);
              const child = states.lazyTreeNodeMap[children[item].id];
            }
          }
          this.$emit("select", select, row);
          // 返回被勾选的id集合
          const selectIds = select.map((v) => v.id);
          this.$emit("getTableCheckIds", selectIds, row.id);
        }
      } else {
        this.$emit("select", selection, row);
        // 返回被勾选的id集合
        const selectIds = selection.map((v) => v.id);
        this.$emit("getTableCheckIds", selectIds, row.id);
      }
    },
    handleSelectAll(selection) {
      // 全选时勾选拿到下属表的内容(已实现)
      const children = this.$refs.multipleTable.store.states.lazyTreeNodeMap;
      const select = this.$refs.multipleTable.store.states.selection;
      const isAllselect = this.$refs.multipleTable.store.states.isAllSelected;
      if (isAllselect) {
        for (const item in children) {
          console.log(item);
          children[item].forEach((v) => {
            if (select.indexOf(v) == -1) {
              select.push(v);
            }
          });
        }
        this.$emit("select", select, []);
        // 返回被勾选的id集合
        const selectIds = select.map((v) => v.id);
        this.$emit("getTableCheckIds", selectIds, []);
      } else {
        this.$refs.multipleTable.store.states.selection = [];
        this.$emit("select", [], []);
        this.$emit("getTableCheckIds", [], []);
      }
    },
    findDefault() {
      // 筛选出需要默认勾选的数据
      if (this.selDefault.length > 0) {
        const selectArr = [];
        this.tableDataObj.forEach((v) => {
          this.selDefault.forEach((j) => {
            if (v.id == j) {
              selectArr.push(v);
            }
          });
        });
        this.selectDefault(selectArr);
      }
    },
    selectDefault(rows) {
      // 设置默认项
      this.$refs.multipleTable.clearSelection();
      if (rows.length > 0) {
        rows.forEach((row) => {
          this.$nextTick(() => {
            this.$refs.multipleTable.toggleRowSelection(row, true);
          });
        });
      } else {
        this.$refs.multipleTable.clearSelection();
      }
    },

    indexMethod(index) {
      // 排序的计算属性
      if (this.count) {
        const numCount = Math.ceil(this.count / this.Size);
        let num = 0;
        if (numCount < this.offset) {
          num = (this.offset - 1 - (this.offset - numCount)) * this.Size + index + 1;
          this.offset -= 1;
        } else {
          num = (this.offset - 1) * this.Size + index + 1;
        }
        return num;
      }
      return index + 1;
    },
    
    selectOption(val) {
      // 拿到排序后的数据
      this.val = val;
    },

    uInput(val, scope, label) {
      // 触发编辑框出现的方法
      this.nowTableData = { ...scope.row };
      this.editIndex = `${val}${label}`;
      this.$nextTick(() => {
        const id = `item${val}${scope.$index}`;
        this.$refs[id][0].focus();
      });
    },

    OutEdit(fn, val) {
      // 触发编辑完成的回调
      if (fn) {
        fn(val, this.nowTableData);
        this.editIndex = "";
      }
    },

    // 将数据进行行列合并格式化
    mergeTableRow(data, spanKey) {
      const spanArr = [];
      let pos = 0;
      for (let i = 0; i < data.length; i++) {
        if (i === 0) {
          spanArr.push(1);
          pos = 0;
        } else {
          // 判断当前元素与上一个元素是否相同
          // eslint-disable-next-line no-lonely-if
          if (data[i][spanKey] === data[i - 1][spanKey]) {
            spanArr[pos] += 1;
            spanArr.push(0);
          } else {
            spanArr.push(1);
            pos = i;
          }
        }
      }
      return spanArr;
    },

    mergeBlue() {
      this.key = `${new Date().getTime()}first`;
    },

    // 合并的方法
    objectSpanMethod(env) {
      const { row, column, rowIndex, columnIndex } = env;
      if (this.merge && this.merge.length > 0) {
        // merge为需合并的列pro值
        if (this.merge.includes(column.property)) {
          const spanArr = this.mergeTableRow(this.tableData, column.property);
          const x_row = spanArr[rowIndex];
          const x_col = x_row > 0 ? 1 : 0;
          return {
            rowspan: x_row,
            colspan: x_col
          };
        }
        return {
          rowspan: 1,
          colspan: 1
        };
      }
    },

    saveline() {
      // 保存排序事件(还需判断用户修改的值是否为空)
      this.showline = false;
      if (this.val.length > 0) {
        this.corsObj = this.val;
      } else {
        this.corsObj = this.cols;
      }
      this.key = `${new Date().getTime()}first`;
    },

    dragEdit() {
      // 唤起拖拽排序组件
      this.showline = !this.showline;
    },

    editrow(row) {
      // 编辑事件
      console.log(row);
    },

    change(val) {
      this.$emit("changeline", val);
    },

    axiosPromise() {
      // 发送请求的方式获取表头数据
      // return request({
      //   url: this.cols,
      //   method: "get",
      //   data: this.where
      // });
    },

    axiosTableData(data) {
      // 发送请求获取表格数据
      // 示例请求：/getman?{pageOffset:1,pageSize:10}
      const DataAll = this.tableData.split("?");
      const model = {};
      Object.keys(JSON.parse(DataAll[1])).forEach((v) => {
        model[v] = JSON.parse(DataAll[1])[v];
      });

      if (data) {
        model.pageOffset = data.pageOffset;
        model.pageSize = data.pageSize;
      }
      console.log(DataAll);
      // return request({
      //   url: DataAll[0],
      //   method: "post",
      //   data: model
      // });
    },

    fetchString(pageSize, pageOffset) {
      // 表格数据为url请求时分页组件
      this.selectData({
        pageSize,
        pageOffset
      });
    },

    selectUrl() {
      if (typeof this.cols == "string") {
        // 判断如果使用者没传入固定表头数据选择网络请求时
        this.axiosPromise().then(res => {
          if (res.data) {
            this.corsObj = res.data.cols;
            // this.$emit('update:cols',res.data.cols)
          }
        });
      }
    },

    selectData(data) {
      // 当tableData为url地址字符串时,更新数据
      this.axiosTableData(data).then(res => {
        if (res.data) {
          this.tableDataObj = res.data.items;
          this.counts = parseInt(res.data.count);
          // this.$emit('update:count',res.data.count)
        }
      });
    }




  },
  watch:{
    loadData:{
      // 监听懒加载的不分页的数据
      handler(n, o){
        this.updateLoad = n;
        this.tableDataObj.push(...n);
        if (this.tableDataObj.length >= 200) {
          if (this.topOrBot) {
            this.tableDataObj.splice(0, 50);
          } else {
            this.tableDataObj.splice(150, 50);
          }
        }
        if (this.updateLoad.length != 0) {
          if (this.tableDataObj.length < 150) {
            if (this.topOrBot) {
              // eslint-disable-next-line operator-assignment
              this.dom.scrollTop = this.dom.scrollTop - 10;
            } else {
              // eslint-disable-next-line operator-assignment
              this.dom.scrollTop = this.dom.scrollTop + 1848;
            }
          } else if (this.topOrBot) {
            if (this.dom.scrollTop <= 4048) {
              // eslint-disable-next-line operator-assignment
              this.dom.scrollTop = this.dom.scrollTop - 10;
            } else {
              // eslint-disable-next-line operator-assignment
              this.dom.scrollTop = this.dom.scrollTop - 2400;
            }
          } else {
            // eslint-disable-next-line operator-assignment
            this.dom.scrollTop = this.dom.scrollTop + 1848;
          }
        }
      }
    },
    selDefault:{
      // 监听用户动态传入默认数据
      handler(n, o){
        this.findDefault();
      },
      deep: true
    },

    cols:{
      // 监听异步数据进行渲染
      handler(n,o){
        this.corsObj = this.cols;
        this.merge && this.mergeBlue();
        this.findDefault();
        this.key = `${String(new Date().getTime())}tableContent`;
      },
      deep: true
    },

    tableData:{
      // 当传进来的url地址存在时，才会触发请求
      handler(n,o){
        if (typeof this.tableData == "string") {
          // 当传进来的url地址存在时，才会触发请求
          this.objArr = false;
          this.selectData();
          this.key = `${new Date().getTime()}first`;
        } else {
          this.key = `${new Date().getTime()}first`;
          this.objArr = true;
          this.tableDataObj = JSON.parse(JSON.stringify(this.tableData || []));
          this.loadAction = false;
          this.merge && this.mergeBlue();
          this.selDefault.length > 0 && this.findDefault();
          this.editData = JSON.parse(JSON.stringify(this.tableData || []));
        }
        this.$nextTick(() => {
          this.$refs.multipleTable.doLayout();
        });
      },
      deep: true
    },

    // 监听输入框的变化，返回最新的修改值
    tableDataObj:{
      handler(n,o){
        this.$emit("inputUpdate", n, this.editData);
      },
      deep: true
    },

    // 拿到当前请求的分页参数
    reqPar:{
      handler(n,o){
        if (this.count) {
          this.req = this.reqPar;
        }
        this.offset = parseInt(n.pageOffset) || 1;
        this.Size = parseInt(n.pageSize) || this.limit[0];
      },
      deep: true, 
      immediate: true
    },

    // 监听页码
    offset:{
      handler(n,o){
        if (this.count) {
          this.req.pageOffset = this.offset;
        }
      }
    },
    
    // 监听懒加载动画
    loading:{
      handler(n,o){
        this.loadAction = n;
      }
    },

    // 拿到当前分页的页码
    Size:{
      handler(n,o){
        if (this.count) {
          this.req.pageSize = this.Size;
        }
      }
    },

    // 监听页码的变化
    req:{
      handler(n,o){
        if (this.count) {
          this.offset = parseInt(this.req.pageOffset);
          this.Size = parseInt(this.req.pageSize);
        }
      }
    },

    // 监听默认单选
    radioId:{
      handler(n,o){
        this.currentRowId = n;
      }
    },
  },
  
  created() {
    this.radioId ? (this.currentRowId = this.radioId) : "";
    this.loadAction = this.loading;
    this.req = this.reqPar;
    if (typeof this.cols == "string") {
      // 当传进来的url地址存在时，才会触发请求
      this.selectUrl();
    } else {
      this.corsObj = this.corsObj.concat(this.cols);
    }

    if (typeof this.tableData == "string") {
      // 当传进来的url地址存在时，才会触发请求
      this.objArr = false;
      this.selectData();
    } else {
      this.objArr = true;
      this.tableDataObj = JSON.parse(JSON.stringify(this.tableData));
      this.editData = JSON.parse(JSON.stringify(this.tableDataObj));
    }
  },

  mounted() {
    this.loadTab();
    this.merge && this.mergeBlue();
    this.selDefault.length > 0 && this.findDefault();
  }
}
</script>

<style lang="scss" scoped>
/deep/ .el-table .is-left .cell{
  text-align: left !important;
}
/deep/ .el-table .is-right .cell{
  text-align: right !important;
}
.indexIcon {
  color: #409eff;
  cursor: pointer;
  font-size: 16px;
  margin-left: 5px;
}
/deep/ .el-table__fixed {
  height: 97% !important; //设置高优先，以覆盖内联样式 （目的是清除底部固定列切换时出现的一行灰色底线）
}
/deep/ .el-table__fixed-right {
  height: 97% !important; //设置高优先，以覆盖内联样式
}
/deep/ .el-table__fixed::before,
/deep/ .el-table__fixed-right::before {
  background-color: transparent;
}
/deep/ .el-table--border th:first-child .cell {
  padding-left: 5px;
}
/deep/ .el-radio__label {
  display: none;
}
/deep/ .el-table .el-table__row td {
  .cell .el-table__indent {
    display: block;
    width: 0px;
    height: 0px;
    padding: 0px;
  }
  .cell .el-table__placeholder {
    display: block;
    width: 0px;
    height: 0px;
  }
}
/deep/ .el-table__expand-icon {
  position: absolute;
  top: 30%;
  left: 30%;
  margin: auto;
}
// --------------------------XWT-------------------------
/deep/ .el-table th {
  background-color: #f6fcfb;
  // font-size: 16px;
  font-weight: 400;
  color: #607181;
}
/deep/ .el-table tr.el-table__row--striped td {
  background-color: #f6fcfb;
}
/deep/ .el-table thead.is-group th {
  &.el-table__cell{
    background-color: #f6fcfb;
  }
  .cell{
    font-size: 14px;
    font-family: Regular;
  }
}

// --------------------------XWT-------------------------

.omit {
  width: 100%;
  height: 100%;
  -webkit-line-clamp: 1;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  span {
    display: block;
    width: 100%;
    height: 100%;
  }
}
#imgs {
  img {
    width: 80%;
    max-width: 200px;
    height: 80px;
    border-radius: 10px;
  }
}

.edittext {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  .edit {
    margin-left: 10px;
    cursor: pointer;
  }
}
</style>
