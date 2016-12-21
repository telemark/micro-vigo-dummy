'use strict'

const readFile = require('./lib/read-file')
const { send } = require('micro')
const { parse } = require('url')

module.exports = async (request, response) => {
  const query = parse(request.url, true).query
  if (query.xsd) {
    console.log(query)
    const data = await readFile('lib/data/xsd.xml')
    send(response, 200, data)
  } else if (request.method === 'POST') {
    const data = await readFile('lib/data/data.xml')
    send(response, 200, data)
  } else {
    const data = await readFile('lib/data/wsdl.xml')
    send(response, 200, data)
  }
}
