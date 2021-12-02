export default `
<template>
  <div>
    <div style="padding:2rem 0 0 0">自动上传</div>
    <MyUpload
      class="upload-demo"
      action="https://jsonplaceholder.typicode.com/posts/"
      :on-preview="handlePreview1"
      :on-remove="handleRemove1"
      :before-remove="beforeRemove1"
      multiple
      :limit="3"
      :on-exceed="handleExceed1"
      :file-list="fileList1"
    >
      <MyButton size="small" type="primary">点击上传</MyButton>
      <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
    </MyUpload>
    <div style="padding:2rem 0 0 0">手动上传</div>
    <MyUpload
      class="upload-demo"
      ref="upload"
      action="https://jsonplaceholder.typicode.com/posts/"
      :on-preview="handlePreview"
      :on-remove="handleRemove"
      :file-list="fileList"
      :auto-upload="false"
    >
      <MyButton slot="trigger" size="small" type="primary">选取文件</MyButton>
      <MyButton
        style="margin-left: 10px;"
        size="small"
        type="success"
        @click="submitUpload"
      >上传到服务器</MyButton>
      <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
    </MyUpload>
  </div>
</template>

<script>
export default {
  name: 'formDemo',
  data() {
    return {
      fileList1: [
        {
          name: 'food.jpeg',
          url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100',
        },
        {
          name: 'food2.jpeg',
          url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100',
        },
      ],
      fileList: [
        {
          name: 'food.jpeg',
          url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100',
        },
        {
          name: 'food2.jpeg',
          url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100',
        },
      ],
    }
  },
  methods: {
    submitUpload() {
      this.$refs.upload.submit()
    },
    handleRemove(file, fileList) {
      console.log(file, fileList)
    },
    handlePreview(file) {
      console.log(file)
    },
    handleRemove1(file, fileList) {
      console.log(file, fileList)
    },
    handlePreview1(file) {
      console.log(file)
    },
    handleExceed1(files, fileList) {
      this.$message.warning(
        \`当前限制选择 3 个文件，本次选择了 \${files.length} 个文件，共选择了 \${
          files.length + fileList.length
        } 个文件\`
      )
    },
    beforeRemove1(file) {
      return this.$confirm(\`确定移除 \${file.name}？\`)
    },
  },
}
</script>
`