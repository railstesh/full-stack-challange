import { NextApiRequest, NextApiResponse } from 'next'

import { allAirports } from '../../models/airport'

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { search_key } = req.query;
  const airports = await allAirports(search_key)

  res.status(200).json(airports)
}
