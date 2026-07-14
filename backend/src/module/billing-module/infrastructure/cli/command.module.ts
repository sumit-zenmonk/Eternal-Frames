import { Module } from "@nestjs/common";
import { CronModule } from "../cron/cron.module";
import { BillingOutboxEntryPublisherCommand } from "./command/outbox-entry-publisher/outbox-entry-publisher.command";

@Module({
    imports: [
        CronModule,
    ],
    providers: [BillingOutboxEntryPublisherCommand]
})
export class CommandModule { }
