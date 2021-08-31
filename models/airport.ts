import airports from '../data/airports.json'
import Airport from '../types/airport'

export const findAirportByIata = async (iata: string): Promise<Airport | undefined> => {
  return airports.find(airport => airport.iata === iata.toUpperCase())
}

export const allAirports = async (search_key): Promise<Airport[]> => {
  return airports.filter((airport) => airport.name.toUpperCase().includes(search_key.toUpperCase())
  || airport.iata.toUpperCase().includes(search_key.toUpperCase())
  || airport.city.toUpperCase().includes(search_key.toUpperCase())
  || airport.country.toUpperCase().includes(search_key.toUpperCase())
  )
}
