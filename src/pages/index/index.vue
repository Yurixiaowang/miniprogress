<template>
  <view class="home">
    <!-- 
      1, top-slider
      2, banner
      3, countdown
      4, home-recommend
      5, video-list
     -->
    <top-slider @change="handleTabChange" />
    <banner :src="bannerSrc" />
    <countdown :expiredTime="countExpiredTime" />
    <home-recommend v-if="!showVideo" />
    <video-list v-if="showVideo"></video-list>
  </view>
</template>

<script lang="ts">
/**
 * uni-app 自带的组件扫描机制，只要组件路径和命名满足以下规则，则不需要手动引入，可以直接在 template 里使用
 * /components/top-slider/top-slider.vue
 */
import { Component, Prop, Vue } from "vue-property-decorator";
import { before } from "../../lib/decorator";
@Component
export default class App extends Vue {
  readonly BANNER_LIST = [
    "https://seopic.699pic.com/photo/50113/4609.jpg_wh1200.jpg",
    "https://seopic.699pic.com/photo/50074/6687.jpg_wh1200.jpg",
    "https://seopic.699pic.com/photo/50131/2125.jpg_wh1200.jpg",
    "https://seopic.699pic.com/photo/50169/8271.jpg_wh1200.jpg",
  ];
  showVideo = false;
  countExpiredTime = new Date("2021/12/31").getTime();
  bannerSrc: string = this.BANNER_LIST[0];
  onLoad() {
    console.log("index page onLoad");
  }
  @before(() => {
    console.log("before onTabChange");
  })
  handleTabChange(index: number) {
    if (index === 1) {
      this.showVideo = true;
    } else {
      this.showVideo = false;
    }
    this.bannerSrc = this.BANNER_LIST[index];
  }
}
</script>

<style>
.content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.logo {
  height: 200rpx;
  width: 200rpx;
  margin: 200rpx auto 50rpx auto;
}

.text-area {
  display: flex;
  justify-content: center;
}

.title {
  font-size: 36rpx;
  color: #8f8f94;
}
</style>
