import { Injectable } from '@nestjs/common';
import { PrismaService } from '../common/prisma.service';

@Injectable()
export class SearchIngestionService {
  constructor(private readonly prisma: PrismaService) {}
  ingest(input: { documentId: string; entityType: string; module: string; title: string; subtitle?: string; keywords?: string[]; tags?: string[]; geo?: Record<string, unknown>; status?: string; visibility?: string; engagementScore?: number; freshnessScore?: number; trustScore?: number; actionTarget?: string }) {
    return this.prisma.searchDocument.upsert({
      where: { documentId: input.documentId },
      update: {
        entityType: input.entityType,
        module: input.module,
        title: input.title,
        subtitle: input.subtitle,
        keywordsJson: input.keywords ? JSON.stringify(input.keywords) : undefined,
        tagsJson: input.tags ? JSON.stringify(input.tags) : undefined,
        geoJson: input.geo ? JSON.stringify(input.geo) : undefined,
        status: input.status ?? 'active',
        visibility: input.visibility ?? 'public',
        engagementScore: input.engagementScore ?? 0,
        freshnessScore: input.freshnessScore ?? 0,
        trustScore: input.trustScore ?? 0,
        actionTarget: input.actionTarget,
      },
      create: {
        documentId: input.documentId,
        entityType: input.entityType,
        module: input.module,
        title: input.title,
        subtitle: input.subtitle,
        keywordsJson: input.keywords ? JSON.stringify(input.keywords) : undefined,
        tagsJson: input.tags ? JSON.stringify(input.tags) : undefined,
        geoJson: input.geo ? JSON.stringify(input.geo) : undefined,
        status: input.status ?? 'active',
        visibility: input.visibility ?? 'public',
        engagementScore: input.engagementScore ?? 0,
        freshnessScore: input.freshnessScore ?? 0,
        trustScore: input.trustScore ?? 0,
        actionTarget: input.actionTarget,
      },
    });
  }
}
