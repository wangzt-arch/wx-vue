<template>
  <view class="index">
    <view class="index">
        11111111111111
  </view>
  </view>
</template>

<script>
// 按需引入, 更小的应用体积
import './index.scss'
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
