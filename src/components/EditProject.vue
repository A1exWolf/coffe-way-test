<template>
  <div class="form-container">
    <h1>Редактор проекта</h1>
    <form @submit.prevent="editProject" class="project-form">
      <div>
        <label for="name">Название проекта:</label>
        <input type="text" v-model="project.name" required />
      </div>
      <div>
        <label for="description">Описание проекта:</label>
        <textarea v-model="project.description" required></textarea>
      </div>
      <div>
        <label for="dueDate">Дата окончания проекта:</label>
        <input type="date" v-model="project.dueDate" required />
      </div>
      <button type="submit" class="submit-button">Сохранить изменения</button>
    </form>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';

const route = useRoute();
const router = useRouter();
const project = ref({});

onMounted(() => {
  const projects = JSON.parse(localStorage.getItem('projects') || '[]');
  project.value = projects.find(proj => proj.id === route.params.id);
});

const editProject = () => {
  let projects = JSON.parse(localStorage.getItem('projects') || '[]');
  projects = projects.map(proj => (proj.id === route.params.id ? project.value : proj));
  localStorage.setItem('projects', JSON.stringify(projects));
  router.push('/projects');
};
</script>

<style scoped>
.form-container {
  background: #fff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  max-width: 600px;
  margin: 0 auto;
}

h1 {
  font-size: 24px;
  margin-bottom: 20px;
}

.project-form div {
  margin-bottom: 10px;
}

label {
  display: block;
  margin-bottom: 5px;
  font-weight: bold;
}

input, textarea {
  width: calc(100% - 20px);
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.submit-button {
  display: block;
  width: 100%;
  padding: 10px;
  background-color: #42b983;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.submit-button:hover {
  background-color: #369870;
}
</style>
