import { Request, Response } from 'express';

import User from '../models/User';

export const createUser = async (req: Request, res: Response) => {
  let user = await User.create({ ...req.body });
  res.status(200).json({ message: 'Usuario creado exitoso', data: user });
};
