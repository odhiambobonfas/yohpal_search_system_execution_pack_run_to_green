import { Body, Controller, Post } from '@nestjs/common';
import { RankingService } from './ranking.service';

@Controller('search-ranking')
export class RankingController {
  constructor(private readonly service: RankingService) {}
  @Post('score') score(@Body() body: { engagementScore?: number; freshnessScore?: number; trustScore?: number }) {
    return this.service.score(body);
  }
}
