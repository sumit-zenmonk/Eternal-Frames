import { Module } from "@nestjs/common";
import { CronModule } from "../cron/cron.module";
import { EventOutboxEntryPublisherCommand } from "./command/outbox-entry-publisher/outbox-entry-publisher.command";

@Module({
    imports: [
        CronModule,
    ],
    providers: [EventOutboxEntryPublisherCommand]
})
export class CommandModule { }
