<template>
  <div class="my-search-bar">
    <div class="my-search-form" ref="searchForm" :class="searchFormClass" id="searchForm">
      <slot name="search-form"></slot>
    </div>
    <div class="my-search-btn">
      <div>
        <MyButton type="primary" @click="handleSubmit">查询</MyButton>
        <MyButton v-if="showReset" @click="handleReset">重置</MyButton>
        <div class="my-search-control-btn" v-if="multi">
          <MyButton v-if="!toggle" @click="handleToggle('out')" type="text">
            高级查询
            <i class="el-icon-arrow-down font-bold"></i>
          </MyButton>
          <MyButton v-else @click="handleToggle('in')" type="text">
            收起
            <i class="el-icon-arrow-up font-bold"></i>
          </MyButton>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import '../../../plugin/elementResize/elementResize'
export default {
  name:"MySearchBar",
  props:{
    multi:{ // 是否显示高级搜索
      type:Boolean,
      default:true
    },
    showReset:{ // 是否显示重置按钮
      type:Boolean,
      default:true
    },
    expand:{ //初始化展开还是收起
      type:Boolean,
      default:false
    },
    num:{
      type:Number,
      default:5
    }
  },
  data(){
    return{
      toggle:this.expand,
      searchFormClass:''//调整formItem 布局的class
    }
  },
  mounted(){
    let that = this;
    this.onControl('display:none');
    this.resizeFormItem();
    // 监听#searchForm宽度变化
    this.resizeElement = document.getElementById('searchForm');
  }
}
</script>

<style>
</style>