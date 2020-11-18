import { NextApiRequest, NextApiResponse } from 'next'
import { people } from '../../data/people';

export default function getAllPeople (req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json(people);
}