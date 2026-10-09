import { useState } from 'react'
import Button from '../Button/Button.component'

export default function TicketCounter() {
  const [count, setCount] = useState(1)

  return (
    <>
      <Button onClick={() => setCount(count - 1)}>-</Button>
      {count}
      <Button onClick={() => setCount(count + 1)}>+</Button>
    </>
  )
}
