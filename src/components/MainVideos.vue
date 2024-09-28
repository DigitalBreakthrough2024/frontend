<script setup>
import MainVideoBlock from './MainVideoBlock.vue'

const videosBack = [
  {
    id: '123123123123',
    Name: 'Примерное название видео на пару слов',
    Category: 'Для взрослых',
    Length: '13:55',
    Date: '4 часа назад'
  },
  {
    id: '456789012345',
    Name: 'Короткое название',
    Category: 'Для детей',
    Length: '05:20',
    Date: '6 часов назад'
  },
  {
    id: '987654321098',
    Name: 'Длинное название видео',
    Category: 'Для взрослых',
    Length: '02:45',
    Date: '10 минут назад'
  },
  {
    id: '111222333444',
    Name: 'Название с цифрами',
    Category: 'Для всех возрастов',
    Length: '09:15',
    Date: '1 час назад'
  },
  {
    id: '111222333444',
    Name: 'Название с цифрами',
    Category: 'Для всех возрастов',
    Length: '09:15',
    Date: '1 час назад'
  }
]
</script>

<template>
  <div class="mainvideos">
    <div className="mainvideos__content">
      <h2 className="mainvideo__content-top">
        <span>Подборка рекомендаций</span>
        <router-link to="/valuation">
          <div class="mainvideo__content-top-img">
            <img src="/src/assets/images/arrowmain.svg" alt="" />
          </div>
        </router-link>
      </h2>
      <div className="mainvideos__content-reqvideos">
        <MainVideoBlock
          v-for="video in videosBack"
          :key="video.id"
          :video="{
            id: video.id,
            Name: video.Name,
            Category: video.Category,
            Length: video.Length,
            Date: video.Date
          }"
        />
      </div>

      <h2 className="mainvideos__content-header">Рекомендации</h2>
      <div className="mainvideos__content-reqvideos">
        <MainVideoBlock />
        <MainVideoBlock />
        <MainVideoBlock />
        <MainVideoBlock />
        <MainVideoBlock />
      </div>

      <h2 className="mainvideos__content-header">Для вас</h2>
      <div className="mainvideos__content-reqvideos">
        <MainVideoBlock />
        <MainVideoBlock />
        <MainVideoBlock />
        <MainVideoBlock />
        <MainVideoBlock />
      </div>

      <div class="mainvideo__footer">
        <span>made by Reality BUTSA GOL</span>
        <span>Leaders of digital 2024. RUTUBE</span>
      </div>
    </div>
  </div>
</template>

<style scoped>
.mainvideos {
}

.mainvideos__content {
  margin: 0 192px;
  height: 100%;
  display: flex;
  flex-direction: column;
}

.mainvideo__content-top {
  margin-top: 48px;
  display: flex;

  align-items: center;
  color: white;
  font-size: 24px;
  padding-bottom: 20px;
}

.mainvideo__content-top-img {
  width: 24px;
  height: 24px;
  margin-left: 13px;
  cursor: pointer;

  display: flex;
  align-items: center;
  justify-content: center;
}

.mainvideos__content-header {
  color: white;
  font-size: 24px;
  margin-top: 48px;
  padding-bottom: 20px;
}

.mainvideos__content-reqvideos {
  display: grid;
  grid-template-columns: repeat(5, minmax(0, 1fr));
  grid-gap: 16px;
}

.mainvideo__footer {
  margin-top: 128px;
  margin-bottom: 24px;
  font-size: 16px;
  color: var(--text-secondary);
  display: flex;
  justify-content: space-between;
}

@media screen and (max-width: 1250px) {
  .mainvideos__content-reqvideos {
    grid-template-columns: repeat(4, minmax(0, 1fr));
  }

  .mainvideos__content {
    margin: 0 110px;
  }
}

@media screen and (max-width: 1000px) {
  .mainvideos__content-reqvideos {
    grid-template-columns: repeat(3, minmax(0, 1fr));
    grid-gap: 10px;
  }

  .mainvideos__content {
    margin: 0 36px;
  }
}

@media screen and (max-width: 760px) {
  .mainvideos__content-reqvideos {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
  .mainvideo__footer {
    font-size: 10px;
  }
}

@media screen and (max-width: 500px) {
  .mainvideos__content-reqvideos {
    grid-template-columns: repeat(1, minmax(0, 1fr));
    grid-gap: 36px;
  }

  .mainvideos__content {
    margin: 0 24px;
  }
  .mainvideo__content-top {
    margin-top: 36px;
  }

  .mainvideo__content-top-img {
    width: 20px;
    height: 20px;
  }
}
</style>
