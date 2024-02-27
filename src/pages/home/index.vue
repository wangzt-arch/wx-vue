<template>
  <view class="index">
    <view class="index">
        11111111111111
  </view>
  <swiper
    class='test-h'
    indicator-color='#999'
    indicator-active-color='#333'
    :vertical="false"
    :circular="true"
    :indicator-dots="true"
    :autoplay="true"
  >
    <swiper-item>
      <view class='demo-text-1'>1</view>
    </swiper-item>
    <swiper-item>
      <view class='demo-text-2'>2</view>
    </swiper-item>
    <swiper-item>
      <view class='demo-text-3'>3</view>
    </swiper-item>
  </swiper>
  </view>
</template>

<script>
definePageConfig({
    navigationBarTitleText: '首页',
  })
// 按需引入, 更小的应用体积
export default {
  components: {

  },
  data () {
    return {
      msg: 'Hello world!',
      show: false
    }
  },
  methods: {
    handleClick () {
      this.show = true
    },
    handleClose () {
      this.show = false
    }
  },
}
</script>
<style>
.index{
  width: 100%;
  height: 100vh;
}

</style>
