import { createRouter, createWebHistory } from 'vue-router';
import ProjectList from '../components/ProjectList.vue';
import ProjectDetails from '../components/ProjectDetails.vue';
import AddProject from '../components/AddProject.vue';
import EditProject from '../components/EditProject.vue';

const routes = [
  { path: '/projects', component: ProjectList, alias: '/' },
  { path: '/projects/:id', component: ProjectDetails, props: true },
  { path: '/add-project', component: AddProject },
  { path: '/edit-project/:id', component: EditProject, props: true }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
