import { Controller, Get } from '@nestjs/common';
import { ConnectorsService } from './connectors.service';

@Controller('search-connectors')
export class ConnectorsController {
  constructor(private readonly service: ConnectorsService) {}
  @Get() list() { return this.service.list(); }
}
