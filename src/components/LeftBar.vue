<script setup>
defineProps({
  isShown: Boolean
})
</script>

<template>
  <section
    v-if="!isShown"
    className="leftbar left-hidden fixed left-0 bottom-0 bg-red-100 flex flex-col"
  >
    <div v-for="i in 10" :key="i" class="left-hidden__block flex flex-col">
      <span>Х</span>
      <span class="left-hidden__font">Тема</span>
    </div>
  </section>

  <section v-else-if="isShown" className="leftbar left-shown fixed left-0 bg-red-100 flex flex-col">
    <div v-for="i in 10" :key="i" class="left-shown__block flex">
      <span class="left-shown__block-img">X</span>
      <span class="left-shown__block-text">Тема {{ i }}</span>
    </div>
  </section>
</template>

<style scope>
.leftbar {
  background-color: var(--bg-controls);
  overflow-y: auto;
  height: 100vh;
  position: fixed;
  top: var(--header-height-desktop);
}

.left-hidden {
  width: var(--left-width-hidden-desktop);
}
.left-hidden__block {
  color: white;
  height: 60px;
  justify-content: center;
  align-content: center;
  text-align: center;

  border-bottom-right-radius: 6px;
  border-top-right-radius: 6px;

  cursor: pointer;
  transition: 0.1s;
}

.left-hidden__block:hover,
.left-hidden__block-active,
.left-shown__block:hover,
.left-shown__block-active {
  background: #29333d;
}

.left-hidden__font {
  font-size: 10px;
}

.left-shown {
  background-color: var(--bg-controls);
  width: var(--left-width-shown-desktop);
}

.left-shown__block {
  width: 100%;
  color: white;
  padding: 10px 2px 10px 24px;
  align-items: center;
  font-size: 14px;

  border-bottom-right-radius: 6px;
  border-top-right-radius: 6px;

  cursor: pointer;
  transition: 0.1s;
}

.left-shown__block-text {
  margin-left: 24px;
}
</style>
