import { createServer } from 'node:http'
import { pathToFileURL } from 'node:url'

export function createErrorServer() {
  return createServer((request, response) => {
    response.setHeader('Access-Control-Allow-Origin', '*')
    response.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS')
    response.setHeader('Access-Control-Allow-Headers', 'Content-Type')
    if (request.method === 'OPTIONS') {
      response.writeHead(204).end()
      return
    }
    const pathname = new URL(request.url, 'http://localhost').pathname
    const isEvent = /^\/events(?:\/[^/]+)?\/?$/.test(pathname)
    response.writeHead(isEvent ? 503 : 404, {
      'Content-Type': 'application/json; charset=utf-8',
    })
    response.end(
      JSON.stringify({
        message: isEvent
          ? 'Serviço de eventos temporariamente indisponível.'
          : 'Recurso não encontrado.',
      }),
    )
  })
}

if (
  process.argv[1] &&
  import.meta.url === pathToFileURL(process.argv[1]).href
) {
  const server = createErrorServer()
  server.on('error', (error) => {
    console.error(
      error.code === 'EADDRINUSE'
        ? 'Porta 3001 ocupada. Pare a outra API antes de iniciar server:error.'
        : error.message,
    )
    process.exitCode = 1
  })
  server.listen(3001, '127.0.0.1', () => {
    console.log('API de falha (HTTP 503): http://localhost:3001/events/1')
  })
}
