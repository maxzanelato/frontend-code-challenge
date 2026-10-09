import assert from 'node:assert/strict'
import { readFile, access } from 'node:fs/promises'
import test from 'node:test'

const { events } = JSON.parse(
  await readFile(new URL('../db.json', import.meta.url), 'utf8'),
)

test('fixtures keep valid event data, local images, and integer prices in centavos', async () => {
  assert.equal(new Set(events.map((event) => event.id)).size, events.length)

  for (const event of events) {
    for (const field of ['title', 'description', 'date'])
      assert.ok(event[field]?.length)

    assert.ok(Number.isFinite(Date.parse(event.date)))

    for (const field of ['name', 'city', 'state'])
      assert.ok(event.location[field]?.length)

    assert.match(event.image, /^\/[a-z-]+\.svg$/)

    await access(new URL(`../public${event.image}`, import.meta.url))

    assert.ok(event.tickets.length > 0)

    assert.equal(
      new Set(event.tickets.map((ticket) => ticket.id)).size,
      event.tickets.length,
    )

    for (const ticket of event.tickets) {
      assert.ok(ticket.name.length > 0)
      assert.ok(Number.isSafeInteger(ticket.price) && ticket.price >= 0)
      assert.ok(
        Number.isSafeInteger(ticket.availableQuantity) &&
          ticket.availableQuantity >= 0,
      )
    }
  }
})

test('fixtures expose mixed availability, sold-out, and last-ticket scenarios', () => {
  const find = (id) => events.find((event) => String(event.id) === id)

  assert.ok(find('1').tickets.some((ticket) => ticket.availableQuantity > 0))
  assert.ok(find('1').tickets.some((ticket) => ticket.availableQuantity === 0))
  assert.ok(find('2').tickets.every((ticket) => ticket.availableQuantity === 0))

  assert.equal(
    find('3').tickets.reduce(
      (sum, ticket) => sum + ticket.availableQuantity,
      0,
    ),
    1,
  )

  assert.equal(find('1').tickets[0].price, 4990)
  assert.equal(find('999'), undefined)
})
