const PageTemplate = (pageName) => `<template>
<view class="${pageName}">
 
</view>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
@Component
export default class ${pageName} extends Vue {
  onLoad() {
    console.log("${pageName} page onLoad");
  }
}
</script>

<style scoped> 

</style>
`

const ComponentTemplate = (componentName) => `<template>
<view class="${componentName}">
  
</view>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
@Component
export default class ${componentName} extends Vue {
  onAttach() {
    console.log("${componentName} page onLoad");
  }
}
</script>

<style scoped>

</style>
`
module.exports = {
  PageTemplate,
  ComponentTemplate
}