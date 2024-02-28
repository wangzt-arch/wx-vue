<template>
    <view class="index">
      <view class="index">
          ai推荐
    </view>
    
    </view>
  </template>
  
  <script>
  definePageConfig({
      navigationBarTitleText: 'Ai推荐',
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
  