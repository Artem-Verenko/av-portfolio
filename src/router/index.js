import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import Blog from "../views/Blog.vue";
import Books from "../views/Books.vue";
import CV from "../views/CV.vue";

const routes = [
	{
		path: "/",
		name: "Home",
		component: HomeView,
	},
	{
		path: "/blog",
		name: "Blog",
		component: Blog,
	},
	{
		path: "/books",
		name: "Books",
		component: Books,
	},
	{
		path: "/cv",
		name: "CV",
		component: CV,
	},
];

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes,
});

export default router;
