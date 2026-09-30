import { Injectable } from '@nestjs/common';
import { PrismaService } from '../common/prisma.service';

function classifyIntent(query: string): string {
  const q = query.toLowerCase();
  if (q.includes('near me')) return 'local_discovery';
  if (q.includes('radio')) return 'find_radio';
  if (q.includes('help') || q.includes('how to')) return 'find_help';
  if (q.includes('job') || q.includes('plumber') || q.includes('service')) return 'find_service';
  return 'discover_content';
}

@Injectable()
export class SearchQueryService {
  constructor(private readonly prisma: PrismaService) {}
  async query(input: { query: string; userId?: string; geo?: Record<string, unknown>; limit?: number }) {
    const limit = Math.min(input.limit ?? Number(process.env.DEFAULT_SEARCH_LIMIT || 10), Number(process.env.MAX_SEARCH_LIMIT || 25));
    const results = await this.prisma.searchDocument.findMany({
      where: {
        OR: [
          { title: { contains: input.query, mode: 'insensitive' } },
          { subtitle: { contains: input.query, mode: 'insensitive' } },
          { keywordsJson: { contains: input.query, mode: 'insensitive' } },
          { tagsJson: { contains: input.query, mode: 'insensitive' } },
        ],
        status: 'active',
        visibility: 'public',
      },
      take: limit,
      orderBy: [
        { engagementScore: 'desc' },
        { freshnessScore: 'desc' },
        { trustScore: 'desc' },
      ],
    });

    const intentClass = classifyIntent(input.query);

    await this.prisma.searchQueryLog.create({
      data: {
        queryText: input.query,
        userId: input.userId,
        intentClass,
        resultCount: results.length,
        zeroResults: results.length === 0,
      },
    });

    return { intentClass, results };
  }
}
