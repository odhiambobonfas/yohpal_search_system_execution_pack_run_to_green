import { Controller, Get, Query } from '@nestjs/common';
import { SearchDocumentsService } from './search-documents.service';

@Controller('search-documents')
export class SearchDocumentsController {
  constructor(private readonly service: SearchDocumentsService) {}
  @Get() list(@Query('module') module?: string) { return this.service.list(module); }
}
