<script setup>
import { ref, watch } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const history = ref([]);
const currentIndex = ref(-1);

const goBack = () => {
  if (currentIndex.value > 0) {
    currentIndex.value--;
    router.push(history.value[currentIndex.value]);
  }
};

const goForward = () => {
  if (currentIndex.value < history.value.length - 1) {
    currentIndex.value++;
    router.push(history.value[currentIndex.value]);
  }
};

watch(
    () => router.currentRoute.value,
    (to) => {
      if (currentIndex.value === -1 || history.value[currentIndex.value] !== to.fullPath) {
        history.value.splice(currentIndex.value + 1);
        history.value.push(to.fullPath);
        currentIndex.value = history.value.length - 1;
      }
    },
    { immediate: true }
);
</script>

<template>
  <div class="header">
    <div class="navigation-buttons">
      <button @click="goBack" :disabled="currentIndex <= 0">Назад</button>
      <button @click="goForward" :disabled="currentIndex >= history.length - 1">Вперед</button>
    </div>
    <div class="project-link">
      <router-link to="/projects">Список проектов</router-link>
    </div>
  </div>
</template>

<style scoped>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  background-color: #42b983;
  color: white;
  margin-bottom: 15px;
  border-radius: 8px;
}

.navigation-buttons button {
  background: none;
  border: none;
  color: white;
  font-size: 16px;
  margin: 0 10px;
  cursor: pointer;
  padding: 10px;
  border-radius: 4px;
  transition: background-color 0.3s;
}

.navigation-buttons button:disabled {
  cursor: not-allowed;
  opacity: 0.5;
}

.navigation-buttons button:not(:disabled):hover {
  background-color: #369870;
}

.project-link a {
  color: white;
  text-decoration: none;
  font-size: 18px;
  font-weight: bold;
}

.project-link a:hover {
  text-decoration: underline;
}
</style>
