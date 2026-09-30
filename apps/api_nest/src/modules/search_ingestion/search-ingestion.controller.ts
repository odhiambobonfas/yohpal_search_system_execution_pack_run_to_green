import { Body, Controller, Post } from '@nestjs/common';
import { SearchIngestionService } from './search-ingestion.service';

@Controller('search-ingestion')
export class SearchIngestionController {
  constructor(private readonly service: SearchIngestionService) {}
  @Post() ingest(@Body() body: { documentId: string; entityType: string; module: string; title: string; subtitle?: string; keywords?: string[]; tags?: string[]; geo?: Record<string, unknown>; status?: string; visibility?: string; engagementScore?: number; freshnessScore?: number; trustScore?: number; actionTarget?: string }) {
    return this.service.ingest(body);
  }
}
