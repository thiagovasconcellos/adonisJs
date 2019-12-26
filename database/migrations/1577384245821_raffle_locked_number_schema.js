'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class RaffleLockedNumberSchema extends Schema {
  up () {
    this.create('raffle_locked_numbers', (table) => {
      table.increments()
      table
        .integer('raffle_id')
        .unsigned()
        .references('id')
        .inTable('raffles')
        .onUpdate('CASCADE')
        .onDelete('CASCADE')
      table
        .integer('owner_id')
        .unsigned()
        .references('id')
        .inTable('users')
        .onUpdate('CASCADE')
        .onDelete('SET NULL')
      table.integer('number_locked').notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('raffle_locked_numbers')
  }
}

module.exports = RaffleLockedNumberSchema
