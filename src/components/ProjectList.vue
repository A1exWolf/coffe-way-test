<template>
  <div class="project-list">
    <h1>Список проектов</h1>
    <input type="text" v-model="searchQuery" placeholder="Поиск проекта" class="search-input" />
    <router-link to="/add-project" class="add-button">Добавить новый проект</router-link>
    <ul class="projects">
      <li v-for="project in filteredProjects" :key="project.id">
        <ProjectItem :project="project" @deleteProject="deleteProject" />
      </li>
    </ul>
  </div>
</template>

<script setup>
import {ref, computed} from 'vue';
import ProjectItem from './ProjectItem.vue';

const projects = ref(JSON.parse(localStorage.getItem('projects') || '[]'));
const searchQuery = ref('');

const filteredProjects = computed(() => {
  return projects.value.filter(project =>
      project.name.toLowerCase().includes(searchQuery.value.toLowerCase())
  );
});

const deleteProject = id => {
  projects.value = projects.value.filter(project => project.id !== id);
  localStorage.setItem('projects', JSON.stringify(projects.value));
};
</script>

<style scoped>
.project-list {
  background: #fff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

h1 {
  font-size: 24px;
  margin-bottom: 20px;
}

.search-input {
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin-bottom: 20px;
}

.add-button {
  display: inline-block;
  padding: 10px 20px;
  margin-left: 20px;
  background-color: #42b983;
  color: white;
  border-radius: 4px;
  text-decoration: none;
  transition: background-color 0.3s;
}

.add-button:hover {
  background-color: #369870;
}

.projects {
  list-style: none;
  padding: 0;
  word-wrap: break-word;
  word-break: break-word;
}

.projects li {
  margin-bottom: 10px;
}

@media (width < 565px) {
  .project-list {
    display: flex;
    flex-direction: column;
    /* justify-content: center; */
  }

  .add-button {
    margin: 0px 40px;
    text-align: center;
  }
}
</style>
