import { Body, Controller, Post } from '@nestjs/common';
import { RecommendationsService } from './recommendations.service';

@Controller('search-recommendations')
export class RecommendationsController {
  constructor(private readonly service: RecommendationsService) {}
  @Post() blend(@Body() body: { userId?: string; module?: string }) {
    return this.service.blend(body);
  }
}
