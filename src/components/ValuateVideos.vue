<script setup>
import { ref, onMounted } from "vue";

import ValuateVideoBlock from "./ValuateVideoBlock.vue";
import axios from "axios";
const videos = ref([]);

let videosSession = localStorage.getItem("apiResponse");
if (videosSession) {
  videos.value = JSON.parse(videosSession);
} else {
  async function fetchVideos() {
    try {
      const response = await axios.get("http://localhost/api/videos");
      videos.value = response.data;
    } catch (error) {
      console.error("Ошибка при загрузке видео:", error);
    }
  }

  onMounted(() => {
    fetchVideos();
  });
  await fetchVideos();
}

async function submit() {
  const result = [];

  const videoBlocks = document.querySelectorAll(".valuate_videoblock");

  videoBlocks.forEach((block) => {
    const dataId = block.getAttribute("data-id");
    const dataState = parseInt(block.getAttribute("data-state"));

    if (dataId && dataState !== null) {
      result.push({
        evaluation: dataState,
        id: `${dataId}`,
      });
    }
  });

  let videoData = JSON.stringify(result, null, 2);
  try {
    const response = await fetch("http://localhost:80/api/videos", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        accept: "application/json",
      },
      body: videoData,
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const result = await response.json();
    console.log(result);
    const successString = JSON.stringify(result, null, 2);
    localStorage.setItem("apiResponse", successString);
  } catch (error) {
    console.error("Error sending data:", error);
  }
}
</script>

<template>
  <div class="valuatepage">
    <div class="valuatepage__content">
      <div class="valuatepage-header">
        <h1>
          <router-link to="/">
            <div class="valuatepage__content-top-img">
              <img src="/src/assets/images/arrowmain.svg" alt="" />
            </div>
          </router-link>
          <span>Оценка подборки</span>
        </h1>

        <span class="valuatepage_content-text"
          >Сопроводительный текст, который возможно будет даже иметь какой-либо
          смысл, когда я его придумаю</span
        >
        <button class="valuatepage-header-submit" @click="submit">
          <a href="/valuation">Применить оценки</a>
        </button>
      </div>

      <div class="valuatepage__videos">
        <ValuateVideoBlock
          v-for="(video, index) in videos"
          :key="index"
          :Id="video.id"
          :Name="video.name"
          :Category="video.category"
          :Date="video.date"
          :Duration="video.duration"
        />
      </div>

      <div class="valuatepage__footer">
        <span>made by Reality BUTSA GOL</span>
        <span>Leaders of digital 2024. RUTUBE</span>
      </div>
    </div>
  </div>
</template>

<style scoped>
.valuatepage {
}

.valuatepage__content {
  margin: 0 192px;
  height: 100%;
  display: flex;
  flex-direction: column;
}

.valuatepage-header {
  margin-top: 48px;
}

.valuatepage-header {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.valuatepage-header h1 {
  color: white;
  font-size: 24px;
  display: flex;
  align-items: center;
}

.valuatepage__content-top-img {
  width: 24px;
  height: 24px;
  margin-right: 20px;
  cursor: pointer;

  display: flex;
  align-items: center;
  justify-content: flex-start;
}

.valuatepage__content-top-img img {
  transform: rotate(180deg);
}

.valuatepage-header .valuatepage_content-text {
  color: var(--text-secondary);
  margin-top: 24px;
}

.valuatepage-header-submit {
  padding: 10px 16px;
  margin-top: 24px;
  background: #00a1e7;
  color: white;
  border-radius: 25px;
  transition: 0.15s;
}

.valuatepage-header-submit:hover {
  background: #0281b9;
}

.valuatepage__videos {
  display: grid;
  grid-template-columns: repeat(5, minmax(0, 1fr));
  grid-gap: 16px;
  margin-top: 56px;
}

.valuatepage__footer {
  margin-top: 128px;
  margin-bottom: 24px;
  font-size: 16px;
  color: var(--text-secondary);
  display: flex;
  justify-content: space-between;
}

@media screen and (max-width: 1250px) {
  .valuatepage__videos {
    grid-template-columns: repeat(4, minmax(0, 1fr));
    grid-gap: 16px;
  }

  .valuatepage__content {
    margin: 0 110px;
  }
}

@media screen and (max-width: 1000px) {
  .valuatepage__videos {
    grid-template-columns: repeat(3, minmax(0, 1fr));
    grid-gap: 10px;
  }

  .valuatepage__content {
    margin: 0 36px;
  }
}

@media screen and (max-width: 760px) {
  .valuatepage__videos {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
  .valuatepage__footer {
    font-size: 10px;
  }
}

@media screen and (max-width: 500px) {
  .valuatepage__videos {
    grid-template-columns: repeat(1, minmax(0, 1fr));
    grid-gap: 36px;
  }

  .valuatepage-header {
    margin-top: 36px;
  }
  .valuatepage__content {
    margin: 0 24px;
  }

  .valuatepage__content-top-img {
    width: 20px;
    height: 20px;
  }
}
</style>
