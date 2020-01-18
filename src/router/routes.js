import Home from '../views/Home.vue'
import Register from "../views/account/Register";
import VueRouter from "vue-router";
import Login from "../views/account/Login";
import QuestionSample from "../views/questions/QuestionSample";
import Test from "../views/Test";
import PlayGame from "../views/game/JoinGame";
import Editor from "../views/creator/Editor";
import CreateGame from "../views/game/CreateGame";
import GameService from "../GameService";

const Routes = new VueRouter({
  routes: [
    { path: '/', redirect: '/home' },
    { path: '/home', component: Home },
    { path: '/register', component: Register },
    { path: '/login', component: Login },
    { path: '/sample', component: QuestionSample },
    { path: '/test', component: Test },
    { path: '/playgame', component: PlayGame },
    { path: '/editor', component: Editor, meta: { requiresAuth: true }},
    { path: '/creategame', component: CreateGame }
   /* { path: '/creerQuestionnaire', component: CreerQuestionnaire, meta: { requiresAuth: true }}*/
  ],

  mode: 'history'
});


Routes.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (!GameService.hasToken()) next({ path: '/home' });
    else next();
  } else next();
});

export default Routes;
