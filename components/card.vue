<template>
  <view class="card" @click="openPdf(file)">
    <image class="card-image" :src="image"/>
    <view class="card-content">
      <view class="card-title">{{ title }}</view>
      <view class="card-subtitle">{{ subtitle }}</view>
      <view class="card-footer">
        <view v-if='tag' class="card-tag">{{ tag }}</view>
        <view class="card-views">浏览 {{ views }}</view>
      </view>
    </view>
  </view>
</template>

<script>
export default {
  props: {
    image: String,
    title: String,
    subtitle: String,
    tag: String,
    views: Number,
	file: String,
  },
  methods: {
	  openPdf() {
	        this.$emit('open-pdf', this.file);
	      }
  },
	
};
</script>

<style scoped>
.card {
  display: flex;
  padding: 10px;
  width: 100%;
  border-bottom: 1px solid #eee;
  cursor: pointer; /* Add pointer cursor to indicate clickable */
}

.card-image {
  width: 128px;
  height: 76px;
  margin-right: 15px;
  border-radius: 5px;
}

.card-content {
  display: flex;
  flex-direction: column;
  /* justify-content: space-between; */
}

.card-title {
  font-weight: bold;
}

.card-subtitle {
  color: #666;
}

.card-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 5px;
}

.card-tag {
  background-color: #E6F5FF;
  color: #296AEF;
  padding: 2px 5px;
  border-radius: 3px;
}

.card-views {
  color: #999;
  margin-right: 5%;
  position: absolute;
  right: 0;
}
</style>
