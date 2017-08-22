import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import activeManage from '@/components/page/monitor/index'
import bdManage from '@/components/page/bdCard/map'
import bdCommunication from '@/components/page/communication/index'
import stystem from '@/components/page/stystem/index'

import bdCard from '@/components/page/bdCard/el-index'
import carQuery from '@/components/page/bdCard/navRight'

Vue.use(Router)

export default new Router({
    routes: [{
            path: '/map',
            name: 'Hello',
            component: activeManage
        },
        {
            path: '/bdManage',
            name: 'Hello',
            component: bdManage,
            children: [
                { path: '/carTitle', component: bdCard },
                { path: '/carQuery', component: carQuery },
            ]
        }, {
            path: '/bdCommunication',
            name: 'Hello',
            component: bdCommunication
        }, {
            path: '/stystem',
            name: 'Hello',
            component: stystem
        },
    ]
})