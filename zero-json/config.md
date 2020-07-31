##后台管理项目public目录下config.js配置示例

import {set as APIConfig} from "zero-element/lib/config/APIConfig";

if (window.ZEle === undefined) {
  window.ZEle = {};
}
window.ZEle.endpoint = "http://localhost:8089";//设置为本机地址
window.ZEle.nav = "top";
window.ZEle.theme = "#1890ff";
window.ZEle.indexPage = "/test";
window.ZEle.breadcrumb = false;

window.ZEle.remoteConfig = {};
