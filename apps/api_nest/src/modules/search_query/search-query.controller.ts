import { Body, Controller, Post } from '@nestjs/common';
import { SearchQueryService } from './search-query.service';

@Controller('search-query')
export class SearchQueryController {
  constructor(private readonly service: SearchQueryService) {}
  @Post() query(@Body() body: { query: string; userId?: string; geo?: Record<string, unknown>; limit?: number }) {
    return this.service.query(body);
  }
}
