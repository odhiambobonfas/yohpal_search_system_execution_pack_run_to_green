import { Injectable } from '@nestjs/common';

@Injectable()
export class ConnectorsService {
  list() {
    return {
      modules: ['radio', 'short_video', 'hustle', 'ads', 'help', 'smart_display'],
      status: 'starter',
    };
  }
}
