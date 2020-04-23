import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/',
            name: 'home',
            component: () =>
                import('./Views/HomePage')
        },
        {
            path: '/details/:vehicle_id',
            name: 'details',
            component: () =>
                import('./Views/DetailsPage')
        },
        {
            path: '/form',
            name: 'vehicleForm',
            component: () =>
                import('./Views/VehicleForm')
        }

    ]
})
