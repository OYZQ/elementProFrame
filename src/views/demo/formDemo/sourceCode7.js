export default`
<template>
  <MyViewCode title="【流程步骤】" :source-code="sourceCode7">
    <MySteps :space="334" :active="1" finish-status="success">
      <MyStep title="步骤一"></MyStep>
      <MyStep icon="el-icon-upload" title="步骤二"></MyStep>
      <MyStep title="步骤三"></MyStep>
    </MySteps>
    <MySteps :space="334" :active="1" simple finish-status="success">
      <MyStep title="步骤一"></MyStep>
      <MyStep title="步骤二"></MyStep>
      <MyStep title="步骤三"></MyStep>
    </MySteps>
    <MySteps :space="50" :active="1" direction="vertical" finish-status="success">
      <MyStep icon="el-icon-edit" title="步骤一"></MyStep>
      <MyStep icon="el-icon-upload" title="步骤二"></MyStep>
      <MyStep icon="el-icon-picture" title="步骤三"></MyStep>
    </MySteps>
    <MySteps :space="200" :active="1" finish-status="success">
      <MyStep title="步骤1" description="这是一段很长的描述性文字"></MyStep>
      <MyStep title="步骤2" description="这是一段很长很长的描述性文字"></MyStep>
      <MyStep title="步骤3" description="这是一段很长的描述性文字"></MyStep>
    </MySteps>
  </MyViewCode>
</template>
`