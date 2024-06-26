"use strict";
const common_vendor = require("../common/vendor.js");
const _sfc_main = {
  props: {
    image: String,
    title: String,
    subtitle: String,
    tag: String,
    views: Number,
    file: String
  },
  methods: {
    openPdf() {
      this.$emit("open-pdf", this.file);
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: $props.image,
    b: common_vendor.t($props.title),
    c: common_vendor.t($props.subtitle),
    d: $props.tag
  }, $props.tag ? {
    e: common_vendor.t($props.tag)
  } : {}, {
    f: common_vendor.t($props.views),
    g: common_vendor.o(($event) => $options.openPdf($props.file))
  });
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-cc328a3d"], ["__file", "C:/Users/cyd30/Documents/HBuilderProjects/wechat_program-mianjing-front/components/card.vue"]]);
wx.createComponent(Component);
