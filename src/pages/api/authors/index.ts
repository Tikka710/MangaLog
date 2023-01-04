import { Author } from '@prisma/client';
import type { NextApiRequest, NextApiResponse } from 'next';

import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Author[]>,
){
  /**投稿者リスト */
  const authors = await prisma.author.findMany();
  res.status(200).json(authors);
}