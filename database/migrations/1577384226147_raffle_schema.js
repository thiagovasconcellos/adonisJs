'use strict'

const Schema = use('Schema')

class RaffleSchema extends Schema {
  up () {
    this.create('raffles', (table) => {
      table.increments()
      table
        .integer('owner_id')
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
      table.enu('numbers', ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'], {
        enumName: 'text',
        existingType: true,
        schemaName: 'public'
      })
      table.timestamps()
    })
  }

  down () {
    this.drop('raffles')
  }
}

module.exports = RaffleSchema
