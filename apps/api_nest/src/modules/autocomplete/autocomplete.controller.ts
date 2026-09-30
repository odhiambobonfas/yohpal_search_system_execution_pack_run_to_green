import { Controller, Get, Query } from '@nestjs/common';
import { AutocompleteService } from './autocomplete.service';

@Controller('search-autocomplete')
export class AutocompleteController {
  constructor(private readonly service: AutocompleteService) {}
  @Get() suggest(@Query('q') q: string) { return this.service.suggest(q); }
}
