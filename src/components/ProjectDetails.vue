<template>
  <div class="project-details">
    <h1>{{ project.name }}</h1>
    <p>Описание: {{ project.description }}</p>
    <p>Дата окончания: {{ project.dueDate }}</p>
    <router-link :to="'/edit-project/' + project.id" class="edit-button">Редактировать</router-link>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();
const project = ref({});

onMounted(() => {
  const projects = JSON.parse(localStorage.getItem('projects') || '[]');
  project.value = projects.find(proj => proj.id === route.params.id);
});
</script>

<style scoped>
.project-details {
  background: #fff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

h1 {
  font-size: 24px;
  margin-bottom: 10px;
}

.edit-button {
  display: inline-block;
  padding: 10px 20px;
  background-color: #42b983;
  color: white;
  border-radius: 4px;
  text-decoration: none;
  transition: background-color 0.3s;
}

.edit-button:hover {
  background-color: #369870;
}
</style>
