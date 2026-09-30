import { Injectable } from '@nestjs/common';
import { PrismaService } from '../common/prisma.service';

@Injectable()
export class SearchDocumentsService {
  constructor(private readonly prisma: PrismaService) {}
  list(module?: string) {
    return this.prisma.searchDocument.findMany({ where: module ? { module } : {}, orderBy: { updatedAt: 'desc' }, take: 500 });
  }
}
