'use-strict'

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

/**
 * Rotas para administrativo
 */

 Route.group(() => {
     /**
      * Product resources routes
      */
     Route.get('products', 'ProductController.index')
     Route.get('products/:id', 'ProductController.show')

     /**
      * Orders resources routes
      */
     Route.get('orders', 'OrderController.index')
     Route.get('orders/:id', 'OrderController.show')
     Route.post('orders', 'OrderController.store')
     Route.put('orders/:id', 'OrderController.put')
 })
 .prefix('v1')
 .namespace('client')