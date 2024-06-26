"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      pdfUrl: ""
    };
  },
  onLoad(options) {
    if (options.filePath) {
      this.pdfUrl = decodeURIComponent(options.filePath);
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: $data.pdfUrl
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-d09aa7da"], ["__file", "C:/Users/cyd30/Documents/HBuilderProjects/wechat_program-mianjing-front/pages/pdf-viewer/pdf-viewer.vue"]]);
wx.createPage(MiniProgramPage);
