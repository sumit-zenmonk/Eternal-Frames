import { Command, CommandRunner } from 'nest-commander';
import { UserOutboxEntryPublisherCronService } from '../../../../module/user-module/infrastructure/cron/outbox.entry.publisher/outbox.entry.publisher';

@Command({
  name: 'dispatch-user-outbox',
  description: 'Dispatch user outbox entries',
})
export class DispatchUserOutboxCommand extends CommandRunner {
  constructor(
    private readonly userOutboxEntryPublisherCronService: UserOutboxEntryPublisherCronService,
  ) {
    super();
  }

  async run() {
    await this.userOutboxEntryPublisherCronService.handleCron();
  }
}
