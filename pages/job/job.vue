<template>
  <view class="container">
    <!-- Search Bar -->
    <view class="search-bar">
      <view class="search-dropdown" @tap="searchToggleDropdown">
        <text>{{ selectedOption }}</text>
        <uni-icons type="down" class="arrow-down" />
      </view>
      <view v-if="showDropdown" class="dropdown-menu">
        <view v-for="(option, index) in options" :key="index" class="dropdown-item" @tap="selectOption(option)">
          <text :class="{ 'selected': option === selectedOption }">{{ option }}</text>
        </view>
      </view>
      <input class="search-input" type="text" placeholder="搜索面经资料" v-model="searchQuery" />
      <button class="search-button" @tap="onSearch">
        <uni-icons type="search" color="#ffffff" size="25" />
      </button>
    </view>

    <!-- Tabs -->
    <view class="tabs">
      <view class="tab" :class="{ active: activeTab === 'jobs' }" @tap="selectTab('jobs')">求职</view>
      <view class="tab" :class="{ active: activeTab === 'study' }" @tap="selectTab('study')">申研</view>
    </view>

    <!-- Filters -->
    <view class="filters">
      <view class="filter" @tap="toggleDropdown('location')">
        求职地域
        <uni-icons :class="{ open: dropdowns.location }" type="down" class="arrow-down" />
        <view v-if="dropdowns.location" class="dropdown">
          <view @tap="filterBy('location', 'all')">全职</view>
          <view @tap="filterBy('location', 'internship')">实习</view>
        </view>
      </view>
      <view class="filter" @tap="toggleDropdown('position')">
        岗位类别
        <uni-icons :class="{ open: dropdowns.position }" type="down" class="arrow-down" />
        <!-- Add dropdown content here -->
      </view>
      <view class="filter" @tap="toggleDropdown('industry')">
        所属行业
        <uni-icons :class="{ open: dropdowns.industry }" type="down" class="arrow-down" />
        <!-- Add dropdown content here -->
      </view>
    </view>

    <!-- 面经s -->
    <view class="mianjings">
      <scroll-view class="card-list" scroll-y>
        <card
          v-for="(item, index) in company_list"
          :key="index"
          :image="item.image"
          :title="item.title"
          :subtitle="item.subtitle"
          :tag="item.tag"
          :views="item.views"
          :file="item.file"
          @open-pdf="openPdf(item.file)"
        />
      </scroll-view>
    </view>

    <!-- Bottom Navigation Bar -->
    <view class="bottom-nav">
      <view class="nav-item" @tap="navigate('home')">
        <uni-icons type="home" size="25" />
        <text>首页</text>
      </view>
      <view class="nav-item" @tap="navigate('info')" :class="{ active: activeNav === 'info' }">
        <uni-icons type="help" size="25" color="#4285f4" />
        <text>信息</text>
      </view>
      <view class="nav-item" @tap="navigate('profile')">
        <uni-icons type="person" size="25" />
        <text>个人中心</text>
      </view>
    </view>
  </view>
</template>

<script>
import card from '/components/card.vue';
import { company_list } from '/components/card_data.js';

export default {
  components: {
    card,
  },
  data() {
    return {
      searchQuery: '',
      selectedOption: '按公司',
      options: ['按公司', '按岗位', '按专业', '按学校'],
      showDropdown: false,
      dropdowns: {
        location: false,
        position: false,
        industry: false,
      },
      filters: {
        location: null,
        position: null,
        industry: null,
      },
      activeNav: 'info',
      activeTab: 'jobs', // Default active tab
      company_list,
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
      console.log('Search query:', this.searchQuery, 'Selected option:', this.selectedOption);
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
      console.log('Navigating to:', page);
    },
    openPdf(file) {
      console.log(file);
      console.log(encodeURIComponent(file.path));
      uni.navigateTo({
        url: `/pages/pdf-viewer/pdf-viewer?filePath=${encodeURIComponent(file.path)}`
      });
    },
    selectTab(tab) {
      if (tab === 'study') {
        uni.navigateTo({
          url: '/pages/study/study',
        });
      }
    },
  },
};
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 20px;
  height: 100vh;
  background-color: #f5f5f5;
}

.search-bar {
  display: flex;
  align-items: center;
  width: 90%;
  height: 40px;
  background-color: #e0e0e0;
  border-radius: 5px;
  position: relative;
  margin-bottom: 10px;
}

.search-dropdown {
  display: flex;
  align-items: center;
  padding: 0 10px;
  cursor: pointer;
}

.arrow-down {
  margin-left: 5px;
}

.dropdown-menu {
  position: absolute;
  top: 45px;
  left: 0;
  width: 100%;
  background-color: #ffffff;
  border: 1px solid #ccc;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  z-index: 10;
}

.dropdown-item {
  padding: 10px;
  border-bottom: 1px solid #eee;
}

.dropdown-item:last-child {
  border-bottom: none;
}

.selected {
  color: #4285f4;
}

.search-input {
  flex: 1;
  height: 100%;
  padding: 0 10px;
  border: none;
  outline: none;
}

.search-button {
  width: 40px;
  height: 40px;
  background-color: #4285f4;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 0 5px 5px 0;
}

.tabs {
  display: flex;
  justify-content: space-around;
  width: 100%;
  background-color: #ffffff;
  border-bottom: 1px solid #ddd;
  margin-top: 10px;
}

.tab {
  font-weight: bold;
  padding: 10px 20px;
  cursor: pointer;
}

.tab.active {
  border-bottom: 2px solid #4285f4;
}

.filters {
  display: flex;
  justify-content: space-around;
  padding: 10px 0;
  width: 100%;
  background-color: #ffffff;
  border-bottom: 1px solid #ddd;
}

.filter {
  position: relative;
  cursor: pointer;
}

.filter text {
  margin-left: 5px;
}

.filter text.open {
  transform: rotate(180deg);
}

.dropdown {
  position: absolute;
  top: 100%;
  background: #fff;
  list-style: none;
  padding: 5px 0;
  margin: 0;
  width: 100%;
  border: 1px solid #ddd;
}

.dropdown view {
  padding: 5px 10px;
  cursor: pointer;
}

.dropdown view:hover {
  background: #f0f0f0;
}

.bottom-nav {
  position: fixed;
  bottom: 0;
  width: 100%;
  display: flex;
  justify-content: space-around;
  background-color: #ffffff;
  border-top: 1px solid #ddd;
  padding: 10px 0;
}

.nav-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
}

.nav-item text {
  margin-top: 5px;
  font-size: 12px;
}

.nav-item.active uni-icons,
.nav-item.active text {
  color: #4285f4;
}

.mianjings {
  width: 100%;
  padding: 10px 0;
}

.card-list {
  width: 100%;
}
</style>



