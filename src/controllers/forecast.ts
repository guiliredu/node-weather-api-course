import { Controller, Get } from '@overnightjs/core';
import { Request, Response } from 'express';

@Controller('forecast')
export class ForecastController {

    @Get('')
    public getForecastForLoggerUser(req: Request, res: Response): void {
        res.send(['ok']);
    }
}