import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Posts from "../views/Posts.vue";
import Cards from "../views/Cards.vue";
import Post from "../components/Post.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Posts",
    component: Posts,
  },
  {
    path: "/cards",
    name: "Cards",
    component: Cards,
  },
  {
    path: "/posts/:id",
    component: Post,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
