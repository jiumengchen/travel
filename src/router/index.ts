import {createRouter,createWebHashHistory} from 'vue-router'
import receptionRouters from './receptionRouters';

const router = createRouter({
    history:createWebHashHistory(),
    routes:[
        ...receptionRouters
    ]
})

export default router;