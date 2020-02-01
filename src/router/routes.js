import Home from '../views/Home.vue'
import Register from "../views/account/Register";
import VueRouter from "vue-router";
import Login from "../views/account/Login";
import Test from "../views/Test";
import PlayGame from "../views/game/menu/JoinGame";
import CreateGame from "../views/game/menu/CreateGame";
import GameService from "../services/GameService";
import CreateQuiz from "../views/creator/CreateQuiz";
import WaitingRoom from "../views/game/ingame/WaitingRoom";
import ChoosePseudo from "../views/game/menu/ChoosePseudo";
import Game from "../views/game/ingame/Game";
import RoomService from "../services/RoomService";

const Routes = new VueRouter({
  routes: [
    { path: '/', redirect: '/home' },
    { path: '/home', component: Home },
    { path: '/register', component: Register },
    { path: '/login', component: Login },
    { path: '/test', component: Test },
    { path: '/playgame', component: PlayGame },
    { path: '/createquiz', component: CreateQuiz, meta: { requiresAuth: true } },
    { path: '/creategame', component: CreateGame },
    { path: '/waitingroom', component: WaitingRoom, meta: { requiresGame: true } },
    { path: '/choosepseudo', name: "choosepseudo", component: ChoosePseudo, props: true },
    { path: '/game', component: Game, meta: { requiresGame: true } }
   /* { path: '/creerQuestionnaire', component: CreerQuestionnaire, meta: { requiresAuth: true }}*/
  ],

  mode: 'history'
});


Routes.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (!GameService.hasToken()) next({ path: '/home' });
    else next();
  } else if (to.matched.some(record => record.meta.requiresGame)) {
    if (RoomService.instance == null) next({ path: "/playgame" });
    else next();
  } else next();
});

export default Routes;
