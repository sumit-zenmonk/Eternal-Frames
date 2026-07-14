import { Command, CommandRunner } from 'nest-commander';
import { BillingOutboxEntryPublisherCronService } from '../../../cron/outbox.entry.publisher/outbox.entry.publisher';

@Command({
  name: 'dispatch-billing-outbox',
  description: 'Dispatch billing outbox entries',
})
export class BillingOutboxEntryPublisherCommand extends CommandRunner {
  constructor(
    private readonly billingOutboxEntryPublisherCronService: BillingOutboxEntryPublisherCronService,
  ) {
    super();
  }

  async run() {
    await this.billingOutboxEntryPublisherCronService.handleCron();
  }
}
