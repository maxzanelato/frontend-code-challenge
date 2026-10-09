export const getTicketEventInformation = async () => {
  const response = await fetch('http://localhost:3001/events/1')
  return response.json()
}
