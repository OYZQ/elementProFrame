<template>
  <!-- 递归组件实现多级表头 -->
  <MyTableColumn
    :prop="col.prop"
    :label="col.label"
    :width="col.width"
    header-align="center"
    :align="col.align? col.align : 'center'">
    <template v-if="col.merge">
      <!-- 此处实现递归操作 -->
      <MyColumnItem v-for="(item, index) of col.merge" :key="item.prop + index" :col="item"></MyColumnItem>
    </template>
    <template slot-scope="scope">
      <!-- 普通文字的时候 -->
      <template v-if="col.type == 'text'">
        <div :style="{ textAlign: col.align }">{{scope.row[col.prop]}}</div>
      </template>
      <!-- 下拉选择框的时候 -->
      <div v-if="col.type === 'select'">
        <MySelect v-if="col.filter ? col.filter(scope.row,scope.row[col.prop]): true"
          @change="col.change && col.change(scope.row[col.prop],scope.$index,col.prop)"
          :collapse-tags="col.multiple?true:false"
          v-model="scope.row[col.prop]" :placeholder="col.place || '请选择'" :multiple="col.multiple? true : false" :clearable="true">
          <MyOption
            v-for="(itemslice1, i) in col.select"
            :key="'itemslice_' + i"
            :label="itemslice1.label || itemslice1.text"
            :value="itemslice1.value"
          ></MyOption>
        </MySelect>
        <!-- 当单个表格不需要出现下拉选择的时候 -->
        <template v-else>{{ scope.row[col.prop] }}</template>
      </div>
      <!-- 输入框的时候 -->
      <div v-if="col.type === 'input'">
        <MyInput v-if="col.filter?col.filter(scope.row,scope.row[col.prop]): true" v-model="scope.row[col.prop]"
          @blur="col.blur && col.blur(scope.row[col.prop],scope.$index,col.prop)"></MyInput>
        <!-- 当单个表格不需要出现输入框的时候 -->
        <template v-else>{{ scope.row[col.prop] }}</template>
      </div>
      <template v-if="col.type == 'custom'">
        <slot :name="col.prop" :data="scope.row" :column="col"/>
      </template>
    </template>
  </MyTableColumn>
</template>

<script>
export default {
  name: 'columnItem',
  props:{
    col:{
      type: Object,
      required: true
    }
  }
}
</script>