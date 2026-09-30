import { Injectable } from '@nestjs/common';

@Injectable()
export class RankingService {
  score(input: { engagementScore?: number; freshnessScore?: number; trustScore?: number }) {
    const engagement = input.engagementScore ?? 0;
    const freshness = input.freshnessScore ?? 0;
    const trust = input.trustScore ?? 0;
    const score = (engagement * 0.4) + (freshness * 0.3) + (trust * 0.3);
    return { score };
  }
}
