

import routes from "./routes";
import { createRouter, createWebHashHistory, createWebHistory } from "vue-router";

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router;


