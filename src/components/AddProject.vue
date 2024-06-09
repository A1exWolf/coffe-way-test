<template>
  <div class="form-container">
    <h1>Добавить проект</h1>
    <form @submit.prevent="addProject" class="project-form">
      <div>
        <label for="name">Название прокта:</label>
        <input type="text" v-model="name" required />
      </div>
      <div>
        <label for="description">Описание проекта:</label>
        <textarea v-model="description" required></textarea>
      </div>
      <div>
        <label for="dueDate">Дата окончания проекта:</label>
        <input type="date" v-model="dueDate" required />
      </div>
      <button type="submit" class="submit-button">Добавить проект</button>
    </form>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const name = ref('');
const description = ref('');
const dueDate = ref('');
const router = useRouter();

const addProject = () => {
  const projects = JSON.parse(localStorage.getItem('projects') || '[]');
  const newProject = {
    id: Date.now().toString(),
    name: name.value,
    description: description.value,
    dueDate: dueDate.value
  };
  projects.push(newProject);
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
  width: calc(100% - 20px);;
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
