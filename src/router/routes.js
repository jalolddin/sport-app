const routes = [

    {
        path: '/',
        component: () =>
            import ('../pages/IndexPage.vue')

    },
    {
        path: '/:id',
        name: 'places',
        component: () =>
            import ('../pages/Places.vue')

    },
    {
        path: '/teams',
        component: () =>
            import ('../pages/Teams.vue')

    },
    {
        path: '/orders',
        component: () =>
            import ('../pages/Orders.vue')

    },
    {
        path: '/profile',
        component: () =>
            import ('../pages/Profile.vue')

    },
    // Always leave this as last one,
    // but you can also remove it
    {
        path: '/:catchAll(.*)*',
        component: () =>
            import ('pages/ErrorNotFound.vue')
    }
]

export default routes