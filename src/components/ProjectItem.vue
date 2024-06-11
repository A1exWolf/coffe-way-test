<template>
  <div class="project-item">
    <router-link :to="'/projects/' + project.id">{{ project.name }}</router-link>
    <button @click="deleteProject" class="delete-button">Удалить</button>
  </div>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue';

const props = defineProps({
  project: {
    type: Object,
    required: true
  }
});

const emits = defineEmits(['deleteProject']);

const deleteProject = () => {
  emits('deleteProject', props.project.id);
};
</script>

<style scoped>
.project-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  background: #fff;
  border-radius: 4px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  transition: box-shadow 0.3s;
}

.project-item:hover {
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

a {
  text-decoration: none;
  color: #42b983;
}

.delete-button {
  background-color: #e74c3c;
  color: white;
  border: none;
  border-radius: 4px;
  padding: 5px 10px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.delete-button:hover {
  background-color: #c0392b;
}

@media (width < 565px) {
  .delete-button {
    margin-left: 10px;
  }
}
</style>
