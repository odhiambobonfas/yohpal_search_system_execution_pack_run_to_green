import { Body, Controller, Get, Post } from '@nestjs/common';
import { SearchAnalyticsService } from './search-analytics.service';

@Controller('search-analytics')
export class SearchAnalyticsController {
  constructor(private readonly service: SearchAnalyticsService) {}
  @Get('summary') summary() { return this.service.summary(); }
  @Post('click') click(@Body() body: { query: string; documentId: string; userId?: string }) {
    return this.service.click(body);
  }
}
