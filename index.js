'use strict'

const readFile = require('./lib/read-file')
const { send } = require('micro')

module.exports = async (request, response) => {
  const data = await readFile('lib/data/data.xml')
  send(response, 200, data)
}
