import { createContext, useContext } from 'react'

const TicketInformationContext = createContext<{} | undefined>(undefined)

interface TicketInformationProviderProps {
  children: React.ReactNode
}

export const TicketInformationProvider = ({
  children,
}: TicketInformationProviderProps) => {
  //chamada HTTP

  return (
    <TicketInformationContext.Provider value={undefined}>
      {children}
    </TicketInformationContext.Provider>
  )
}

export function useTicketInformation() {
  const context = useContext(TicketInformationContext)
  if (!context) {
    throw new Error(
      'useTicketInformation must be used within a TicketInformationProvider',
    )
  }
  return context
}
