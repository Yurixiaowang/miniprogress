<script lang="ts">
    import Vue from 'vue';
    export default Vue.extend({
        mpType: 'app',

        // 用户第一次打开执行
        onLaunch() {
          const updateManager = uni.getUpdateManager() // 坚持是否有更新
          // 如果检查到了
          updateManager.onCheckForUpdate(res => {
            if (res.hasUpdate) {
              uni.showLoading({
                title: '更新下载中...'
              })
            }
          })

          updateManager.onUpdateReady(()  => {
            // 更新已经完成
            uni.hideLoading()
            uni.showModal({
              title: '更新提示',
              content: '新版本已经准备好了，是否重启应用',
              success: (res) => {
                if (res.confirm) {
                  updateManager.applyUpdate()  // 调用 apply 应用新版本并且重启
                }
              }
            })
          })

          updateManager.onUpdateFailed(() => {
            uni.hideLoading()
            uni.showToast({title: '更新下载失败', icon: 'none'})
          })
        },
        onShow() {
          
        },
        onHide() {
            console.log('App Hide')
        }
    });
</script>

<style>
    /*每个页面公共css */
</style>
