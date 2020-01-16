import Home from '../views/Home.vue'
import Inscription from "../views/Inscription";
import VueRouter from "vue-router";
import Connexion from "../views/Connexion";
import QuestionSample from "../views/questions/QuestionSample";
import Test from "../views/Test";
import Rejoindre from "../views/Jouer";
import Editeur from "../views/creator/Editeur";
import Creation from "../views/Creation";

const Routes = new VueRouter({
  routes: [
    { path: '/', redirect: '/home' },
    { path: '/home', component: Home},
    { path: '/inscription', component: Inscription},
    { path: '/connexion', component: Connexion},
    { path: '/sample', component: QuestionSample},
    { path: '/test', component: Test},
    { path: '/rejoindre', component: Rejoindre},
    { path: '/editeur', component: Editeur},
    { path: '/creation', component: Creation}
   /* { path: '/creerQuestionnaire', component: CreerQuestionnaire, meta: { requiresAuth: true }}*/
  ],

  mode: 'history'
});


/*Routes.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (TEST CONNECTE) next({ path: '/home' });
    else next();
  } else next();
});*/

export default Routes;
