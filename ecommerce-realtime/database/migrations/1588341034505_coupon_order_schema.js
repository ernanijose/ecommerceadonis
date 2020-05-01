'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class CouponOrderSchema extends Schema {
  up () {
    this.create('coupon_order', (table) => {
      table.increments()
      table.integer('coupon_id').unsigned()
      table.integer('order_id').unsigned()
      table.decimal('discount', 12,2).defaultTo(0.0)
      table.timestamps()

      table
      .foreign('coupon_id')
      .references('id')
      .inTable('coupons')
      .onDelete('cascade')

      table
      .foreign('product_id')
      .references('id')
      .inTable('products')
      .onDelete('cascade')
    })
  }

  down () {
    this.drop('coupon_order')
  }
}

module.exports = CouponOrderSchema
