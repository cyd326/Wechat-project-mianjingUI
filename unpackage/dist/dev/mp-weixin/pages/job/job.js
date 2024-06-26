"use strict";
const common_vendor = require("../../common/vendor.js");
const components_card_data = require("../../components/card_data.js");
const card = () => "../../components/card.js";
const _sfc_main = {
  components: {
    card
  },
  data() {
    return {
      searchQuery: "",
      selectedOption: "按公司",
      options: ["按公司", "按岗位", "按专业", "按学校"],
      showDropdown: false,
      dropdowns: {
        location: false,
        position: false,
        industry: false
      },
      filters: {
        location: null,
        position: null,
        industry: null
      },
      activeNav: "info",
      activeTab: "jobs",
      // Default active tab
      company_list: components_card_data.company_list
    };
  },
  methods: {
    searchToggleDropdown() {
      this.showDropdown = !this.showDropdown;
    },
    selectOption(option) {
      this.selectedOption = option;
      this.showDropdown = false;
    },
    onSearch() {
      console.log("Search query:", this.searchQuery, "Selected option:", this.selectedOption);
    },
    toggleDropdown(type) {
      this.dropdowns[type] = !this.dropdowns[type];
      for (let key in this.dropdowns) {
        if (key !== type) {
          this.dropdowns[key] = false;
        }
      }
    },
    filterBy(type, value) {
      this.filters[type] = value;
      this.dropdowns[type] = false;
    },
    navigate(page) {
      this.activeNav = page;
      console.log("Navigating to:", page);
    },
    openPdf(file) {
      console.log(file);
      console.log(encodeURIComponent(file.path));
      common_vendor.index.navigateTo({
        url: `/pages/pdf-viewer/pdf-viewer?filePath=${encodeURIComponent(file.path)}`
      });
    },
    selectTab(tab) {
      if (tab === "study") {
        common_vendor.index.navigateTo({
          url: "/pages/study/study"
        });
      }
    }
  }
};
if (!Array) {
  const _easycom_uni_icons2 = common_vendor.resolveComponent("uni-icons");
  const _component_card = common_vendor.resolveComponent("card");
  (_easycom_uni_icons2 + _component_card)();
}
const _easycom_uni_icons = () => "../../uni_modules/uni-icons/components/uni-icons/uni-icons.js";
if (!Math) {
  _easycom_uni_icons();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: common_vendor.t($data.selectedOption),
    b: common_vendor.p({
      type: "down"
    }),
    c: common_vendor.o((...args) => $options.searchToggleDropdown && $options.searchToggleDropdown(...args)),
    d: $data.showDropdown
  }, $data.showDropdown ? {
    e: common_vendor.f($data.options, (option, index, i0) => {
      return {
        a: common_vendor.t(option),
        b: option === $data.selectedOption ? 1 : "",
        c: index,
        d: common_vendor.o(($event) => $options.selectOption(option), index)
      };
    })
  } : {}, {
    f: $data.searchQuery,
    g: common_vendor.o(($event) => $data.searchQuery = $event.detail.value),
    h: common_vendor.p({
      type: "search",
      color: "#ffffff",
      size: "25"
    }),
    i: common_vendor.o((...args) => $options.onSearch && $options.onSearch(...args)),
    j: $data.activeTab === "jobs" ? 1 : "",
    k: common_vendor.o(($event) => $options.selectTab("jobs")),
    l: $data.activeTab === "study" ? 1 : "",
    m: common_vendor.o(($event) => $options.selectTab("study")),
    n: $data.dropdowns.location ? 1 : "",
    o: common_vendor.p({
      type: "down"
    }),
    p: $data.dropdowns.location
  }, $data.dropdowns.location ? {
    q: common_vendor.o(($event) => $options.filterBy("location", "all")),
    r: common_vendor.o(($event) => $options.filterBy("location", "internship"))
  } : {}, {
    s: common_vendor.o(($event) => $options.toggleDropdown("location")),
    t: $data.dropdowns.position ? 1 : "",
    v: common_vendor.p({
      type: "down"
    }),
    w: common_vendor.o(($event) => $options.toggleDropdown("position")),
    x: $data.dropdowns.industry ? 1 : "",
    y: common_vendor.p({
      type: "down"
    }),
    z: common_vendor.o(($event) => $options.toggleDropdown("industry")),
    A: common_vendor.f($data.company_list, (item, index, i0) => {
      return {
        a: index,
        b: common_vendor.o(($event) => $options.openPdf(item.file), index),
        c: "824eb1e6-5-" + i0,
        d: common_vendor.p({
          image: item.image,
          title: item.title,
          subtitle: item.subtitle,
          tag: item.tag,
          views: item.views,
          file: item.file
        })
      };
    }),
    B: common_vendor.p({
      type: "home",
      size: "25"
    }),
    C: common_vendor.o(($event) => $options.navigate("home")),
    D: common_vendor.p({
      type: "help",
      size: "25",
      color: "#4285f4"
    }),
    E: common_vendor.o(($event) => $options.navigate("info")),
    F: $data.activeNav === "info" ? 1 : "",
    G: common_vendor.p({
      type: "person",
      size: "25"
    }),
    H: common_vendor.o(($event) => $options.navigate("profile"))
  });
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-824eb1e6"], ["__file", "C:/Users/cyd30/Documents/HBuilderProjects/wechat_program-mianjing-front/pages/job/job.vue"]]);
wx.createPage(MiniProgramPage);
