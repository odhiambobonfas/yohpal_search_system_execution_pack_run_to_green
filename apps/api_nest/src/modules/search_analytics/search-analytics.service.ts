import { Injectable } from '@nestjs/common';
import { PrismaService } from '../common/prisma.service';

@Injectable()
export class SearchAnalyticsService {
  constructor(private readonly prisma: PrismaService) {}
  click(input: { query: string; documentId: string; userId?: string }) {
    return this.prisma.searchClickLog.create({
      data: {
        queryText: input.query,
        documentId: input.documentId,
        userId: input.userId,
      },
    });
  }

  async summary() {
    const queries = await this.prisma.searchQueryLog.count();
    const clicks = await this.prisma.searchClickLog.count();
    const zeroResults = await this.prisma.searchQueryLog.count({ where: { zeroResults: true } });
    return { queries, clicks, zeroResults };
  }
}
