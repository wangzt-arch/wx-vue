<template>
  <view class="index">
    <view class="index">
        22222222
  </view>
  </view>
</template>

<script>
definePageConfig({
    navigationBarTitleText: '我的',
  })
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
