import TicketCounter from '../TicketCounter/TicketCounter.component'

export default function TicketInformation() {
  return (
    <div className="p-4">
      <h1>Festival de música</h1>
      <p>Um festival com as melhores bandas do cenário alternativo.</p>

      <div className="flex justify-between">
        <div>
          <p>Preço unitário</p>
          <p>R$ 100,00</p>
          <p>Total R$ 100,00</p>
        </div>
        <div>
          <TicketCounter />
        </div>
      </div>
    </div>
  )
}
