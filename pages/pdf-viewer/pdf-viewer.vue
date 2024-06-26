<template>
  <view class="container">
    <web-view :src="pdfUrl" class="pdf-viewer"></web-view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      pdfUrl: ''
    };
  },
  onLoad(options) {
    if (options.filePath) {
      this.pdfUrl = decodeURIComponent(options.filePath);
    }
  }
};
</script>

<style scoped>
.container {
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f5f5f5;
}

.pdf-viewer {
  width: 100%;
  height: 100%;
}
</style>



