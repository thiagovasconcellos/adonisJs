'use strict'

const Schema = use('Schema')

class RaffleSchema extends Schema {
  up () {
    this.create('raffles', (table) => {
      table.increments()
      table
        .integer('user_id')
        .unsigned()
        .references('id')
        .inTable('users')
        .onUpdate('CASCADE')
        .onDelete('SET NULL')
      table
        .integer('file_id')
        .unsigned()
        .references('id')
        .inTable('files')
        .onUpdate('CASCADE')
        .onDelete('SET NULL')
      table.string('title', 50).notNullable()
      table.string('title_reduced', 50).notNullable()
      table.string('description').notNullable()
      table.float('value').notNullable()
      table.integer('quantity').notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('raffles')
  }
}

module.exports = RaffleSchema
