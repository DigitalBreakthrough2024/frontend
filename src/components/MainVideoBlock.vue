<script setup>
import { ref, computed, onMounted } from "vue";
defineProps({
  Id: String,
  Name: String,
  Category: String,
  Date: String,
  Duration: Number,
  test: String,
});

const videoName = ref("Примерное название видео на пару слов");
const videoCategory = ref("Категория");
const videoPublicDate = ref("4 часа назад");
const videoLength = ref("");

const videoPreviews = ["p1.jpg", "p2.jpg", "p3.jpg", "p4.jpg"];
const randomIndex = Math.floor(Math.random() * videoPreviews.length);
const randomElement = videoPreviews[randomIndex];

const selectedPreviewPath = ref("/src/assets/images/previews/");
selectedPreviewPath.value = selectedPreviewPath.value + randomElement;

function normalizeAndTruncate(str, maxLength) {
  const trimmedStr = str.trim();
  if (!trimmedStr) return "";
  return trimmedStr.length > maxLength
    ? `${trimmedStr.slice(0, maxLength)}...`
    : trimmedStr;
}

const truncatedVideoName = computed(() =>
  normalizeAndTruncate(videoName.value, 40)
);
</script>

<template>
  <div className="videoblock">
    <div className="videoblock__preview">
      <div class="videoblock__preview-img">
        <img :src="selectedPreviewPath" alt="" />
        <span className="videoblock__preview-length">13:33</span>
      </div>
    </div>
    <div className="videoblock__name">
      <a className="videoblock__name-header">{{ Name }}</a>
    </div>
    <div class="videoblock__data">
      <span>{{ Category }} | 5 часов назад</span>
    </div>
  </div>
</template>

<style scoped>
.videoblock__preview {
  /*height: 210px; */
  position: relative;
  overflow: hidden;
  object-position: center;
  display: flex;
  align-items: center;
  /* background: rgba(0, 0, 0, 0.5); */
  border-radius: 5px;
}

.videoblock__preview img {
  border-radius: 8px;
  height: 100%;
  cursor: pointer;
}

.videoblock__preview-length {
  position: absolute;
  bottom: 8px;
  right: 8px;

  background: rgba(0, 0, 0, 0.5);
  border-radius: 4px;
  color: white;
  font-size: 12px;
  font-weight: 500;
  line-height: 12px;
  padding: 2px 6px;
}

.videoblock__name {
  margin-top: 5px;
  display: flex;
  gap: 8px;
}

.videoblock__name {
  color: white;
  text-decoration: none;
  white-space: normal;
  word-break: break-word;
}

.videoblock__name-button {
  font-size: 30px;
}

.videoblock__name-header {
  font-weight: 500;
  font-size: 15px;
  cursor: pointer;
}

.videoblock__data {
  margin-top: 8px;
  color: var(--text-secondary);
  font-size: 12px;
}

@media screen and (max-width: 500px) {
  .videoblock__name-header {
    font-size: 19px;
  }
  .videoblock__data {
    font-size: 14px;
  }
  .videoblock__preview-length {
    font-size: 14px;
  }
}
</style>
