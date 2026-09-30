import { Injectable } from '@nestjs/common';

@Injectable()
export class RecommendationsService {
  blend(input: { userId?: string; module?: string }) {
    return {
      userId: input.userId,
      module: input.module,
      recommendations: [],
      mode: 'starter_blend',
    };
  }
}
