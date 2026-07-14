import { Command, CommandRunner } from 'nest-commander';
import { BillingOutboxEntryPublisherCronService } from '../../../../module/billing-module/infrastructure/cron/outbox.entry.publisher/outbox.entry.publisher';
import { EventOutboxEntryPublisherCronService } from '../../../../module/event-module/infrastructure/cron/outbox.entry.publisher/outbox.entry.publisher';
import { UserOutboxEntryPublisherCronService } from '../../../../module/user-module/infrastructure/cron/outbox.entry.publisher/outbox.entry.publisher';

@Command({
  name: 'run-cron',
  description: 'Run the outbox publisher cron jobs',
})
export class CronCommand extends CommandRunner {
  constructor(
    private readonly userOutboxEntryPublisherCronService: UserOutboxEntryPublisherCronService,
    private readonly billingOutboxEntryPublisherCronService: BillingOutboxEntryPublisherCronService,
    private readonly eventOutboxEntryPublisherCronService: EventOutboxEntryPublisherCronService,
  ) {
    super();
  }

  async run(): Promise<void> {
    await Promise.all([
      this.userOutboxEntryPublisherCronService.handleCron(),
      this.billingOutboxEntryPublisherCronService.handleCron(),
      this.eventOutboxEntryPublisherCronService.handleCron(),
    ]);

    await new Promise(() => { });
  }
}
