<template>
  <div class="page">
   
    <MyPagination
       v-if="count"
      @size-change="SizeChange"
      @current-change="pagesize"
      @prev-click="prevpage"
      @next-click="nextpage"
      :current-page.sync="offset"
      background
      :page-sizes="limit"
      :page-size="size"
      layout="total, sizes, prev, pager, next, jumper"
      :total="count"
    ></MyPagination>
  </div>
</template>

<script>
export default {
  props:{
    count:{
      type: Number,
      default: 0
    },
    limit:{
      type: Array,
      default(){
        return [10, 20, 30, 50]
      }
    },
    fetch:{
      type: Function,
      default: ()=>{}
    },
    sizes:{
      type: Number,
      default: 10
    },
    offSet:{
      type: Number,
      default: 1
    },
  },
  data(){
    return{
      offset:1, // 从第一页开始
      size:this.limit[0]
    }
  },
  watch:{
    // 监听页码的变化
    offSet:{
      handler(n,o){
        this.offset = n;
      }
    },
    limit:{
      handler(n,o){
        this.limit = n;
      },
      deep: true, immediate: true
    },
    // 监听当前页数量的变化
    sizes:{
      handler(n,o){
        this.size = n;
      }
    }
  },
  methods:{
    SizeChange(e) {
      // 拿到每页的页码
      this.size = e;
      this.fetch(this.size, this.offset);
      this.$emit('update:offSet', this.offset);
      this.$emit('update:sizes', this.size);
    },

    nextpage(e) {
      // 下一页
      this.offset = e;
      this.fetch(this.size, this.offset);
      this.$emit('update:offSet', this.offset);
      this.$emit('update:sizes', this.size);
    },

    prevpage(e) {
      // 上一页
      this.offset = e;
      this.fetch(this.size, this.offset);
      this.$emit('update:offSet', this.offset);
      this.$emit('update:sizes', this.size);
    },

    pagesize(e) {
      // 选择页码分页
      this.offset = e;
      this.fetch(this.size, this.offset);
      this.$emit('update:offSet', this.offset);
      this.$emit('update:sizes', this.size);
    }
  },
  created() {
    this.size = this.sizes;
    this.offset = this.offSet;
  }
}
</script>

<style lang="scss" scoped>
.page {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 10px 0px;
}
</style>
