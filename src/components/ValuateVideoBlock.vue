<script setup>
import { ref, computed, onMounted } from 'vue'

const videoName = ref('Примерное название видео на пару слов')
const videoCategory = ref('Категория')
const videoPublicDate = ref('4 часа назад')

const videoPreviews = ['p1.jpg', 'p2.jpg', 'p3.jpg', 'p4.jpg']
const randomIndex = Math.floor(Math.random() * videoPreviews.length)
const randomElement = videoPreviews[randomIndex]

const selectedPreviewPath = ref('/src/assets/images/previews/')
selectedPreviewPath.value = selectedPreviewPath.value + randomElement

function normalizeAndTruncate(str, maxLength) {
  const trimmedStr = str.trim()
  if (!trimmedStr) return ''
  return trimmedStr.length > maxLength ? `${trimmedStr.slice(0, maxLength)}...` : trimmedStr
}

const truncatedVideoName = computed(() => normalizeAndTruncate(videoName.value, 40))

const isLiked = ref(false)
const isDisliked = ref(false)

function like() {
  isLiked.value = !isLiked.value
  isDisliked.value = false
}

function dislike() {
  isDisliked.value = !isDisliked.value
  isLiked.value = false
}
</script>

<template>
  <div className="valuate_videoblock">
    <div className="valuate-videoblock__preview">
      <div class="valuate-videoblock__preview-img">
        <img :src="selectedPreviewPath" alt="" />
      </div>
    </div>
    <div className="valuate-videoblock__name">
      <a className="valuate-videoblock__name-header">{{ truncatedVideoName.trim() }}</a>
    </div>
    <div class="valuate-videoblock__data">
      <span>{{ videoCategory }} | {{ videoPublicDate }}</span>
    </div>

    <div class="valuate-videoblock__buttons">
      <div
        class="valuate-videoblock__buttons-like"
        :class="isLiked ? 'v-action' : ''"
        @click="like()"
      >
        <img
          :src="
            isLiked ? '/src/assets/images/liked_button.svg' : '/src/assets/images/like_button.svg'
          "
          alt=""
        />
      </div>
      <div
        class="valuate-videoblock__buttons-dislike"
        :class="isDisliked ? 'v-action' : ''"
        @click="dislike()"
      >
        <img
          :src="
            isDisliked
              ? '/src/assets/images/liked_button.svg'
              : '/src/assets/images/like_button.svg'
          "
          alt=""
        />
      </div>
    </div>
  </div>
</template>

<style scoped>
.valuate-videoblock__preview {
  /*height: 210px; */
  position: relative;
  overflow: hidden;
  object-position: center;
  display: flex;
  align-items: center;
  /* background: rgba(0, 0, 0, 0.5); */
  border-radius: 5px;
}

.valuate-videoblock__preview img {
  border-radius: 8px;
  height: 100%;
  cursor: pointer;
}

.valuate-videoblock__preview-length {
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

.valuate-videoblock__name {
  margin-top: 5px;
  display: flex;
  gap: 8px;
}

.valuate-videoblock__name {
  color: white;
  text-decoration: none;
  white-space: normal;
  word-break: break-word;
}

.valuate-videoblock__name-button {
  font-size: 30px;
}

.valuate-videoblock__name-header {
  font-weight: 500;
  font-size: 15px;
  cursor: pointer;
}

.valuate-videoblock__data {
  margin-top: 8px;
  color: var(--text-secondary);
  font-size: 12px;
}

.valuate-videoblock__buttons {
  display: flex;
  gap: 8px;
  margin-top: 8px;
}

.button-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: transparent;
}

.valuate-videoblock__buttons-like,
.valuate-videoblock__buttons-dislike {
  position: relative;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  border: 1px solid #29333d;
  cursor: pointer;
}

.valuate-videoblock__buttons-like:hover,
.valuate-videoblock__buttons-dislike:hover,
.v-action {
  background: #1c232b;
}

.valuate-videoblock__buttons-like::selection,
.valuate-videoblock__buttons-dislike::selection {
  background-color: transparent;
  color: inherit;
}

.valuate-videoblock__buttons-like::selection,
.valuate-videoblock__buttons-dislike::selection {
  background-color: transparent;
  color: inherit;
}

.valuate-videoblock__buttons-dislike {
  transform: rotate(180deg);
}

@media screen and (max-width: 500px) {
  .valuate-videoblock__name-header {
    font-size: 19px;
  }
  .valuate-videoblock__data {
    font-size: 14px;
  }
  .valuate-videoblock__preview-length {
    font-size: 14px;
  }
}
</style>
