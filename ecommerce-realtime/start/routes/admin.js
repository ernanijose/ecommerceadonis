'use-strict'

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

/**
 * Rotas para administrativo
 */

 Route.group(() => {
     /**
      * Categories route resources
      */
     Route.resource('categories', 'CategoryController').apiOnly()

     /**
      * Products route resources
      */
     Route.resource('products', 'ProductController').apiOnly()

     /**
      * Coupon route resources
      */
     Route.resource('coupons', 'CouponController').apiOnly()

     /**
      * Orders route resources
      */
     Route.resource('orders', 'OrderController').apiOnly()

     /**
      * Images route resources
      */
     Route.resource('images', 'ImageController').apiOnly()

     /**
      * Users route resources
      */
     Route.resource('users', 'UserController').apiOnly()
 })
 .prefix('v1/admin')
 .namespace('Admin')