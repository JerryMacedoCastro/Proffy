import { Request, Response } from 'express';

import db from '../database/connection';
import convertHoursToMinutes from '../utils/convertHoursToMinutes';

export default class {
  async index(request: Request, response: Response) {
    const totalConnections = await db('connections').count(
      '* as total',
    );

    const { total } = totalConnections[0];

    return response.json({ total });
  }

  async create(request: Request, response: Response) {
    const { user_id } = request.body;

    try {
      await db('connections').insert({
        user_id,
      });

      response.status(201).send();
    } catch (error) {
      response.status(400).json({
        error: 'Error creating connections',
      });
    }
  }
}
