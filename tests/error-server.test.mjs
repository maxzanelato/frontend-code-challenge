import assert from 'node:assert/strict'
import { once } from 'node:events'
import test from 'node:test'
import { createErrorServer } from '../scripts/error-server.mjs'

test('failure API returns 503 JSON with CORS and supports browser preflight', async (t) => {
  const server = createErrorServer()

  t.after(
    () =>
      new Promise((resolve, reject) => {
        server.close((error) => (error ? reject(error) : resolve()))
        server.closeAllConnections()
      }),
  )

  server.listen(0, '127.0.0.1')

  await once(server, 'listening')

  const origin = `http://127.0.0.1:${server.address().port}`

  for (const path of ['/events', '/events/1', '/events/1?test=true']) {
    const response = await fetch(`${origin}${path}`)
    assert.equal(response.status, 503)
    assert.equal(response.headers.get('access-control-allow-origin'), '*')
    assert.match(response.headers.get('content-type'), /application\/json/)
    assert.deepEqual(await response.json(), {
      message: 'Serviço de eventos temporariamente indisponível.',
    })
  }

  const preflight = await fetch(`${origin}/events/1`, { method: 'OPTIONS' })

  assert.equal(preflight.status, 204)

  assert.equal(
    preflight.headers.get('access-control-allow-methods'),
    'GET, OPTIONS',
  )

  assert.equal((await fetch(`${origin}/other`)).status, 404)
})
