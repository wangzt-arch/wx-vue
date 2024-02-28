export default {
  pages: ["pages/home/index", "pages/member/index"],
  subPackages: [
    {
      root: "subPackages/",
      pages: ["detail"],
    },
  ],
  permission: {
    "scope.userLocation": {
      desc: "你的位置信息将用获取天气信息",
    },
  },
  window: {
    backgroundTextStyle: "light",
    navigationBarBackgroundColor: "#fff",
    navigationBarTitleText: "xxx",
    navigationBarTextStyle: "black",
  },
  tabBar: {
    color: "#999",
    selectedColor: "#333",
    backgroundColor: "#fff",
    borderStyle: "black",
    position: "bottom",
    list: [
      {
        pagePath: "pages/home/index",
        text: "首页",
        // iconPath: "resource/image/home.png",
        // selectedIconPath: "resource/image/home-select.png",
      },
      {
        pagePath: "pages/member/index",
        text: "我的",
        // iconPath: "resource/image/user.png",
        // selectedIconPath: "resource/image/user-select.png",
      },
      {
        pagePath: "pages/home/index",
        text: "首页",
        // iconPath: "resource/image/home.png",
        // selectedIconPath: "resource/image/home-select.png",
      },
      {
        pagePath: "pages/member/index",
        text: "我的",
        // iconPath: "resource/image/user.png",
        // selectedIconPath: "resource/image/user-select.png",
      },
    ],
  },
};