<template>
  <view class="slider">
    <view
      v-for="(tab, index) in tabs"
      :key="tab + index"
      class="tab-item"
      :class="{ active: activeTab === index }"
      @click="changeActiveTab(index)"
      >{{ tab }}</view
    >
  </view>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
@Component
export default class TopSlider extends Vue {
  tabs: string[] = ["推荐", "视频", "文章", "发现", "我的", "娱乐", "交友"];
  activeTab = 0;

  changeActiveTab(index: number) {
    this.activeTab = index;
    this.$emit("change", index);
  }
  onAttach() {
    console.log("TopSlider page onLoad");
  }
}
</script>

<style scoped>
/* uni-app 约定 2upx = 1px */
.slider {
  margin: 40upx 0;
  display: flex;
  align-items: center;
  overflow: scroll;
}
.slider::-webkit-scrollbar {
  width: 0;
}
.tab-item {
  flex: 0 0 25%;
  color: #353535;
  text-align: center;
  font-size: 32upx;
  line-height: 52upx;
  transition: all 0.3s ease-in-out;
}

.tab-item.active {
  transform: scale(1.2);
  font-weight: bold;
  color: #3a3a3a;
}
</style>
