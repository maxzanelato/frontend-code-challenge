import Hero from '../components/Hero.component'
import TicketInformation from '../components/TicketInformation/TicketInformation.component'

export default function TicketPage() {
  return (
    <main className="flex items-center justify-center pt-8">
      <section className="flex w-full max-w-[641px] flex-col gap-4">
        <Hero />
        <TicketInformation />
      </section>
    </main>
  )
}
