//const http = require('http')
import http from 'node:http'

// Criar usuário
const server = http.createServer((request, response) => {
    return response.end('Olá mundo, restart 2')
})

server.listen(3333)

// CommonJs ==>require
// ESmodules ==> import/export