import { createRouter, createWebHistory } from "vue-router";

import BotaoIncremento from "../components/BotaoIncremento.vue";
import HelloWorld from "../components/HelloWorld.vue";

const routes = [
    {
      path: "/", //URL relativo da rota
      name: "home", //nome da rota
      component: HelloWorld,  //componente Vue associado à rota
    },
    {
      path: "/incremento",
      name: "incremento",
      component: BotaoIncremento,  
    },
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

export default router;