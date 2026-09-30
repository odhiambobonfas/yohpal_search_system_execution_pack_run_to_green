import { Injectable } from '@nestjs/common';
import { PrismaService } from '../common/prisma.service';

@Injectable()
export class AutocompleteService {
  constructor(private readonly prisma: PrismaService) {}
  async suggest(q: string) {
    const suggestions = await this.prisma.searchSuggestion.findMany({
      where: { suggestionText: { contains: q, mode: 'insensitive' } },
      orderBy: [{ weight: 'desc' }, { createdAt: 'desc' }],
      take: 10,
    });
    return { suggestions };
  }
}
