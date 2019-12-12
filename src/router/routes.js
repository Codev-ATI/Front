import Home from '../views/Home.vue'
import Inscription from "../views/Inscription";
import VueRouter from "vue-router";
import Connexion from "../views/Connexion";

const Routes = new VueRouter({
  routes: [
    { path: '/', redirect: '/home' },
    { path: '/home', component: Home},
    { path: '/inscription', component: Inscription},
    { path: '/connexion', component: Connexion},
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
