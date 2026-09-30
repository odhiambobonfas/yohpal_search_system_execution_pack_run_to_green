import { IngestionSyncProcessor } from './processors/ingestion-sync.processor';
import { IndexRefreshProcessor } from './processors/index-refresh.processor';
import { AnalyticsRollupProcessor } from './processors/analytics-rollup.processor';
import { ZeroResultsRollupProcessor } from './processors/zero-results-rollup.processor';

async function bootstrap() {
  const processors = [
    new IngestionSyncProcessor(),
    new IndexRefreshProcessor(),
    new AnalyticsRollupProcessor(),
    new ZeroResultsRollupProcessor(),
  ];
  for (const processor of processors) await processor.start();
  console.log('yohpal search worker boot');
}
bootstrap();
